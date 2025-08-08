import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedProperties from '@/components/FeaturedProperties'
import Services from '@/components/Services'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedProperties />
      <Services />
      <Footer />
    </main>
  )
}



