# Dawn CTF 2026

Official landing page for **Dawn CTF 2026** - A premier 12-hour overnight cybersecurity competition organized by AWS Cloud Club at Lovely Professional University.

## About the Event

**Dawn CTF 2026** is an intensive cybersecurity Capture The Flag competition designed to challenge and enhance the skills of security enthusiasts, students, and professionals. Set against the backdrop of an overnight marathon, participants will face real-world security challenges across multiple domains.

### Event Details

- **Date**: April 2-4, 2026
- **Duration**: 12-hour overnight CTF (Workshop Day + Competition)
- **Location**: Lovely Professional University, Punjab, India
- **Organizer**: AWS Cloud Club LPU
- **Format**: Jeopardy-style CTF competition
- **Audience**: Students, cybersecurity enthusiasts, all skill levels welcome

### Event Highlights

- **Real-World Challenges**: Authentic security scenarios across web exploitation, cryptography, forensics, and more
- **Learning Focused**: Pre-CTF workshops to prepare participants
- **Prize Pool**: Exciting prizes for top performers
- **Overnight Experience**: 12-hour midnight to dawn hacking marathon
- **Networking**: Connect with 500+ cybersecurity enthusiasts
- **AWS Integration**: Leverage AWS services and cloud security

### Schedule

**April 2, 2026 - Workshop Day**
- 9:00 AM - Registration & Breakfast
- 10:00 AM - Opening Ceremony
- 11:00 AM - CTF Basics Workshop
- 2:00 PM - Lunch Break
- 3:00 PM - Hands-on Training Sessions
- 6:00 PM - Day 1 Wrap-up

**April 3-4, 2026 - Overnight CTF**
- 8:00 PM - Check-in & Dinner
- 9:00 PM - **CTF Competition Begins**
- 12:00 AM - Midnight Snacks
- 3:00 AM - Energy Boost Break
- 6:00 AM - Breakfast Service
- 9:00 AM - **Competition Ends**
- 10:00 AM - Results & Prize Distribution

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Custom Hacker.ttf
- **Icons**: Font Awesome 6.5.1
- **Theme**: Red & Black Cybersecurity Aesthetic

## Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/awscloudclublpu/dawnctf_frontend.git
   cd dawnctf
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

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
dawnctf/
├── app/
│   ├── globals.css          # Global styles & animations
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Main landing page
│   └── login/
│       └── page.tsx         # Login page
├── components/
│   ├── Navigation.tsx       # Header navigation
│   └── ui/
│       └── landing/
│           ├── HeroSection.tsx
│           ├── EventOverview.tsx
│           ├── ScheduleSection.tsx
│           ├── OrganizerInfo.tsx
│           └── Footer.tsx
├── public/
│   ├── font/
│   │   └── Hacker.ttf       # Custom hacker font
│   ├── image/
│   │   └── logo/
│   └── video/
│       └── background.mp4   # Hero background video
└── lib/
    └── utils.ts
```

## Features

- **Hacker Aesthetic**: Red & black theme with glitch animations
- **Performance**: Optimized with Next.js App Router
- **Responsive**: Mobile-first design
- **Animations**: Custom CSS keyframe animations (glitch, flicker, scanline)
- **Custom Typography**: Hacker.ttf font for authentic cybersecurity look
- **Component-Based**: Modular architecture for maintainability

## Contact

- **Email**: club@awslpu.in
- **Website**: [awslpu.in](https://awslpu.in)
- **Social Media**: Follow AWS Cloud Club LPU on LinkedIn, Instagram, Twitter

## License

© 2026 Dawn CTF. All rights reserved. Powered by AWS Cloud Club LPU.

---

**Ready to test your skills?** Join us for an unforgettable overnight hacking experience! 🔴⚫
