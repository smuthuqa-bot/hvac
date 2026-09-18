import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

type CorporateInquiry = {
  id: string;
  companyName: string;
  gstin: string;
  address: string;
  mobile: string;
  email: string;
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
      mobile,
      email,
      employeesRequired,
      employmentType,
      temporaryDuration,
    } = body;

    // =========================================================
    // REQUIRED FIELD VALIDATION
    // =========================================================
    if (
      !companyName ||
      !gstin ||
      !address ||
      !mobile ||
      !email ||
      !employeesRequired ||
      !employmentType
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Company name, GSTIN, mobile, email, address, employees required and employment type are required.",
        },
        { status: 400 }
      );
    }

    // =========================================================
    // MOBILE VALIDATION
    // =========================================================
    const mobileNumber = String(mobile).trim();

    if (!/^[0-9]{10}$/.test(mobileNumber)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid 10-digit mobile number.",
        },
        { status: 400 }
      );
    }

    // =========================================================
    // EMAIL VALIDATION
    // =========================================================
    const emailAddress = String(email).trim().toLowerCase();

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // =========================================================
    // TEMPORARY EMPLOYMENT VALIDATION
    // =========================================================
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

    // =========================================================
    // DATE / TIME
    // =========================================================
    const now = new Date();

    // YYYY-MM-DD
    const date = now.toISOString().split("T")[0];

    // =========================================================
    // ENQUIRY DATA FOLDER
    // =========================================================
    const enquiryDataPath = path.join(
      process.cwd(),
      "enquirydata"
    );

    // Create folder if it doesn't exist
    await fs.mkdir(enquiryDataPath, {
      recursive: true,
    });

    // =========================================================
    // DAILY JSON FILE
    // =========================================================
    const filePath = path.join(
      enquiryDataPath,
      `${date}.json`
    );

    let inquiries: CorporateInquiry[] = [];

    // =========================================================
    // READ EXISTING DAY'S ENQUIRIES
    // =========================================================
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

    // =========================================================
    // GENERATE ENQUIRY NUMBER
    // =========================================================
    const enquiryNumber =
      `ENQ-${date.replaceAll("-", "")}-${String(
        inquiries.length + 1
      ).padStart(3, "0")}`;

    // =========================================================
    // CREATE ENQUIRY OBJECT
    // =========================================================
    const inquiry: CorporateInquiry = {
      id: enquiryNumber,

      companyName: String(companyName).trim(),

      gstin: String(gstin).trim().toUpperCase(),

      address: String(address).trim(),

      // Mobile number
      mobile: mobileNumber,

      // Email address
      email: emailAddress,

      employeesRequired: Number(employeesRequired),

      employmentType,

      temporaryDuration:
        employmentType === "Temporary"
          ? String(temporaryDuration).trim()
          : null,

      enquiredAt: now.toISOString(),
    };

    // =========================================================
    // ADD NEW ENQUIRY
    // =========================================================
    inquiries.push(inquiry);

    // =========================================================
    // SAVE DAILY JSON FILE
    // =========================================================
    await fs.writeFile(
      filePath,
      JSON.stringify(inquiries, null, 2),
      "utf-8"
    );

    // =========================================================
    // SUCCESS RESPONSE
    // =========================================================
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

// =============================================================
// GET ALL CORPORATE ENQUIRIES
// =============================================================
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