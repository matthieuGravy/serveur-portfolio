import express from "express";
const cors = require("cors");

const corsOptions = {
  //  origin: process.env.NODE_ENV === 'production' ? ['http://your-production-domain.com'] : '*',
  origin: ["http://localhost:5173"],
  methods: "POST",
  credentials: true,
};

const configureCors = (app: express.Application) => {
  app.use(cors(corsOptions));
};

export default configureCors;
