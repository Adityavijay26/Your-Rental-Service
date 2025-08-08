'use client'

import PropertyCard from './PropertyCard'
import { motion } from 'framer-motion'

const featuredProperties = [
  {
    id: '1',
    title: 'Luxury 3 BHK Apartment in Prime Location',
    location: 'Bandra West, Mumbai',
    price: '₹85,000',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop',
    bedrooms: 3,
    bathrooms: 2,
    area: '1,200 sq ft',
    type: 'Apartment',
    rating: 4.8,
    isVerified: true,
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Modern 2 BHK Villa with Garden',
    location: 'Whitefield, Bangalore',
    price: '₹65,000',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&h=300&fit=crop',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,500 sq ft',
    type: 'Villa',
    rating: 4.6,
    isVerified: true,
    isFeatured: true,
  },
  {
    id: '3',
    title: 'Premium 4 BHK Penthouse',
    location: 'Hinjewadi, Pune',
    price: '₹1,20,000',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop',
    bedrooms: 4,
    bathrooms: 3,
    area: '2,200 sq ft',
    type: 'Penthouse',
    rating: 4.9,
    isVerified: true,
    isFeatured: true,
  },
  {
    id: '4',
    title: 'Cozy Studio Apartment',
    location: 'Koramangala, Bangalore',
    price: '₹25,000',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=300&fit=crop',
    bedrooms: 1,
    bathrooms: 1,
    area: '450 sq ft',
    type: 'Studio',
    rating: 4.4,
    isVerified: true,
    isFeatured: false,
  },
  {
    id: '5',
    title: 'Family 3 BHK Independent House',
    location: 'Gachibowli, Hyderabad',
    price: '₹75,000',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=300&fit=crop',
    bedrooms: 3,
    bathrooms: 2,
    area: '1,800 sq ft',
    type: 'Independent House',
    rating: 4.7,
    isVerified: true,
    isFeatured: false,
  },
  {
    id: '6',
    title: 'Luxury 2 BHK with City View',
    location: 'Andheri West, Mumbai',
    price: '₹95,000',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=500&h=300&fit=crop',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,100 sq ft',
    type: 'Apartment',
    rating: 4.5,
    isVerified: true,
    isFeatured: false,
  },
]

export default function FeaturedProperties() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Featured Properties
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Discover our handpicked selection of premium properties in prime locations
          </p>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {featuredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PropertyCard {...property} />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <button className="bg-primary-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium text-sm sm:text-base">
            View All Properties
          </button>
        </motion.div>
      </div>
    </section>
  )
}



