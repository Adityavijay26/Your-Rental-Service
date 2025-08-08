'use client'

import { Shield, CreditCard, Home, Calculator, FileText, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Home,
    title: 'Zero Brokerage Properties',
    description: 'Access exclusive properties with zero brokerage fees and instant booking.',
    color: 'bg-blue-500',
  },
  {
    icon: CreditCard,
    title: 'Pay on Credit',
    description: 'Pay your rent using credit cards with flexible payment options.',
    color: 'bg-green-500',
  },
  {
    icon: Calculator,
    title: 'Home Loans',
    description: 'Get the lowest interest rate offers on home loans from top banks.',
    color: 'bg-purple-500',
  },
  {
    icon: Shield,
    title: 'Rental Protection',
    description: 'Protection against cyber frauds and secure rental transactions.',
    color: 'bg-red-500',
  },
  {
    icon: FileText,
    title: 'Rent Receipt Generator',
    description: 'Generate rent receipts instantly for tax and documentation purposes.',
    color: 'bg-yellow-500',
  },
  {
    icon: Users,
    title: 'PG/Co-Living',
    description: 'Find affordable PG and co-living spaces with verified amenities.',
    color: 'bg-indigo-500',
  },
]

export default function Services() {
  return (
    <section className="py-12 sm:py-16 bg-white">
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
            Explore Property Related Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Discover our comprehensive range of services designed to make your rental journey seamless
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
                {/* Icon */}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${service.color} rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="mt-3 sm:mt-4">
                  <a
                    href="#"
                    className="text-primary-600 hover:text-primary-700 font-medium text-xs sm:text-sm inline-flex items-center group/link"
                  >
                    Learn More
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Ready to Find Your Perfect Home?
            </h3>
            <p className="text-primary-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Join thousands of satisfied customers who found their dream homes through our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-white text-primary-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm sm:text-base">
                Start Searching
              </button>
              <button className="border border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-white hover:text-primary-600 transition-colors font-medium text-sm sm:text-base">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



