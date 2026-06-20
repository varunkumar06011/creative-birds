import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="footer-left">
          <p>© 2026 Creative Birds</p>
          <p>A product of <strong>GEMBA BUZISOLN PRIVATE LIMITED</strong></p>
          <p>In Association <strong>PR ADVERTISE</strong></p>
        </div>
        <div className="footer-chat">
          <div className="chat-bubble main-bubble">Hi! How can we help?</div>
          <div className="chat-bottom">
            <span className="follow-text">Follow Us</span>
            <div className="chat-options">
              <div className="chat-bubble small-bubble">I have a question</div>
              <div className="chat-bubble small-bubble">Tell me more</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-links">
        <a href="#">Press & Blog</a>
        <a href="#">Patent</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Cookies</a>
        <a href="#">Contact</a>
        <a href="#">Careers</a>
        <a href="#">Verify Certificate</a>
      </div>
      <div className="footer-city-links" style={{ textAlign: 'center', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '24px' }}>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginBottom: '12px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>Explore Our Work By City</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px 16px' }}>
          <Link to="/graphic-design-hyderabad" style={{ color: '#fff', textDecoration: 'none', fontSize: '13px', opacity: 0.8 }}>Hyderabad</Link>
          <Link to="/branding-agency-ongole" style={{ color: '#fff', textDecoration: 'none', fontSize: '13px', opacity: 0.8 }}>Ongole</Link>
          <Link to="/social-media-marketing-vizag" style={{ color: '#fff', textDecoration: 'none', fontSize: '13px', opacity: 0.8 }}>Vizag</Link>
          <Link to="/ad-shoot-pune" style={{ color: '#fff', textDecoration: 'none', fontSize: '13px', opacity: 0.8 }}>Pune</Link>
          <Link to="/3d-graphic-design-bengaluru" style={{ color: '#fff', textDecoration: 'none', fontSize: '13px', opacity: 0.8 }}>Bengaluru</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
