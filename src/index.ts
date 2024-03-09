const express = require("express");
import connectDB from "./db/index";
import { Application } from "express";

import configureCors from "./config/cors";

const app: Application = express();
const port = process.env.PORT || 4700;

configureCors(app);

import contact from "./routes/contact";

connectDB();

//erreur

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contact", contact);

app.listen(port, () => {
  console.log(`🚀 http://localhost:${port}`);
});
