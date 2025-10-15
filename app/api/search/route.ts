import { NextResponse } from 'next/server'

// Simple in-memory sample properties matching FeaturedProperties
const sampleProperties = [
  { id: '1', title: 'Luxury 3 BHK Apartment in Prime Location', location: 'Bandra West, Mumbai', price: 85000, type: 'Apartment' },
  { id: '2', title: 'Modern 2 BHK Villa with Garden', location: 'Whitefield, Bangalore', price: 65000, type: 'Villa' },
  { id: '3', title: 'Premium 4 BHK Penthouse', location: 'Hinjewadi, Pune', price: 120000, type: 'Penthouse' },
  { id: '4', title: 'Cozy Studio Apartment', location: 'Koramangala, Bangalore', price: 25000, type: 'Studio' },
  { id: '5', title: 'Family 3 BHK Independent House', location: 'Gachibowli, Hyderabad', price: 75000, type: 'Independent House' },
  { id: '6', title: 'Luxury 2 BHK with City View', location: 'Andheri West, Mumbai', price: 95000, type: 'Apartment' },
]

export async function POST(req: Request) {
  const body = await req.json()
  const location: string = (body.location || '').toLowerCase()
  const propertyType: string = (body.propertyType || '').toLowerCase()
  const budget: string = body.budget || '' // e.g., '50000-100000' or '100000+'

  const [min, max] = (() => {
    if (!budget) return [0, Number.MAX_SAFE_INTEGER]
    if (budget.endsWith('+')) return [parseInt(budget), Number.MAX_SAFE_INTEGER]
    const parts = budget.split('-')
    if (parts.length === 2) {
      return [parseInt(parts[0]), parseInt(parts[1])]
    }
    return [0, Number.MAX_SAFE_INTEGER]
  })()

  const results = sampleProperties.filter((p) => {
    const matchesLocation = !location || p.location.toLowerCase().includes(location)
    const matchesType = !propertyType || p.type.toLowerCase() === propertyType
    const matchesBudget = p.price >= min && p.price <= max
    return matchesLocation && matchesType && matchesBudget
  })

  return NextResponse.json({ count: results.length, results })
}


