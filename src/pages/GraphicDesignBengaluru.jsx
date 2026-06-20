import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function GraphicDesignBengaluru() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Creative Birds — 3D Graphic Design Agency in Bengaluru',
    image: 'https://www.creativebirds.in/src/logos/cb%20website%20ALL%20IMAGES/CB%20LOGO.png',
    url: 'https://www.creativebirds.in/3d-graphic-design-bengaluru',
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
      name: 'Bengaluru'
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
        <title>3D Graphic Design Agency in Bengaluru | Creative Birds</title>
        <meta name="description" content="Top 3D graphic design agency in Bengaluru. Creative Birds delivers 3D product visualization, motion graphics, logo animation, and branding for Bangalore startups and enterprises." />
        <link rel="canonical" href="https://www.creativebirds.in/3d-graphic-design-bengaluru" />
      </Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.creativebirds.in/' },
          { '@type': 'ListItem', position: 2, name: '3D Graphic Design Bengaluru', item: 'https://www.creativebirds.in/3d-graphic-design-bengaluru' }
        ]
      })}</script>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '16px 24px 0', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
        <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 8px' }}>/</span>
        <span style={{ color: 'var(--yellow)' }}>3D Graphic Design Bengaluru</span>
      </div>

      <section className="hero" style={{ minHeight: '50vh', paddingTop: '80px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>
          3D Graphic Design Agency in Bengaluru
        </h1>
        <p style={{ fontSize: '16px', maxWidth: '700px', margin: '0 auto 32px', textAlign: 'center', lineHeight: 1.7 }}>
          Bengaluru's startups and enterprises deserve design that feels futuristic. Creative Birds delivers 3D product renders, motion graphics, and immersive brand experiences.
        </p>
      </section>

      <div className="section-divider"></div>

      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px', color: '#fff' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: 'var(--yellow)' }}>3D Design for India's Tech Capital</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          Bengaluru is India's startup capital — a city where design standards are as high as the ambitions of its founders. From SaaS companies in HSR Layout to D2C brands in Indiranagar, every Bengaluru business needs visual content that looks like it belongs in 2026, not 2016.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          Creative Birds brings advanced 3D graphic design and motion graphics to Bengaluru clients without the agency price tag. Our 3D services include product visualization, architectural rendering, logo animation, explainer videos, and AR-ready assets. Whether you are launching a fintech app like <strong>Loan Seva</strong> or a health supplement brand like <strong>Nutripeak</strong>, our 3D renders make your product look tangible before it even hits manufacturing. For branding inspiration, see our <Link to="/case-study/kubera-silks" style={{ color: 'var(--yellow)', textDecoration: 'none' }}><strong>Kubera Silks case study</strong></Link> — a decade-long design partnership.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          Our team includes dedicated 3D and motion graphics specialists who use industry-standard tools to create photorealistic renders and fluid animations. We have supported clients in e-commerce, real estate, healthcare, and education with 3D content that drives engagement and conversions.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', margin: '32px 0' }}>
          <div className="why-card">3D Product Visualization</div>
          <div className="why-card">Logo Animation</div>
          <div className="why-card">Motion Graphics</div>
          <div className="why-card">Explainer Videos</div>
          <div className="why-card">Architectural Rendering</div>
          <div className="why-card">AR-Ready 3D Assets</div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="https://wa.me/919100060049" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '12px' }}>Book Now</a>
          <Link to="/graphic-design-hyderabad" className="btn-partner" style={{ textDecoration: 'none', display: 'inline-block' }}>See Hyderabad Services</Link>
        </div>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Link to="/" style={{ color: 'var(--yellow)', fontSize: '14px', textDecoration: 'none' }}>← Back to Home</Link>
        </div>

        <div className="section-divider"></div>

        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px', color: 'var(--yellow)', marginTop: '32px' }}>Frequently Asked Questions</h2>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>How much does 3D graphic design cost in Bengaluru?</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#ccc' }}>3D product visualization and motion graphics for Bengaluru clients are priced based on project complexity. Simple logo animations start at ₹14,999, while photorealistic 3D product renders begin at ₹24,999. We also offer hourly design at ₹999/hour.</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>How fast is 3D design delivery for Bengaluru startups?</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#ccc' }}>Logo animations and simple 3D renders are delivered within 48 hours. Complex architectural visualizations or explainer videos typically take 3-5 business days. For urgent needs, our on-screen hourly design model applies to 3D work as well.</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>Do you serve Bengaluru businesses remotely or in person?</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#ccc' }}>We serve Bengaluru clients entirely remotely via screen-sharing sessions and video calls. This approach works exceptionally well for 3D design since we can share renders, make live adjustments, and deliver files digitally — no geographic limitation.</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>Which Bengaluru industries benefit from 3D design?</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#ccc' }}>Bengaluru's tech startups, D2C brands, real estate developers, and edtech companies benefit most from 3D visualization. We have created 3D content for fintech apps like Loan Seva and health brands like Nutripeak that needed photorealistic product renders before manufacturing.</p>
        </div>

        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'How much does 3D graphic design cost in Bengaluru?', acceptedAnswer: { '@type': 'Answer', text: '3D product visualization and motion graphics for Bengaluru clients are priced based on project complexity. Simple logo animations start at ₹14,999, while photorealistic 3D product renders begin at ₹24,999. We also offer hourly design at ₹999/hour.' } },
            { '@type': 'Question', name: 'How fast is 3D design delivery for Bengaluru startups?', acceptedAnswer: { '@type': 'Answer', text: 'Logo animations and simple 3D renders are delivered within 48 hours. Complex architectural visualizations or explainer videos typically take 3-5 business days. For urgent needs, our on-screen hourly design model applies to 3D work as well.' } },
            { '@type': 'Question', name: 'Do you serve Bengaluru businesses remotely or in person?', acceptedAnswer: { '@type': 'Answer', text: 'We serve Bengaluru clients entirely remotely via screen-sharing sessions and video calls. This approach works exceptionally well for 3D design since we can share renders, make live adjustments, and deliver files digitally — no geographic limitation.' } },
            { '@type': 'Question', name: 'Which Bengaluru industries benefit from 3D design?', acceptedAnswer: { '@type': 'Answer', text: 'Bengaluru\'s tech startups, D2C brands, real estate developers, and edtech companies benefit most from 3D visualization. We have created 3D content for fintech apps like Loan Seva and health brands like Nutripeak that needed photorealistic product renders before manufacturing.' } }
          ]
        })}</script>
      </section>
    </>
  );
}

export default GraphicDesignBengaluru;
