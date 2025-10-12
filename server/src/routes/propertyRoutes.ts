import express from 'express';
import {
  getProperties,
  getFeaturedProperties,
  getProperty,
  createProperty,
  updateProperty,
  deleteProperty
} from '../controllers/propertyController';

const router = express.Router();


router.get('/', getProperties);

router.get('/featured', getFeaturedProperties);

// GET single property
router.get('/:id', getProperty);

// POST new property
router.post('/', createProperty);

// PUT update property
router.put('/:id', updateProperty);

// DELETE property
router.delete('/:id', deleteProperty);

export default router;