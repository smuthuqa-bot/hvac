import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

type CorporateInquiry = {
  id: string;
  companyName: string;
  gstin: string;
  address: string;
  employeesRequired: number;
  employmentType: "Permanent" | "Temporary";
  temporaryDuration: string | null;
  enquiredAt: string;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      companyName,
      gstin,
      address,
      employeesRequired,
      employmentType,
      temporaryDuration,
    } = body;

    // Required field validation
    if (
      !companyName ||
      !gstin ||
      !address ||
      !employeesRequired ||
      !employmentType
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Company name, GSTIN, address, employees required and employment type are required.",
        },
        { status: 400 }
      );
    }

    // Temporary employment requires duration
    if (
      employmentType === "Temporary" &&
      !temporaryDuration
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Temporary duration is required for temporary employment.",
        },
        { status: 400 }
      );
    }

    const now = new Date();

    // YYYY-MM-DD
    const date = now.toISOString().split("T")[0];

    // enquirydata folder
    const enquiryDataPath = path.join(
      process.cwd(),
      "enquirydata"
    );

    // Create folder if it doesn't exist
    await fs.mkdir(enquiryDataPath, {
      recursive: true,
    });

    // Daily JSON file
    const filePath = path.join(
      enquiryDataPath,
      `${date}.json`
    );

    let inquiries: CorporateInquiry[] = [];

    // Read existing day's enquiries
    try {
      const existingData = await fs.readFile(
        filePath,
        "utf-8"
      );

      inquiries = JSON.parse(existingData);

      if (!Array.isArray(inquiries)) {
        inquiries = [];
      }
    } catch {
      inquiries = [];
    }

    // Generate enquiry number
    const enquiryNumber =
      `ENQ-${date.replaceAll("-", "")}-${String(
        inquiries.length + 1
      ).padStart(3, "0")}`;

    const inquiry: CorporateInquiry = {
      id: enquiryNumber,

      companyName: companyName.trim(),

      gstin: gstin.trim().toUpperCase(),

      address: address.trim(),

      employeesRequired: Number(employeesRequired),

      employmentType,

      temporaryDuration:
        employmentType === "Temporary"
          ? temporaryDuration?.trim() || null
          : null,

      enquiredAt: now.toISOString(),
    };

    // Add new enquiry
    inquiries.push(inquiry);

    // Save daily JSON file
    await fs.writeFile(
      filePath,
      JSON.stringify(inquiries, null, 2),
      "utf-8"
    );

    return NextResponse.json({
      success: true,
      message: "Corporate enquiry submitted successfully.",
      enquiryId: enquiryNumber,
    });
  } catch (error) {
    console.error(
      "Corporate Inquiry API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Unable to save corporate enquiry.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const enquiryDataPath = path.join(
      process.cwd(),
      "enquirydata"
    );

    // Create folder if it doesn't exist
    await fs.mkdir(enquiryDataPath, {
      recursive: true,
    });

    // Read all files
    const files = await fs.readdir(
      enquiryDataPath
    );

    // Get JSON files and sort newest date first
    const jsonFiles = files
      .filter((file) => file.endsWith(".json"))
      .sort()
      .reverse();

    const data = [];

    for (const file of jsonFiles) {
      const filePath = path.join(
        enquiryDataPath,
        file
      );

      const content = await fs.readFile(
        filePath,
        "utf-8"
      );

      const inquiries = JSON.parse(content);

      data.push({
        date: file.replace(".json", ""),
        count: Array.isArray(inquiries)
          ? inquiries.length
          : 0,
        inquiries,
      });
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(
      "Corporate Inquiry files API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to read corporate enquiry data.",
      },
      { status: 500 }
    );
  }
}