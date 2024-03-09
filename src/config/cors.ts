import express from "express";
const cors = require("cors");

const corsOptions = {
  origin: ["http://localhost:5173"],
  methods: "POST",
  credentials: true,
};

const configureCors = (app: express.Application) => {
  app.use(cors(corsOptions));
};

export default configureCors;
