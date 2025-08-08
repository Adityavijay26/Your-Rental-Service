'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, MapPin, Bed, Bath, Square, Star, Phone, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

interface PropertyCardProps {
  id: string
  title: string
  location: string
  price: string
  image: string
  bedrooms: number
  bathrooms: number
  area: string
  type: string
  rating?: number
  isVerified?: boolean
  isFeatured?: boolean
}

export default function PropertyCard({
  id,
  title,
  location,
  price,
  image,
  bedrooms,
  bathrooms,
  area,
  type,
  rating = 4.5,
  isVerified = true,
  isFeatured = false,
}: PropertyCardProps) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-col gap-1 sm:gap-2">
          {isFeatured && (
            <span className="bg-yellow-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium">
              Featured
            </span>
          )}
          {isVerified && (
            <span className="bg-green-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium">
              Verified
            </span>
          )}
        </div>

        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`absolute top-2 sm:top-3 right-2 sm:right-3 p-1.5 sm:p-2 rounded-full transition-all ${
            isLiked
              ? 'bg-red-500 text-white'
              : 'bg-white/80 text-gray-600 hover:bg-white'
          }`}
        >
          <Heart className={`w-3 h-3 sm:w-4 sm:h-4 ${isLiked ? 'fill-current' : ''}`} />
        </button>

        {/* Property Type */}
        <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3">
          <span className="bg-black/70 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs">
            {type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4">
        {/* Title and Rating */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-gray-900 line-clamp-2 text-sm sm:text-base">{title}</h3>
          <div className="flex items-center space-x-1 text-yellow-500">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
            <span className="text-xs sm:text-sm font-medium">{rating}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-600 mb-2 sm:mb-3">
          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
          <span className="text-xs sm:text-sm">{location}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between mb-3 sm:mb-4 text-xs sm:text-sm text-gray-600">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center">
              <Bed className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              <span>{bedrooms} Beds</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              <span>{bathrooms} Baths</span>
            </div>
            <div className="flex items-center">
              <Square className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              <span>{area}</span>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{price}</span>
            <span className="text-xs sm:text-sm text-gray-600 ml-1">/month</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button className="flex-1 bg-primary-600 text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center space-x-1 sm:space-x-2">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">Call</span>
          </button>
          <button className="flex-1 border border-primary-600 text-primary-600 py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg hover:bg-primary-50 transition-colors flex items-center justify-center space-x-1 sm:space-x-2">
            <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">Message</span>
          </button>
        </div>
      </div>
    </motion.div>
  )
}



