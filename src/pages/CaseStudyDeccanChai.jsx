import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ClientLogo3 from '../logos/3.png';

function CaseStudyDeccanChai() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Deccan Chai Logo Design & Branding by Creative Birds',
    url: 'https://www.creativebirds.in/case-study/deccan-chai',
    author: {
      '@type': 'Organization',
      name: 'Creative Birds'
    },
    about: {
      '@type': 'Organization',
      name: 'Deccan Chai'
    },
    description: 'Complete brand identity and logo design for Deccan Chai beverage brand by Creative Birds.'
  };

  return (
    <>
      <Helmet>
        <title>Deccan Chai Logo Design & Branding Case Study | Creative Birds</title>
        <meta name="description" content="How Creative Birds designed Deccan Chai's brand identity from day one. Logo, packaging, and launch design for a new beverage brand. Read the case study." />
        <link rel="canonical" href="https://www.creativebirds.in/case-study/deccan-chai" />
      </Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.creativebirds.in/' },
          { '@type': 'ListItem', position: 2, name: 'Case Study', item: 'https://www.creativebirds.in/case-study/deccan-chai' },
          { '@type': 'ListItem', position: 3, name: 'Deccan Chai', item: 'https://www.creativebirds.in/case-study/deccan-chai' }
        ]
      })}</script>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '16px 24px 0', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
        <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 8px' }}>/</span>
        <span style={{ color: 'var(--yellow)' }}>Case Study</span>
        <span style={{ margin: '0 8px' }}>/</span>
        <span style={{ color: 'var(--yellow)' }}>Deccan Chai</span>
      </div>

      <section className="hero" style={{ minHeight: '50vh', paddingTop: '80px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>
          Deccan Chai — Logo Design & Branding
        </h1>
        <p style={{ fontSize: '16px', maxWidth: '700px', margin: '0 auto 32px', textAlign: 'center', lineHeight: 1.7 }}>
          Building a brand identity from scratch for a new beverage startup in <Link to="/graphic-design-hyderabad" style={{ color: 'var(--yellow)', textDecoration: 'none' }}>Hyderabad</Link> that wanted to capture the city's chai culture.
        </p>
      </section>

      <div className="section-divider"></div>

      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px', color: '#fff' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <img src={ClientLogo3} alt="Deccan Chai logo design by Creative Birds" style={{ maxHeight: '120px', objectFit: 'contain' }} />
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: 'var(--yellow)' }}>The Client</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          Deccan Chai came to Creative Birds with an idea and a recipe. They needed everything — a name treatment, logo, colour palette, packaging design, menu boards, and launch creatives — to compete in Hyderabad's crowded F&B market where chai cafes are everywhere but memorable brands are rare.
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: 'var(--yellow)' }}>What We Delivered</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          We started with brand strategy — understanding Deccan Chai's target audience, price point, and personality. The logo we designed uses warm, earthy tones that evoke the aroma of freshly brewed chai while a playful wordmark reflects the brand's approachable, youth-friendly positioning.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          Our deliverables included the logo system, cup sleeve design, takeaway bag artwork, store facade signage, menu boards, social media launch kit, and grand opening promotional creatives. Every element was designed to work together — so a customer who sees an Instagram post, walks past the store, and picks up a cup experiences the same brand consistently.
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: 'var(--yellow)' }}>Client Feedback</h2>
        <blockquote style={{ fontStyle: 'italic', fontSize: '16px', lineHeight: 1.8, borderLeft: '3px solid var(--yellow)', paddingLeft: '16px', marginBottom: '32px', color: '#ccc' }}>
          "You've been with us from the start, and we couldn't be happier with our branding. Thank you for your incredible patience and for designing a logo that perfectly captures our vision. Your support made our opening a great success!"<br />
          <span style={{ fontStyle: 'normal', fontWeight: 600, color: 'var(--yellow)', marginTop: '8px', display: 'inline-block' }}>— Velluli Gopi, Deccan Chai</span>
        </blockquote>

        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: 'var(--yellow)' }}>Results</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          Deccan Chai's launch was a success, with social media buzz driven partly by the distinctive visual identity we created. The brand now has a design system that can scale as they expand to new locations — whether in Hyderabad, Vizag, or beyond.
        </p>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="https://wa.me/919100060049" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '12px' }}>Book a F&B Branding Project</a>
          <Link to="/case-study/kubera-silks" className="btn-partner" style={{ textDecoration: 'none', display: 'inline-block' }}>See Kubera Silks Case Study</Link>
        </div>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Link to="/" style={{ color: 'var(--yellow)', fontSize: '14px', textDecoration: 'none' }}>← Back to Home</Link>
        </div>
      </section>
    </>
  );
}

export default CaseStudyDeccanChai;
