import mongoose, { Schema, Document } from "mongoose";

export interface IContact extends Document {
  prenom: string;
  nom: string;
  email: string;
  entreprise: string;
  sujet: string;
  message: string;
}

const contactSchema: Schema = new Schema({
  prenom: { type: String, required: true },
  nom: { type: String, required: true },
  email: { type: String, required: true },
  entreprise: { type: String, required: false },
  sujet: { type: String, required: true },
  message: { type: String, required: true },
});

export default mongoose.model<IContact>("Contact", contactSchema);
