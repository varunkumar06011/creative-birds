import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../logos/cb website ALL IMAGES/CB LOGO.png';

function Nav({ isHome = false }) {
  const homePrefix = isHome ? '' : '/';

  return (
    <>
      <nav>
        <div className="nav-logo">
          <Link to="/">
            <img src={LogoImg} alt="Creative Birds Logo" style={{ height: '70px', objectFit: 'contain' }} />
          </Link>
        </div>
        <div className="nav-links">
          <a href={`${homePrefix}#home`}>HOME</a><span className="sep">|</span>
          <a href={`${homePrefix}#team`}>OUR TEAM</a><span className="sep">|</span>
          <a href={`${homePrefix}#portfolio`}>OUR PORTFOLIO</a><span className="sep">|</span>
          <a href={`${homePrefix}#pricing`}>PRICING</a><span className="sep">|</span>
          <a href={`${homePrefix}#clientele`}>CLIENTELE</a><span className="sep">|</span>
          <a href={`${homePrefix}#contact`}>CONTACT US</a>
        </div>
        <a href="https://wa.me/919100060049" target="_blank" rel="noopener noreferrer" className="btn-schedule desktop-schedule" style={{ textDecoration: 'none', display: 'inline-block' }}>SCHEDULE NOW</a>
      </nav>
      <div className="mobile-schedule-wrapper">
        <a href="https://wa.me/919100060049" target="_blank" rel="noopener noreferrer" className="btn-schedule" style={{ textDecoration: 'none', display: 'block', width: '100%', textAlign: 'center', boxSizing: 'border-box' }}>SCHEDULE NOW</a>
      </div>
    </>
  );
}

export default Nav;
