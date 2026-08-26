import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const regDataPath = path.join(
      process.cwd(),
      "regdata"
    );

    // Make sure regdata exists
    await fs.mkdir(regDataPath, {
      recursive: true,
    });

    // Get all files
    const files = await fs.readdir(regDataPath);

    // Only JSON files
    const jsonFiles = files
      .filter((file) => file.endsWith(".json"))
      .sort()
      .reverse();

    const data = [];

    for (const file of jsonFiles) {
      const filePath = path.join(
        regDataPath,
        file
      );

      const content = await fs.readFile(
        filePath,
        "utf-8"
      );

      const registrations = JSON.parse(content);

      data.push({
        date: file.replace(".json", ""),
        count: registrations.length,
        registrations,
      });
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(
      "Registration files API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Unable to read registration data.",
      },
      { status: 500 }
    );
  }
}