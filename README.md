# TableNow - Restaurant Booking App

TableNow is a modern web application for restaurant reservations, built with Next.js and TypeScript. The application allows users to browse restaurants, make reservations, and manage their bookings.

## Features

- 🍽️ Browse restaurants with detailed information
- 🔍 Filter restaurants by location, cuisine, and more
- 📅 Real-time availability checking and booking
- 👤 User authentication and account management
- 📱 Responsive design for all device sizes
- 📊 Reservation management system

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Styling**: Tailwind CSS for responsive design
- **Forms**: React Hook Form for form validation
- **Date Handling**: date-fns for date manipulation

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Suliko007/tablenow-restaurant-booking.git
cd tablenow-restaurant-booking
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Deployment

### Deploying to Vercel

The easiest way to deploy this app is using Vercel:

1. Create a Vercel account at [vercel.com](https://vercel.com) if you don't have one.
2. Install the Vercel CLI:
```bash
npm install -g vercel
```

3. Run the following command from your project directory:
```bash
vercel
```

4. Follow the prompts to complete deployment.

### Environment Variables

For a production deployment, you may need to set the following environment variables:

- `NEXT_PUBLIC_API_URL`: Your API endpoint (if using an external API)
- `NEXT_PUBLIC_SITE_URL`: The base URL of your site

## Project Structure

- `/app` - Next.js application routes and pages
- `/components` - Reusable UI components
- `/data` - Static data (sample restaurants for demo)
- `/public` - Static assets like images and icons
- `/types` - TypeScript type definitions
- `/styles` - Global styles and CSS variables

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Images from [Unsplash](https://unsplash.com/)
- Icons from [Heroicons](https://heroicons.com/)