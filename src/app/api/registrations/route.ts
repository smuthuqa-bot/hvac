import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

type Registration = {
  id: string;
  name: string;
  email: string;
  mobile: string;
  qualification: string;
  address: string;
  registeredAt: string;
  age?: string; // Optional age field
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      mobile,
      qualification,
      address,
      age, // Capture the age field
    } = body;

    // Basic validation
    if (!name || !email || !mobile || !address || !age) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, mobile, address and age are required.",
        },
        { status: 400 }
      );
    }

    // Current date
    const now = new Date();

    const date = now.toISOString().split("T")[0];

    // regdata folder
    const regDataPath = path.join(
      process.cwd(),
      "regdata"
    );

    // Create regdata folder if it doesn't exist
    await fs.mkdir(regDataPath, {
      recursive: true,
    });

    // Day-wise file
    const filePath = path.join(
      regDataPath,
      `${date}.json`
    );

    // Read existing registrations
    let registrations: Registration[] = [];

    try {
      const existingData = await fs.readFile(
        filePath,
        "utf-8"
      );

      registrations = JSON.parse(existingData);
    } catch {
      // File doesn't exist yet
      registrations = [];
    }

    // Generate registration number
    const registrationNumber =
      `REG-${date.replaceAll("-", "")}-${String(
        registrations.length + 1
      ).padStart(3, "0")}`;

    const registration: Registration = {
      id: registrationNumber,
      name: name.trim(),
      email: email.trim(),
      age: age.trim(), // Store the age field
      mobile: mobile.trim(),
      qualification: qualification?.trim() || "",
      address: address.trim(),
      registeredAt: now.toISOString(),
    };

    // Add new registration
    registrations.push(registration);

    // Save JSON
    await fs.writeFile(
      filePath,
      JSON.stringify(registrations, null, 2),
      "utf-8"
    );

    return NextResponse.json({
      success: true,
      message: "Registration submitted successfully.",
      registrationId: registrationNumber,
    });
  } catch (error) {
    console.error("Registration API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to save registration.",
      },
      { status: 500 }
    );
  }
}