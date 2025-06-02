# Dental Care Portal

A comprehensive dental clinic landing page with full-stack functionality built with React and Express.

## Features

### Frontend
- **Modern Landing Page** with all essential sections
- **Responsive Design** using Tailwind CSS
- **Appointment Booking Form** with validation
- **Services Showcase** with detailed descriptions
- **Doctor Profiles** with experience and ratings
- **Patient Testimonials** with star ratings
- **Image Gallery** with modal view
- **FAQ Section** with expandable answers
- **Contact Information** with social media links
- **Smooth Navigation** with scroll-to-section functionality

### Backend
- **Express.js API** with RESTful endpoints
- **PostgreSQL Database** with Drizzle ORM
- **CRUD Operations** for all entities
- **Data Validation** using Zod schemas
- **Error Handling** and logging
- **Database Seeding** with sample data

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Wouter (routing), TanStack Query
- **Backend**: Express.js, TypeScript, Drizzle ORM
- **Database**: PostgreSQL
- **UI Components**: shadcn/ui
- **Validation**: Zod
- **Icons**: Lucide React

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities and configurations
│   │   └── hooks/         # Custom React hooks
├── server/                # Backend Express application
│   ├── db.ts             # Database connection
│   ├── routes.ts         # API endpoints
│   ├── storage.ts        # Data access layer
│   └── seed.ts           # Database seeding
├── shared/               # Shared types and schemas
│   └── schema.ts        # Database schema and types
└── deploy-to-github.sh  # Deployment script
```

## API Endpoints

- `GET /api/services` - Get all dental services
- `GET /api/doctors` - Get all doctors
- `GET /api/testimonials` - Get all patient testimonials
- `POST /api/appointments` - Create new appointment
- `GET /api/appointments` - Get all appointments

## Database Schema

### Tables
- **appointments** - Patient appointment bookings
- **services** - Dental services offered
- **doctors** - Doctor profiles and information
- **testimonials** - Patient reviews and ratings
- **users** - User authentication (ready for future auth)
- **sessions** - Session storage (ready for future auth)

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Setup Database**
   ```bash
   npm run db:push
   ```

3. **Seed Database**
   ```bash
   npx tsx server/seed.ts
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Access Application**
   - Frontend: http://localhost:5000
   - Backend API: http://localhost:5000/api

## Deployment

Use the provided deployment script to push to GitHub:

```bash
chmod +x deploy-to-github.sh
./deploy-to-github.sh YOUR_GITHUB_TOKEN
```

## Sample Data

The application comes with pre-populated sample data including:
- 6 dental services (teeth whitening, braces, implants, etc.)
- 3 doctor profiles with specialties and experience
- 3 patient testimonials with ratings

## Features Overview

### For Patients
- Browse available dental services with pricing
- View doctor profiles and specialties
- Read patient testimonials and reviews
- Book appointments through online form
- View clinic gallery and facilities
- Get answers to frequently asked questions
- Access contact information and location

### For Clinic
- Receive appointment bookings through the website
- Showcase services and pricing
- Display doctor credentials and experience
- Collect and display patient testimonials
- Provide comprehensive clinic information

## Environment Variables

Required for production deployment:
- `DATABASE_URL` - PostgreSQL connection string
- `NODE_ENV` - Environment (development/production)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License