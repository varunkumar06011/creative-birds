import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ClientLogo14 from '../logos/14.png';

function CaseStudyVedicare() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Vedicare Ayurveda Branding & Logo Design by Creative Birds',
    url: 'https://www.creativebirds.in/case-study/vedicare-ayurveda',
    author: {
      '@type': 'Organization',
      name: 'Creative Birds'
    },
    about: {
      '@type': 'Organization',
      name: 'Vedicare'
    },
    description: 'Healthcare branding and NABH accreditation design for Vedicare Ayurveda by Creative Birds.'
  };

  return (
    <>
      <Helmet>
        <title>Vedicare Ayurveda Branding & Logo Design Case Study | Creative Birds</title>
        <meta name="description" content="How Creative Birds created Vedicare Ayurveda's brand identity and NABH accreditation design. Healthcare branding case study for an Ayurveda clinic." />
        <link rel="canonical" href="https://www.creativebirds.in/case-study/vedicare-ayurveda" />
      </Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.creativebirds.in/' },
          { '@type': 'ListItem', position: 2, name: 'Case Study', item: 'https://www.creativebirds.in/case-study/vedicare-ayurveda' },
          { '@type': 'ListItem', position: 3, name: 'Vedicare', item: 'https://www.creativebirds.in/case-study/vedicare-ayurveda' }
        ]
      })}</script>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '16px 24px 0', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
        <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 8px' }}>/</span>
        <span style={{ color: 'var(--yellow)' }}>Case Study</span>
        <span style={{ margin: '0 8px' }}>/</span>
        <span style={{ color: 'var(--yellow)' }}>Vedicare</span>
      </div>

      <section className="hero" style={{ minHeight: '50vh', paddingTop: '80px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>
          Vedicare Ayurveda — Branding & Logo Design
        </h1>
        <p style={{ fontSize: '16px', maxWidth: '700px', margin: '0 auto 32px', textAlign: 'center', lineHeight: 1.7 }}>
          Building a trustworthy visual identity for an <Link to="/graphic-design-hyderabad" style={{ color: 'var(--yellow)', textDecoration: 'none' }}>Ayurveda clinic in Hyderabad</Link> — from logo to NABH accreditation design.
        </p>
      </section>

      <div className="section-divider"></div>

      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px', color: '#fff' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <img src={ClientLogo14} alt="Vedicare logo design by Creative Birds" style={{ maxHeight: '120px', objectFit: 'contain' }} />
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: 'var(--yellow)' }}>The Client</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          Vedicare is an Ayurveda clinic that needed a brand identity reflecting both traditional healing wisdom and modern medical professionalism. The challenge was to create visuals that felt warm and natural while meeting the strict standards required for NABH accreditation — India's benchmark for healthcare quality.
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: 'var(--yellow)' }}>What We Delivered</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          We began with extensive research into Ayurvedic symbolism, colour psychology for healthcare, and NABH branding requirements. The resulting logo combines organic leaf motifs with a clean, modern typeface that communicates both tradition and clinical professionalism.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          Our deliverables included the primary logo, visiting cards, prescription pads, patient information brochures, wall signage, staff ID cards, and the complete accreditation documentation design. Every piece was designed to meet NABH standards while maintaining visual warmth that puts patients at ease.
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: 'var(--yellow)' }}>Client Feedback</h2>
        <blockquote style={{ fontStyle: 'italic', fontSize: '16px', lineHeight: 1.8, borderLeft: '3px solid var(--yellow)', paddingLeft: '16px', marginBottom: '32px', color: '#ccc' }}>
          "Incredible work on our branding! You perfectly understood our concept and delivered a stunning logo and design. We truly appreciate your patience, endless revisions, and your unwavering support during our opening & NABH accreditation. Highly recommended!"<br />
          <span style={{ fontStyle: 'normal', fontWeight: 600, color: 'var(--yellow)', marginTop: '8px', display: 'inline-block' }}>— Dr. A. Nagaraju, Vedicare</span>
        </blockquote>

        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: 'var(--yellow)' }}>Results</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          Vedicare successfully achieved NABH accreditation with branding that impressed the assessment team. The clinic now operates with a cohesive visual identity across all touchpoints — from the moment a patient sees the signage to when they receive their prescription. The brand has become a reference point for other Ayurveda clinics seeking professional design.
        </p>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="https://wa.me/919100060049" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '12px' }}>Book a Healthcare Branding Project</a>
          <Link to="/case-study/deccan-chai" className="btn-partner" style={{ textDecoration: 'none', display: 'inline-block' }}>Next: Deccan Chai Case Study</Link>
        </div>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Link to="/" style={{ color: 'var(--yellow)', fontSize: '14px', textDecoration: 'none' }}>← Back to Home</Link>
        </div>
      </section>
    </>
  );
}

export default CaseStudyVedicare;
