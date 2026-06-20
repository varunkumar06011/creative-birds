import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function BrandingAgencyOngole() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Creative Birds — Branding Agency in Ongole',
    image: 'https://www.creativebirds.in/src/logos/cb%20website%20ALL%20IMAGES/CB%20LOGO.png',
    url: 'https://www.creativebirds.in/branding-agency-ongole',
    telephone: '+919100060049',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Flat No. G3, Dwarakamaye, Royal Enfield Showroom Backside, Pillar No. C848, Saraswathi Nagar, Uppal',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500039',
      addressCountry: 'IN'
    },
    areaServed: {
      '@type': 'City',
      name: 'Ongole'
    },
    priceRange: '₹₹',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '21:00'
    }
  };

  return (
    <>
      <Helmet>
        <title>Branding Agency in Ongole | Logo Design & Packaging | Creative Birds</title>
        <meta name="description" content="Leading branding agency in Ongole. Creative Birds delivers logo design, packaging, social media creatives, and 3D graphics for shops, hospitals, and startups. On-screen delivery in 10 minutes." />
        <link rel="canonical" href="https://www.creativebirds.in/branding-agency-ongole" />
      </Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.creativebirds.in/' },
          { '@type': 'ListItem', position: 2, name: 'Branding Agency Ongole', item: 'https://www.creativebirds.in/branding-agency-ongole' }
        ]
      })}</script>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '16px 24px 0', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
        <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 8px' }}>/</span>
        <span style={{ color: 'var(--yellow)' }}>Branding Agency Ongole</span>
      </div>

      <section className="hero" style={{ minHeight: '50vh', paddingTop: '80px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>
          Branding Agency in Ongole
        </h1>
        <p style={{ fontSize: '16px', maxWidth: '700px', margin: '0 auto 32px', textAlign: 'center', lineHeight: 1.7 }}>
          From retail shops on Kurnool Road to healthcare clinics near the bus stand, Creative Birds brings world-class branding to Ongole businesses at prices that make sense.
        </p>
      </section>

      <div className="section-divider"></div>

      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px', color: '#fff' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: 'var(--yellow)' }}>Branding That Works for Ongole's Market</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          Ongole is a growing commercial hub in Prakasam district with a strong presence in dairy, granite, textiles, and retail. Whether you are opening a new medical store, launching a local restaurant, or expanding your saree showroom, professional branding is what separates a forgettable shop from a beloved local brand.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          Creative Birds offers Ongole businesses the same quality of design that Hyderabad's top brands enjoy — but with the flexibility of remote collaboration and on-screen delivery. Our services include logo design, complete stationery kits, packaging artwork, social media post design, and even product photography guidance.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          We have worked with clients across Andhra Pradesh and understand the visual language that resonates here. For example, <strong>Pharmonics</strong> and <Link to="/case-study/vedicare-ayurveda" style={{ color: 'var(--yellow)', textDecoration: 'none' }}><strong>Vedicare</strong></Link> — brands with presence in multiple AP cities — trusted us to maintain consistent branding across all their locations. We bring that same consistency and local sensibility to every Ongole project.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', margin: '32px 0' }}>
          <div className="why-card">Logo & Stationery Design</div>
          <div className="why-card">Packaging for Retail</div>
          <div className="why-card">Social Media Marketing</div>
          <div className="why-card">Signage & Hoardings</div>
          <div className="why-card">Brochures & Flyers</div>
          <div className="why-card">Brand Style Guides</div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="https://wa.me/919100060049" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '12px' }}>Book Now</a>
          <Link to="/social-media-marketing-vizag" className="btn-partner" style={{ textDecoration: 'none', display: 'inline-block' }}>See Vizag Services</Link>
        </div>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Link to="/" style={{ color: 'var(--yellow)', fontSize: '14px', textDecoration: 'none' }}>← Back to Home</Link>
        </div>

        <div className="section-divider"></div>

        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px', color: 'var(--yellow)', marginTop: '32px' }}>Frequently Asked Questions</h2>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>How much does logo design cost for Ongole businesses?</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#ccc' }}>Logo design for Ongole businesses starts at ₹14,999 for a complete branding identity package. We also offer hourly design at ₹999/hour for smaller projects like flyers, social media posts, and menu designs.</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>How fast is delivery for Ongole clients?</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#ccc' }}>On-screen delivery begins within 10 minutes of your briefing. For complete branding packages, we deliver within 48 hours. Social media packages and stationery are typically ready within 24 hours.</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>Do you serve Ongole businesses remotely or in person?</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#ccc' }}>We primarily work remotely via screen-sharing sessions, which allows us to serve Ongole businesses efficiently without travel delays. For larger projects, we can arrange in-person consultations at your Ongole location.</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>What types of Ongole businesses do you design for?</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#ccc' }}>We design for retail shops, medical stores, restaurants, granite showrooms, dairy businesses, and textile stores across Ongole. Our clients include brands like Pharmonics and Vedicare that operate across Andhra Pradesh.</p>
        </div>

        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'How much does logo design cost for Ongole businesses?', acceptedAnswer: { '@type': 'Answer', text: 'Logo design for Ongole businesses starts at ₹14,999 for a complete branding identity package. We also offer hourly design at ₹999/hour for smaller projects like flyers, social media posts, and menu designs.' } },
            { '@type': 'Question', name: 'How fast is delivery for Ongole clients?', acceptedAnswer: { '@type': 'Answer', text: 'On-screen delivery begins within 10 minutes of your briefing. For complete branding packages, we deliver within 48 hours. Social media packages and stationery are typically ready within 24 hours.' } },
            { '@type': 'Question', name: 'Do you serve Ongole businesses remotely or in person?', acceptedAnswer: { '@type': 'Answer', text: 'We primarily work remotely via screen-sharing sessions, which allows us to serve Ongole businesses efficiently without travel delays. For larger projects, we can arrange in-person consultations at your Ongole location.' } },
            { '@type': 'Question', name: 'What types of Ongole businesses do you design for?', acceptedAnswer: { '@type': 'Answer', text: 'We design for retail shops, medical stores, restaurants, granite showrooms, dairy businesses, and textile stores across Ongole. Our clients include brands like Pharmonics and Vedicare that operate across Andhra Pradesh.' } }
          ]
        })}</script>
      </section>
    </>
  );
}

export default BrandingAgencyOngole;
