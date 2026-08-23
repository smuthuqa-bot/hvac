import { Request, Response } from "express";
import pool from "../db/database";

export const createRegistration = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      name,
      email,
      mobile,
      qualification,
      address,
    } = req.body;

    // -----------------------------
    // Validation
    // -----------------------------

    if (!name?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Name is required",
      });
    }

    if (!email?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    if (!mobile?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Mobile number is required",
      });
    }

    if (!address?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Address is required",
      });
    }

    // -----------------------------
    // Email validation
    // -----------------------------

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address",
      });
    }

    // -----------------------------
    // Mobile validation
    // -----------------------------

    const mobileRegex = /^[0-9]{10}$/;

    if (!mobileRegex.test(mobile)) {
      return res.status(400).json({
        success: false,
        message:
          "Mobile number must contain 10 digits",
      });
    }

    // -----------------------------
    // Insert
    // -----------------------------

    const [result] = await pool.execute(
      `
      INSERT INTO registrations
      (
        name,
        email,
        mobile,
        qualification,
        address
      )
      VALUES (?, ?, ?, ?, ?)
      `,
      [
        name.trim(),
        email.trim().toLowerCase(),
        mobile.trim(),
        qualification?.trim() || null,
        address.trim(),
      ]
    );

    const insertResult = result as {
      insertId: number;
    };

    return res.status(201).json({
      success: true,
      message:
        "Registration submitted successfully",
      data: {
        id: insertResult.insertId,
      },
    });
  } catch (error) {
    console.error(
      "Create registration error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to submit registration",
    });
  }
};