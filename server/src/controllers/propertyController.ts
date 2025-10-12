import { Request, Response } from 'express';
import Property, { IProperty } from '../models/Property';

// Get all properties
export const getProperties = async (req: Request, res: Response) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching properties', error });
  }
};

// Get featured properties
export const getFeaturedProperties = async (req: Request, res: Response) => {
  try {
    const properties = await Property.find({ featured: true });
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching featured properties', error });
  }
};

// Get single property
export const getProperty = async (req: Request, res: Response) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching property', error });
  }
};

// Create property
export const createProperty = async (req: Request, res: Response) => {
  try {
    const property = new Property(req.body);
    const savedProperty = await property.save();
    res.status(201).json(savedProperty);
  } catch (error) {
    res.status(500).json({ message: 'Error creating property', error });
  }
};

// Update property
export const updateProperty = async (req: Request, res: Response) => {
  try {
    const property = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ message: 'Error updating property', error });
  }
};

// Delete property
export const deleteProperty = async (req: Request, res: Response) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.status(200).json({ message: 'Property deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting property', error });
  }
};