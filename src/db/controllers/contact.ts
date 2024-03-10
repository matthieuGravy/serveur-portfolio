import Joi from "joi";

import { Request, Response } from "express";
import Contact, { IContact } from "../models/contact";

const schema = Joi.object({
  prenom: Joi.string().min(2).max(50).required(),
  nom: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  entreprise: Joi.string().min(2).max(50).required(),
  sujet: Joi.string().min(2).max(50).required(),
  message: Joi.string().min(2).max(500).required(),
});

export const createContact = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { error } = schema.validate(req.body);
  if (error) {
    console.log("Validation error:", error.details[0].message); // Ajoutez cette ligne
    res.status(400).json({ message: error.details[0].message });
    return;
  }

  const contactData: IContact = req.body;
  const newContact = new Contact(contactData);
  try {
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Save error:", error.message); // Ajoutez cette ligne
      res.status(400).json({ message: error.message });
    }
  }
};
