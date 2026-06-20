import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function SocialMediaMarketingVizag() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Creative Birds — Social Media Marketing Agency in Vizag',
    image: 'https://www.creativebirds.in/src/logos/cb%20website%20ALL%20IMAGES/CB%20LOGO.png',
    url: 'https://www.creativebirds.in/social-media-marketing-vizag',
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
      name: 'Visakhapatnam'
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
        <title>Social Media Marketing Agency in Vizag | Creative Birds</title>
        <meta name="description" content="Best social media marketing agency in Vizag. Creative Birds designs Instagram posts, reels, ad campaigns, and brand content for Visakhapatnam businesses. On-screen delivery in 10 minutes." />
        <link rel="canonical" href="https://www.creativebirds.in/social-media-marketing-vizag" />
      </Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.creativebirds.in/' },
          { '@type': 'ListItem', position: 2, name: 'Social Media Marketing Vizag', item: 'https://www.creativebirds.in/social-media-marketing-vizag' }
        ]
      })}</script>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '16px 24px 0', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
        <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 8px' }}>/</span>
        <span style={{ color: 'var(--yellow)' }}>Social Media Marketing Vizag</span>
      </div>

      <section className="hero" style={{ minHeight: '50vh', paddingTop: '80px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>
          Social Media Marketing Agency in Vizag
        </h1>
        <p style={{ fontSize: '16px', maxWidth: '700px', margin: '0 auto 32px', textAlign: 'center', lineHeight: 1.7 }}>
          Visakhapatnam's businesses deserve scroll-stopping content. Creative Birds is Vizag's go-to social media design partner for restaurants, boutiques, salons, and startups.
        </p>
      </section>

      <div className="section-divider"></div>

      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px', color: '#fff' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: 'var(--yellow)' }}>Social Media That Grows Vizag Brands</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          Vizag is Andhra Pradesh's fastest-growing metro — from beachside cafes in Rushikonda to IT offices in Maddilapalem. Every business here needs a social media presence that feels local, looks premium, and converts followers into customers.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          At Creative Birds, we design Instagram posts, Facebook banners, WhatsApp marketing creatives, reel covers, and story templates that speak directly to Vizag audiences. Our team understands the cultural nuances — from Telugu festival campaigns to local event promotions for Vizag Beach Festival or Dasara celebrations.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          We have designed social media campaigns for clients like <Link to="/case-study/deccan-chai" style={{ color: 'var(--yellow)', textDecoration: 'none' }}><strong>Deccan Chai</strong></Link>, <strong>Loan Seva</strong>, and <strong>Grand Infra</strong> — brands that needed consistent, high-quality content across multiple platforms. Our monthly social media packages start at ₹19,999 and include static posts, reels, festival greetings, ad campaign creatives, and detailed monthly reports.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', margin: '32px 0' }}>
          <div className="why-card">Instagram Post Design</div>
          <div className="why-card">Reel Covers & Editing</div>
          <div className="why-card">WhatsApp Marketing Creatives</div>
          <div className="why-card">Ad Campaign Design</div>
          <div className="why-card">Festival & Event Posts</div>
          <div className="why-card">Monthly Content Calendars</div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="https://wa.me/919100060049" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '12px' }}>Book Now</a>
          <Link to="/ad-shoot-pune" className="btn-partner" style={{ textDecoration: 'none', display: 'inline-block' }}>See Ad Shoot Services in Pune</Link>
        </div>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Link to="/" style={{ color: 'var(--yellow)', fontSize: '14px', textDecoration: 'none' }}>← Back to Home</Link>
        </div>

        <div className="section-divider"></div>

        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px', color: 'var(--yellow)', marginTop: '32px' }}>Frequently Asked Questions</h2>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>How much do social media creatives cost in Vizag?</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#ccc' }}>Our social media marketing packages for Vizag businesses start at ₹19,999 per month for the Basic plan, which includes 10 static post designs, festival greetings, and 3-platform account handling. The Standard plan at ₹29,999 adds reels and more posts.</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>How fast can you deliver social media posts for Vizag brands?</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#ccc' }}>Individual social media posts are delivered via on-screen design within 10 minutes of briefing. For monthly packages, we create a content calendar and deliver posts 2-3 days before each scheduled publish date.</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>Do you serve Vizag businesses remotely or in person?</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#ccc' }}>We serve Vizag clients entirely remotely via screen-sharing and WhatsApp communication. This allows us to deliver the same quality and speed that Hyderabad businesses enjoy, without any geographic limitation.</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>Which Vizag industries do you create content for?</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#ccc' }}>We create social media content for Vizag restaurants, salons, boutiques, real estate developers, healthcare clinics, and educational institutions. Our Vizag clients appreciate content that reflects local festivals and Vizag-specific culture.</p>
        </div>

        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'How much do social media creatives cost in Vizag?', acceptedAnswer: { '@type': 'Answer', text: 'Our social media marketing packages for Vizag businesses start at ₹19,999 per month for the Basic plan, which includes 10 static post designs, festival greetings, and 3-platform account handling. The Standard plan at ₹29,999 adds reels and more posts.' } },
            { '@type': 'Question', name: 'How fast can you deliver social media posts for Vizag brands?', acceptedAnswer: { '@type': 'Answer', text: 'Individual social media posts are delivered via on-screen design within 10 minutes of briefing. For monthly packages, we create a content calendar and deliver posts 2-3 days before each scheduled publish date.' } },
            { '@type': 'Question', name: 'Do you serve Vizag businesses remotely or in person?', acceptedAnswer: { '@type': 'Answer', text: 'We serve Vizag clients entirely remotely via screen-sharing and WhatsApp communication. This allows us to deliver the same quality and speed that Hyderabad businesses enjoy, without any geographic limitation.' } },
            { '@type': 'Question', name: 'Which Vizag industries do you create content for?', acceptedAnswer: { '@type': 'Answer', text: 'We create social media content for Vizag restaurants, salons, boutiques, real estate developers, healthcare clinics, and educational institutions. Our Vizag clients appreciate content that reflects local festivals and Vizag-specific culture.' } }
          ]
        })}</script>
      </section>
    </>
  );
}

export default SocialMediaMarketingVizag;
