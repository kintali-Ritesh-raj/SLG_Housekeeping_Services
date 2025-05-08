import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Clients from './components/Clients';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import NeonCursor from './components/NeonCursor';
import WhyChooseUs from './components/WhyChooseUs';
import WaveDivider from './components/WaveDivider';
import FAQ from './components/FAQ';
import Analytics from './components/Analytics';
import { trackPerformance, trackResourceTiming } from './utils/performance';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize performance tracking
    trackPerformance();
    trackResourceTiming();
  }, []);

  return (
    <>
      <NeonCursor />
      <Analytics />
      <Helmet>
        <title>SLG Housekeeping Services | Professional Cleaning in Visakhapatnam</title>
        <meta name="description" content="SLG Housekeeping Services: Professional cleaning and housekeeping in Visakhapatnam. Residential and commercial cleaning with guaranteed satisfaction." />
        <meta name="keywords" content="SLG Housekeeping Services, cleaning services, housekeeping, Visakhapatnam, home cleaning, commercial cleaning" />
        <meta property="og:title" content="SLG Housekeeping Services | Professional Cleaning in Visakhapatnam" />
        <meta property="og:description" content="SLG Housekeeping Services: Professional cleaning and housekeeping in Visakhapatnam. Residential and commercial cleaning with guaranteed satisfaction." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://slghousekeeping.com" />
        <meta property="og:image" content="https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "SLG Housekeeping Services",
              "image": "https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Visakhapatnam",
                "addressRegion": "Andhra Pradesh",
                "addressCountry": "India"
              },
              "url": "https://slghousekeeping.com",
              "telephone": "+919876543210",
              "priceRange": "₹₹",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/slghousekeeping",
                "https://www.instagram.com/slghousekeeping"
              ]
            }
          `}
        </script>
      </Helmet>
      <Layout>
        <main className="overflow-hidden">
          <Hero />
          <WaveDivider />
          <WhyChooseUs />
          <WaveDivider flip color="#fff" />
          <About />
          <Services />
          <Gallery />
          <Clients />
          <BeforeAfterGallery />
          <FAQ />
          <Contact />
          <WhatsAppButton />
        </main>
      </Layout>
    </>
  );
};

export default App;