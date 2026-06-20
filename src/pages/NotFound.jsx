import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Creative Birds</title>
        <meta name="description" content="The page you are looking for does not exist. Return to Creative Birds homepage." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="hero" style={{ minHeight: '70vh', paddingTop: '160px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '80px', fontWeight: 900, color: 'var(--yellow)', marginBottom: '16px' }}>404</h1>
        <p style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>Page Not Found</p>
        <p style={{ fontSize: '15px', color: '#ccc', maxWidth: '500px', margin: '0 auto 32px', lineHeight: 1.7 }}>
          The page you are looking for does not exist or has been moved. Explore our services or return to the homepage.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block' }}>Back to Home</Link>
          <Link to="/graphic-design-hyderabad" className="btn-partner" style={{ textDecoration: 'none', display: 'inline-block' }}>Hyderabad Services</Link>
        </div>
      </section>
    </>
  );
}

export default NotFound;
