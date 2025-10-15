'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Menu, X, User, Heart, Bell, Home, Building, MapPin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { data: session } = useSession()
  const router = useRouter()

  const navigation = [
    { name: 'Buy', href: '/buy', icon: Home },
    { name: 'Rent', href: '/rent', icon: Building },
    { name: 'Commercial', href: '/commercial', icon: Building },
    { name: 'PG/Co-Living', href: '/pg', icon: Building },
    { name: 'Plots', href: '/plots', icon: MapPin },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <Home className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-900 hidden sm:block">Your Rental Service</span>
            <span className="text-lg font-bold text-gray-900 sm:hidden">YRS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for properties, localities, projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-primary-600">
              <Heart className="w-5 h-5" />
              <span className="text-sm">Saved</span>
            </button>
            
            <button className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-primary-600">
              <Bell className="w-5 h-5" />
              <span className="text-sm">Notifications</span>
            </button>

            {session ? (
              <button
                onClick={() => router.push('/logout')}
                className="hidden md:flex items-center space-x-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
              >
                <User className="w-4 h-4" />
                <span className="text-sm">Logout</span>
              </button>
            ) : (
              <button
                onClick={() => router.push('/login')}
                className="hidden md:flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                <User className="w-4 h-4" />
                <span className="text-sm">Login</span>
              </button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for properties..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <button className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 py-2 w-full">
                  <Heart className="w-5 h-5" />
                  <span>Saved Properties</span>
                </button>
                <button className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 py-2 w-full">
                  <Bell className="w-5 h-5" />
                  <span>Notifications</span>
                </button>
                <button className="flex items-center space-x-3 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors w-full">
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}



