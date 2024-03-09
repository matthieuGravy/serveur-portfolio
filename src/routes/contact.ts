import express, { Router } from "express";
import { createContact } from "../db/controllers/contact";

const router: Router = express.Router();

router.post("/", createContact);

export default router;
