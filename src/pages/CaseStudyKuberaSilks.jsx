import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ClientLogo11 from '../logos/11.png';

function CaseStudyKuberaSilks() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Kubera Silks Logo Design & Branding by Creative Birds',
    url: 'https://www.creativebirds.in/case-study/kubera-silks',
    author: {
      '@type': 'Organization',
      name: 'Creative Birds'
    },
    about: {
      '@type': 'Organization',
      name: 'Kubera Silks'
    },
    description: 'Complete brand identity design for Kubera Silks including logo, packaging, and store branding. A decade-long design partnership with Creative Birds.'
  };

  return (
    <>
      <Helmet>
        <title>Kubera Silks Logo Design & Branding Case Study | Creative Birds</title>
        <meta name="description" content="How Creative Birds designed Kubera Silks' brand identity over a decade. Logo design, packaging, and store branding for a Hyderabad textile brand. Read the case study." />
        <link rel="canonical" href="https://www.creativebirds.in/case-study/kubera-silks" />
      </Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.creativebirds.in/' },
          { '@type': 'ListItem', position: 2, name: 'Case Study', item: 'https://www.creativebirds.in/case-study/kubera-silks' },
          { '@type': 'ListItem', position: 3, name: 'Kubera Silks', item: 'https://www.creativebirds.in/case-study/kubera-silks' }
        ]
      })}</script>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '16px 24px 0', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
        <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 8px' }}>/</span>
        <span style={{ color: 'var(--yellow)' }}>Case Study</span>
        <span style={{ margin: '0 8px' }}>/</span>
        <span style={{ color: 'var(--yellow)' }}>Kubera Silks</span>
      </div>

      <section className="hero" style={{ minHeight: '50vh', paddingTop: '80px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>
          Kubera Silks — Logo Design & Branding
        </h1>
        <p style={{ fontSize: '16px', maxWidth: '700px', margin: '0 auto 32px', textAlign: 'center', lineHeight: 1.7 }}>
          A decade-long design partnership that turned a local saree shop into one of <Link to="/graphic-design-hyderabad" style={{ color: 'var(--yellow)', textDecoration: 'none' }}>Hyderabad's most recognized textile brands</Link>.
        </p>
      </section>

      <div className="section-divider"></div>

      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px', color: '#fff' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <img src={ClientLogo11} alt="Kubera Silks logo design by Creative Birds" style={{ maxHeight: '120px', objectFit: 'contain' }} />
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: 'var(--yellow)' }}>The Client</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          Kubera Silks is a respected name in Hyderabad's textile market. When they first approached Creative Birds, they needed more than just a logo — they needed a visual identity that would stand the test of time in a competitive retail landscape dominated by heritage brands and new entrants alike.
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: 'var(--yellow)' }}>What We Delivered</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          Our engagement with Kubera Silks began with logo design and expanded into a comprehensive brand identity system. We designed their primary logo mark, colour palette, typography guidelines, packaging artwork for saree boxes and carry bags, in-store signage, and seasonal campaign creatives for festivals like Diwali and Sankranti.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          The logo we created blends traditional Telugu design motifs with a modern, clean wordmark that works equally well on a storefront hoarding and a WhatsApp status image. Over the years, we have refined and evolved the brand while maintaining its core identity — a balance that only comes from deep client understanding.
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: 'var(--yellow)' }}>Client Feedback</h2>
        <blockquote style={{ fontStyle: 'italic', fontSize: '16px', lineHeight: 1.8, borderLeft: '3px solid var(--yellow)', paddingLeft: '16px', marginBottom: '32px', color: '#ccc' }}>
          "We have been working together for over a decade. Perfection from day 1 till now! Their dedication and graphic design quality are absolutely unmatched."<br />
          <span style={{ fontStyle: 'normal', fontWeight: 600, color: 'var(--yellow)', marginTop: '8px', display: 'inline-block' }}>— Srinivas, Kubera Silks</span>
        </blockquote>

        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: 'var(--yellow)' }}>Results</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
          Kubera Silks now enjoys brand recognition across multiple neighbourhoods in Hyderabad. Their packaging is instantly identifiable, their festival campaigns drive consistent foot traffic, and their visual identity has become a benchmark for other textile brands in the region.
        </p>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="https://wa.me/919100060049" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '12px' }}>Book a Similar Project</a>
          <Link to="/case-study/vedicare-ayurveda" className="btn-partner" style={{ textDecoration: 'none', display: 'inline-block' }}>Next: Vedicare Case Study</Link>
        </div>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Link to="/" style={{ color: 'var(--yellow)', fontSize: '14px', textDecoration: 'none' }}>← Back to Home</Link>
        </div>
      </section>
    </>
  );
}

export default CaseStudyKuberaSilks;
