# Montana Summer Adventures

A modern, responsive website for Montana Summer Adventures - offering authentic Montana outdoor experiences including river floats, fishing, cattle drives, trail rides, and more.

## 🌲 Live Website

- **Production**: [montanasummeradventures.com](https://www.montanasummeradventures.com)
- **Repository**: [github.com/tgascon212/MontanaSummerAdventures](https://github.com/tgascon212/MontanaSummerAdventures)

## ✨ Features

- **9 Adventure Experiences**: River Float, Gold Panning, Fishing, Mountain Lake Trip, Shed Hunting, Cattle Drive, Trail Ride, Rifle Shooting, Wildlife Viewing
- **Individual Adventure Pages**: Detailed information for each activity
- **Cabin Rental Inquiries**: Book accommodations directly through the site
- **Multi-Select Contact Form**: Choose multiple adventures and date ranges
- **Responsive Design**: Mobile-first approach with beautiful UI across all devices
- **Social Integration**: Facebook link and social sharing
- **SEO Optimized**: Metadata and keywords for better search visibility

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom earth-tone color palette
- **Deployment Ready**: Optimized for Vercel, Netlify, or Cloudflare Pages

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/tgascon212/MontanaSummerAdventures.git
cd MontanaSummerAdventures
```

2. Navigate to the Next.js project:
```bash
cd montana_summer_adventures
```

3. Install dependencies:
```bash
npm install
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
montana_summer_adventures/
├── app/                      # Next.js App Router
│   ├── adventures/[slug]/   # Dynamic adventure pages
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── Navigation.tsx       # Header navigation
│   ├── Hero.tsx            # Hero section
│   ├── Activities.tsx      # Activities grid
│   ├── ActivityCard.tsx    # Individual activity cards
│   ├── ContactForm.tsx     # Contact/booking form
│   └── Footer.tsx          # Footer with contact info
├── public/                  # Static assets
│   └── images/
│       ├── adventures/      # Activity photos
│       └── logo/           # Brand logos
└── tailwind.config.ts      # Tailwind configuration
```

## 🎨 Custom Color Palette

The site uses a custom earth-tone color scheme:

```javascript
colors: {
  earth: {
    50: '#f9f7f4',
    100: '#f0ebe3',
    200: '#e1d7c7',
    300: '#cbb8a0',
    400: '#b39878',
    500: '#9e7f5d',
    600: '#8b6d4f',
    700: '#735843',
    800: '#5f4a39',
    900: '#4f3d30',
  }
}
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy
5. Connect your custom domain in project settings

### Other Platforms

The site can also be deployed to:
- Netlify
- Cloudflare Pages
- AWS Amplify
- Any platform supporting Next.js

## 📞 Contact Information

**Montana Summer Adventures**
- Address: 66 Swamp Creek Rd, Plains, MT 59859
- Phone: (406) 360-8106
- Email: info@montanasummeradventures.com
- Facebook: [Montana Summer Adventures](https://www.facebook.com/p/Montana-Summer-Adventures-100064240896314/)

## 🧑‍💻 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Key Features to Note

- **Hydration Warning Suppression**: The layout includes `suppressHydrationWarning` to prevent browser extension warnings
- **Image Optimization**: All images use Next.js Image component for automatic optimization
- **Responsive Navigation**: Mobile menu with hamburger toggle
- **Form Validation**: Client-side validation with required fields
- **Accessibility**: Semantic HTML and ARIA labels

## 📄 License

Copyright © 2026 Montana Summer Adventures. All rights reserved.

## 🤝 Contributing

This is a private commercial project. For inquiries about the website, please contact Montana Summer Adventures directly.

---

Built with ❤️ for authentic Montana experiences
