# Your Rental Service - Modern Rental Platform

A fully functional, modern rental service website built with Next.js, TypeScript, and Tailwind CSS. This project is a clone of Housing.com with a focus on rental properties.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Property Search**: Advanced search functionality with filters
- **Property Listings**: Beautiful property cards with detailed information
- **Responsive Design**: Works perfectly on all devices
- **Interactive Components**: Hover effects, animations, and user interactions
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid development

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Notifications**: React Hot Toast

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd your-rental-service
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Project Structure

```
your-rental-service/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section with search
│   ├── PropertyCard.tsx     # Property listing card
│   ├── FeaturedProperties.tsx # Featured properties section
│   ├── Services.tsx         # Services showcase
│   └── Footer.tsx           # Footer component
├── public/                  # Static assets
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🎨 Components

### Header
- Responsive navigation with mobile menu
- Search functionality
- User actions (login, saved properties, notifications)

### Hero Section
- Eye-catching hero with gradient background
- Advanced search form with filters
- Popular locations quick access
- Statistics display

### Property Cards
- Beautiful property images
- Detailed property information
- Interactive like button
- Contact actions (call, message)
- Verified and featured badges

### Featured Properties
- Grid layout of premium properties
- Smooth animations on scroll
- Responsive design

### Services
- Service showcase with icons
- Call-to-action section
- Hover effects and animations

### Footer
- Comprehensive footer with multiple sections
- Newsletter signup
- Social media links
- Company information

## 🎯 Key Features

### Search Functionality
- Location-based search
- Property type filtering
- Budget range selection
- Popular location quick access

### Property Listings
- High-quality property images
- Detailed property information
- Rating system
- Verification badges
- Contact options

### User Experience
- Smooth animations and transitions
- Responsive design for all devices
- Interactive elements
- Modern UI components

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... customize your colors
  }
}
```

### Content
- Update property data in `FeaturedProperties.tsx`
- Modify services in `Services.tsx`
- Customize footer links in `Footer.tsx`

### Styling
- Modify global styles in `app/globals.css`
- Update component-specific styles using Tailwind classes

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6)
- **Secondary**: Gray (#64748B)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Error**: Red (#EF4444)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Spacing
- Consistent spacing using Tailwind's spacing scale
- Responsive padding and margins

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from [Housing.com](https://housing.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)

## 📞 Support

For support, email support@yourrentalservice.com or create an issue in the repository.

---

**Your Rental Service** - Making rental property search simple and efficient.



