# DesignGenie

An AI-powered full-stack web application that allows users to generate and visualize stunning interior designs based on their preferences. Built with Next.js, Neon Postgres SQL Database, Drizzle ORM, and Clerk Authentication, this app provides an intuitive user experience for creating, customizing, and managing AI-generated interiors.

# Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [AI Integration](#ai-integration)
- [Payment Gateway Integration](#payment-gateway-integration)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Final Notes](#final-notes)

# Features

- **AI-Powered Interior Design Generation** – Generate stunning room designs using AI.
- **User Authentication** – Secure login and registration with Clerk authentication.
- **User Dashboard** – Manage and view AI-generated designs in a user-friendly dashboard.
- **Custom Loading States** – Smooth user experience with elegant loading animations.
- **Payment Integration** – Monetize the app with a payment gateway.
- **Responsive Design** – Built with Tailwind CSS for a seamless UI across devices.
- **Database Storage** – Store user data securely in Neon Postgres SQL with Drizzle ORM.
- **Asset Management** – Store and retrieve images using Firebase Storage.

# Tech Stack

- **Frontend:** Next.js (React Framework)
- **Styling:** Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** Neon Postgres SQL + Drizzle ORM
- **Authentication:** Clerk
- **AI API:** Replicate.com (for AI-powered interior design generation)
- **Storage:** Firebase (for storing user-generated images and assets)
- **Payment Gateway:** Stripe (for handling transactions)

# Installation

## 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ai-interior-design.git
cd ai-interior-design
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Set Up Environment Variables

Create a `.env.local` file in the root directory and add:

```env
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
CLERK_API_KEY=your_clerk_api_key

DATABASE_URL=your_neon_postgres_database_url
AI_API_KEY=your_replicate_api_key

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key

STRIPE_SECRET_KEY=your_stripe_secret_key
```

## 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

# Usage

1. **Sign Up / Log In** – Create an account with Clerk authentication.
2. **Dashboard** – Access the dashboard to manage AI-generated interiors.
3. **Generate Room Designs** – Select room type, upload images, and use AI to generate designs.
4. **Save & Share** – Save generated designs and share them with others.
5. **Monetization** – Unlock premium AI features with Stripe payment integration.

# AI Integration

The app uses Replicate.com for AI-powered interior design generation. The backend communicates with the API to send user inputs and retrieve AI-generated designs.

## Example API Call:

```javascript
const generateDesign = async (imageUrl) => {
  const response = await fetch('https://api.replicate.com/v1/predictions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.AI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      version: "your-model-version",
      input: { image: imageUrl }
    })
  });

  const data = await response.json();
  return data.output;
};
```

# Payment Gateway Integration

Users can unlock premium AI features through Stripe payment integration. Stripe handles transactions securely, allowing users to access enhanced AI-generated designs.

# Deployment

The app can be deployed using Vercel for seamless Next.js hosting.

## 1. Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

## 2. Deploy on Vercel

- Connect your GitHub repository to Vercel.
- Set up environment variables in the Vercel dashboard.
- Click “Deploy” and access your live app.

# Screenshots

| Feature | Screenshot |
|---------|-----------|
| Dashboard | *[Insert Dashboard Screenshot]* |
| AI Interior Generation | *[Insert AI Interior Generation Screenshot]* |


# Final Notes

This README provides an overview of the AI Interior Design Generator app, its features, setup, and deployment. For any issues or suggestions, feel free to open an issue or submit a pull request. **Happy coding!**

