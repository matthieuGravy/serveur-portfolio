import express from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";

const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? [process.env.PRODUCTION_ORIGIN || "default_production_origin"]
      : [process.env.FRONTEND_URL || "default_frontend_url"],
  methods: "POST",
  credentials: true,
};

const configureCors = (app: express.Application) => {
  app.use(cors(corsOptions));
};

export default configureCors;
