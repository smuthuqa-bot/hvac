import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import registrationRoutes from "./routes/registration.routes";

dotenv.config();

const app = express();

const PORT = Number(
  process.env.PORT || 5005
);

// -----------------------------
// Middleware
// -----------------------------

app.use(
  cors({
    origin: [
      "http://localhost:3000",
    ],
    credentials: true,
  })
);

app.use(express.json());

// -----------------------------
// Health
// -----------------------------

app.get("/health", (_req, res) => {
  res.json({
    success: true,
    message: "ACME HVAC API is running",
  });
});

// -----------------------------
// Registration
// -----------------------------

app.use(
  "/api/registrations",
  registrationRoutes
);

// -----------------------------
// Start server
// -----------------------------

app.listen(PORT, () => {
  console.log(
    `ACME HVAC API running on port ${PORT}`
  );
});