import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function AdShootPune() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Creative Birds — Ad Shoot & Video Production in Pune',
    image: 'https://www.creativebirds.in/src/logos/cb%20website%20ALL%20IMAGES/CB%20LOGO.png',
    url: 'https://www.creativebirds.in/ad-shoot-pune',
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
      name: 'Pune'
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
        <title>Ad Shoot & Video Production in Pune | Creative Birds</title>
        <meta name="description" content="Professional ad shoot and reel production in Pune. Creative Birds offers mobile photography, product shoots, brand videos, and promotional reels. V Shoots package at ₹2,999." />
        <link rel="canonical" href="https://www.creativebirds.in/ad-shoot-pune" />
      </Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.creativebirds.in/' },
          { '@type': 'ListItem', position: 2, name: 'Ad Shoot Pune', item: 'https://www.creativebirds.in/ad-shoot-pune' }
        ]
      })}</script>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '16px 24px 0', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
        <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 8px' }}>/</span>
        <span style={{ color: 'var(--yellow)' }}>Ad Shoot Pune</span>
      </div>

      <section className="hero" style={{ minHeight: '50vh', paddingTop: '80px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>
          Ad Shoot & Video Production in Pune
        </h1>
        <p style={{ fontSize: '16px', maxWidth: '700px', margin: '0 auto 32px', textAlign: 'center', lineHeight: 1.7 }}>
          Product photography, brand reels, and promotional videos for Pune's ambitious brands — shot professionally, edited fast, delivered ready to post.
        </p>
      </section>

      <div className="section-divider"></div>

      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px', color: '#fff' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: 'var(--yellow)' }}>Video Content That Sells in Pune</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          Pune is India's education and IT capital, but it is also home to a thriving ecosystem of restaurants, fashion boutiques, fitness studios, and real estate projects. In a city where every consumer scrolls through Instagram before making a purchase decision, professional video content is not optional — it is essential.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          Creative Birds offers Pune businesses a complete video production solution under our V Shoots brand. We shoot product reels, brand story videos, restaurant menu showcases, real estate walkthroughs, and event highlights. Our mobile-first approach means we use professional equipment that delivers cinematic quality without the bulk and cost of traditional production houses.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          Our V Shoots package starts at just ₹2,999 for a professional reel shoot with editing. We have produced video content for clients in hospitality, healthcare, real estate, and retail — including brands like <strong>Tranquil</strong> and <strong>Olivia Interior Studio</strong> who needed visual storytelling that matched their premium positioning. See how we built <Link to="/case-study/deccan-chai" style={{ color: 'var(--yellow)', textDecoration: 'none' }}><strong>Deccan Chai's</strong></Link> brand from day one with video and design.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', margin: '32px 0' }}>
          <div className="why-card">Product Reel Shoots</div>
          <div className="why-card">Brand Story Videos</div>
          <div className="why-card">Restaurant Menu Shoots</div>
          <div className="why-card">Real Estate Walkthroughs</div>
          <div className="why-card">Event Coverage</div>
          <div className="why-card">Mobile + Professional Edit</div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="https://wa.me/919100060049" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '12px' }}>Book Now</a>
          <Link to="/3d-graphic-design-bengaluru" className="btn-partner" style={{ textDecoration: 'none', display: 'inline-block' }}>See 3D Design in Bengaluru</Link>
        </div>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Link to="/" style={{ color: 'var(--yellow)', fontSize: '14px', textDecoration: 'none' }}>← Back to Home</Link>
        </div>

        <div className="section-divider"></div>

        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px', color: 'var(--yellow)', marginTop: '32px' }}>Frequently Asked Questions</h2>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>How much does an ad shoot cost in Pune?</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#ccc' }}>Our V Shoots package for Pune businesses starts at ₹2,999 for a professional reel shoot with editing. Product photography packages and brand video shoots are customized based on your requirements and location.</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>How fast is video delivery for Pune clients?</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#ccc' }}>Reels and short videos are typically edited and delivered within 24-48 hours. For larger projects like brand story videos or event coverage, delivery timelines are discussed during the briefing call.</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>Do you travel to Pune for shoots or work remotely?</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#ccc' }}>For product shoots, we can guide your Pune team remotely on lighting and angles, then handle all editing post-production. For larger projects requiring professional cinematography, travel to Pune can be arranged with advance planning.</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>What types of Pune businesses do you shoot for?</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#ccc' }}>We shoot for Pune restaurants, real estate projects, fitness studios, fashion boutiques, SaaS companies, and product-based startups. Our clients include brands like Tranquil and Olivia Interior Studio who needed premium visual storytelling.</p>
        </div>

        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'How much does an ad shoot cost in Pune?', acceptedAnswer: { '@type': 'Answer', text: 'Our V Shoots package for Pune businesses starts at ₹2,999 for a professional reel shoot with editing. Product photography packages and brand video shoots are customized based on your requirements and location.' } },
            { '@type': 'Question', name: 'How fast is video delivery for Pune clients?', acceptedAnswer: { '@type': 'Answer', text: 'Reels and short videos are typically edited and delivered within 24-48 hours. For larger projects like brand story videos or event coverage, delivery timelines are discussed during the briefing call.' } },
            { '@type': 'Question', name: 'Do you travel to Pune for shoots or work remotely?', acceptedAnswer: { '@type': 'Answer', text: 'For product shoots, we can guide your Pune team remotely on lighting and angles, then handle all editing post-production. For larger projects requiring professional cinematography, travel to Pune can be arranged with advance planning.' } },
            { '@type': 'Question', name: 'What types of Pune businesses do you shoot for?', acceptedAnswer: { '@type': 'Answer', text: 'We shoot for Pune restaurants, real estate projects, fitness studios, fashion boutiques, SaaS companies, and product-based startups. Our clients include brands like Tranquil and Olivia Interior Studio who needed premium visual storytelling.' } }
          ]
        })}</script>
      </section>
    </>
  );
}

export default AdShootPune;
