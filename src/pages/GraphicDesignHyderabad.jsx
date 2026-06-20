import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function GraphicDesignHyderabad() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Creative Birds — Graphic Design Agency in Hyderabad',
    image: 'https://www.creativebirds.in/src/logos/cb%20website%20ALL%20IMAGES/CB%20LOGO.png',
    url: 'https://www.creativebirds.in/graphic-design-hyderabad',
    telephone: '+919100060049',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Flat No. G3, Dwarakamaye, Royal Enfield Showroom Backside, Pillar No. C848, Saraswathi Nagar, Uppal',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500039',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '17.4065',
      longitude: '78.5242'
    },
    areaServed: {
      '@type': 'City',
      name: 'Hyderabad'
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
        <title>Graphic Design Agency in Hyderabad | Logo & Branding | Creative Birds</title>
        <meta name="description" content="Top graphic design agency in Hyderabad. Creative Birds offers logo design, branding, packaging, social media creatives, ad shoots & 3D graphics. On-screen delivery in 10 minutes. Call 91000 60049." />
        <link rel="canonical" href="https://www.creativebirds.in/graphic-design-hyderabad" />
      </Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.creativebirds.in/' },
          { '@type': 'ListItem', position: 2, name: 'Graphic Design Hyderabad', item: 'https://www.creativebirds.in/graphic-design-hyderabad' }
        ]
      })}</script>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '16px 24px 0', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
        <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 8px' }}>/</span>
        <span style={{ color: 'var(--yellow)' }}>Graphic Design Hyderabad</span>
      </div>

      <section className="hero" style={{ minHeight: '50vh', paddingTop: '80px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>
          Graphic Design Agency in Hyderabad
        </h1>
        <p style={{ fontSize: '16px', maxWidth: '700px', margin: '0 auto 32px', textAlign: 'center', lineHeight: 1.7 }}>
          Creative Birds is a full-service graphic design studio based in Uppal, Hyderabad. For over 18 years, we have helped businesses across Telangana build memorable brand identities — from logo design and packaging to social media creatives and 3D motion graphics.
        </p>
      </section>

      <div className="section-divider"></div>

      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px', color: '#fff' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: 'var(--yellow)' }}>Why Hyderabad Brands Choose Creative Birds</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          Hyderabad is a city of bold entrepreneurs — from textile showrooms in Secunderabad to healthcare chains in Madhapur and F&B startups in Jubilee Hills. Whether you are launching a new saree brand like <strong>Kubera Silks</strong> or opening an Ayurveda clinic like <strong>Vedicare</strong>, your visual identity is the first impression customers will remember.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          We specialize in logo design, complete brand identity systems, packaging artwork, social media campaign creatives, product ad shoots, and 3D product visualization. Our hourly on-screen delivery model means you can brief a designer at 2 PM and have polished artwork by 2:10 PM — no waiting, no back-and-forth for days.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          Our Hyderabad clients include heritage textile labels, healthcare providers, real estate developers, and F&B chains. We understand the local market pulse — what colours resonate with Telugu audiences, how to design packaging that stands out in Ameerpet retail stores, and which Instagram formats drive engagement for Hyderabad consumers.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', margin: '32px 0' }}>
          <div className="why-card">Logo Design & Brand Identity</div>
          <div className="why-card">Packaging Design</div>
          <div className="why-card">Social Media Creatives</div>
          <div className="why-card">Ad Shoots & Reels</div>
          <div className="why-card">3D Product Visualization</div>
          <div className="why-card">Motion Graphics</div>
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: 'var(--yellow)', marginTop: '32px' }}>Clients We Have Served in Hyderabad</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          <Link to="/case-study/kubera-silks" style={{ color: 'var(--yellow)', textDecoration: 'none' }}><strong>Kubera Silks</strong></Link> trusted us with their brand identity for over a decade. <strong>Vedicare</strong> relied on our team for their NABH accreditation branding. <strong>Deccan Chai</strong> chose us to design a logo that captures the spirit of Hyderabad's chai culture. <strong>Rameshwari Silks</strong> and <strong>Sri Divya Sarees</strong> are among the many textile brands we have helped stand out in a crowded market.
        </p>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="https://wa.me/919100060049" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '12px' }}>Book Now</a>
          <Link to="/branding-agency-ongole" className="btn-partner" style={{ textDecoration: 'none', display: 'inline-block' }}>See Our Work in Ongole</Link>
        </div>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Link to="/" style={{ color: 'var(--yellow)', fontSize: '14px', textDecoration: 'none' }}>← Back to Home</Link>
        </div>

        <div className="section-divider"></div>

        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px', color: 'var(--yellow)', marginTop: '32px' }}>Frequently Asked Questions</h2>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>How much does logo design cost in Hyderabad?</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#ccc' }}>Our logo and complete branding identity package starts at ₹14,999 for Hyderabad clients. This includes 3 logo options, 5 stationery items, signage branding, and a branding manual — all delivered within 48 hours.</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>How fast is on-screen delivery for Hyderabad businesses?</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#ccc' }}>We begin on-screen delivery within 10 minutes of your briefing. For hourly design work, you pay ₹999 per hour and watch the designer work live on screen in real time.</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>Do you serve Hyderabad businesses in person or remotely?</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#ccc' }}>Both. Our studio is in Uppal, Hyderabad, so local clients can visit us. We also serve clients across Telangana and India remotely via screen-sharing sessions.</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>Which Hyderabad industries do you specialize in?</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#ccc' }}>We have deep experience with Hyderabad's textile brands (Kubera Silks, Rameshwari Silks), healthcare clinics (Vedicare, Cygnus Hospital), real estate (Grand Infra, Tranquil), and F&B startups (Deccan Chai).</p>
        </div>

        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'How much does logo design cost in Hyderabad?', acceptedAnswer: { '@type': 'Answer', text: 'Our logo and complete branding identity package starts at ₹14,999 for Hyderabad clients. This includes 3 logo options, 5 stationery items, signage branding, and a branding manual — all delivered within 48 hours.' } },
            { '@type': 'Question', name: 'How fast is on-screen delivery for Hyderabad businesses?', acceptedAnswer: { '@type': 'Answer', text: 'We begin on-screen delivery within 10 minutes of your briefing. For hourly design work, you pay ₹999 per hour and watch the designer work live on screen in real time.' } },
            { '@type': 'Question', name: 'Do you serve Hyderabad businesses in person or remotely?', acceptedAnswer: { '@type': 'Answer', text: 'Both. Our studio is in Uppal, Hyderabad, so local clients can visit us. We also serve clients across Telangana and India remotely via screen-sharing sessions.' } },
            { '@type': 'Question', name: 'Which Hyderabad industries do you specialize in?', acceptedAnswer: { '@type': 'Answer', text: 'We have deep experience with Hyderabad\'s textile brands (Kubera Silks, Rameshwari Silks), healthcare clinics (Vedicare, Cygnus Hospital), real estate (Grand Infra, Tranquil), and F&B startups (Deccan Chai).' } }
          ]
        })}</script>
      </section>
    </>
  );
}

export default GraphicDesignHyderabad;
