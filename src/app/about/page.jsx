import ContentSection from '@/components/content-7'
import Footer from '@/components/Footer'
import { Header } from '@/components/header'
import React from 'react'

// --- SEO Metadata ---
// In Next.js 13+, exporting a `metadata` object is the standard way to manage page SEO.
export const metadata = {
  title: "About Alchprep | Our Mission in AI-Powered Exam Preparation",
  description: "Discover the story behind Alchprep. Learn about our mission to revolutionize exam and interview preparation using advanced AI, offering personalized mock tests and actionable analytics.",
  keywords: ["Alchprep", "About Us", "AI exam prep", "mock tests", "interview preparation", "personalized learning", "edtech"],
  alternates: {
    canonical: "/about", // Replace with your full domain later, e.g., "https://www.alchprep.com/about"
  },
  openGraph: {
    title: "About Alchprep | AI-Powered Exam & Interview Preparation",
    description: "Learn how Alchprep is transforming test prep with personalized, AI-driven learning.",
    url: "/about", // Replace with your full domain
    siteName: 'Alchprep',
    images: [
      {
        url: '/og-image-about.png', // Replace with the actual URL to your Open Graph image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Alchprep | AI-Powered Exam & Interview Preparation",
    description: "Learn how Alchprep is transforming test prep with personalized, AI-driven learning.",
    images: ['/twitter-image-about.png'], // Replace with the actual URL to your Twitter card image
  },
};

const AboutPage = () => {
  return (
   <>
   <Header/>
    <ContentSection/>
   <Footer/>
   </>
  )
}

export default AboutPage;