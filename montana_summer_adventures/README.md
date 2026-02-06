# Montana Summer Adventures

A modern, responsive website showcasing authentic Montana summer experiences built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **9 Unique Adventures:**
  - River Float
  - Gold Panning
  - Fishing
  - Mountain Lake Trip
  - Shed Hunting
  - Cattle Drive
  - Trail Ride
  - Rifle Shooting
  - Wildlife Viewing

- **Modern Design:**
  - Responsive mobile-first design
  - Beautiful hero section with Montana landscape
  - Interactive activity cards
  - Contact form for inquiries
  - Professional navigation and footer

- **Built With:**
  - Next.js 15
  - TypeScript
  - Tailwind CSS
  - React 18

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Update Contact Information

Edit the phone number and email in:
- `components/ContactForm.tsx` (lines with phone/email)
- `components/Footer.tsx` (contact section)

### Change Images

The hero and activity images use Unsplash placeholders. Replace them with your own images:
- Hero image: `components/Hero.tsx`
- Activity images: `components/Activities.tsx`

### Modify Activities

Edit the activities array in `components/Activities.tsx` to add, remove, or modify adventures.

### Color Scheme

The earth-toned color palette is defined in `tailwind.config.ts`. Customize the colors to match your brand.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy automatically

### Other Platforms

Build the production version:
```bash
npm run build
npm run start
```

## Support

For questions or support, contact:
- Email: info@montanasummeradventures.com
- Phone: (406) 555-1234

## License

© 2026 Montana Summer Adventures. All rights reserved.
