import mongoose, { Document, Schema } from 'mongoose';

export interface IProperty extends Document {
  title: string;
  description: string;
  price: number;
  location: string;
  imageUrl: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const propertySchema = new Schema<IProperty>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  imageUrl: { type: String, required: true },
  type: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  area: { type: Number, required: true },
  featured: { type: Boolean, default: false },
}, {
  timestamps: true
});

export default mongoose.model<IProperty>('Property', propertySchema);