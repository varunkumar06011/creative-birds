import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeroImg from './logos/cb website ALL IMAGES/1.png';
import TrustedToolsImg from './logos/cb website ALL IMAGES/2.png';
import LogoImg from './logos/cb website ALL IMAGES/CB LOGO.png';
import MentorImg from './logos/cb website ALL IMAGES/3.png';
import TeamImg1 from './logos/cb website ALL IMAGES/4.png';
import TeamImg2 from './logos/cb website ALL IMAGES/image.png';
import TeamImg4 from './logos/cb website ALL IMAGES/7.png';
import TeamImg5 from './logos/cb website ALL IMAGES/8.png';
import TeamImg6 from './logos/cb website ALL IMAGES/9.png';
import TeamImg7 from './logos/cb website ALL IMAGES/10.png';
import TeamImg8 from './logos/cb website ALL IMAGES/11.png';
import TeamImgVijay from './logos/cb website ALL IMAGES/vijay.png';
import PortfolioImg1 from './logos/cb website ALL IMAGES/12.png';
import PortfolioImg2 from './logos/cb website ALL IMAGES/13.png';
import PortfolioImg3 from './logos/cb website ALL IMAGES/14.png';
import PortfolioImg4 from './logos/cb website ALL IMAGES/15.png';
import PortfolioImg5 from './logos/cb website ALL IMAGES/16.png';
import PortfolioImg6 from './logos/cb website ALL IMAGES/17.png';
import PricingImg1 from './logos/cb website ALL IMAGES/18.png';
import PricingImg2 from './logos/cb website ALL IMAGES/19.png';
import PricingImg3 from './logos/cb website ALL IMAGES/20.png';
import PricingImg4 from './logos/cb website ALL IMAGES/21.png';
import PackageImg from './logos/cb website ALL IMAGES/package.png';
import ClientLogo1 from './logos/1.png';
import ClientLogo2 from './logos/2.png';
import ClientLogo3 from './logos/3.png';
import ClientLogo4 from './logos/4.png';
import ClientLogo5 from './logos/5.png';
import ClientLogo6 from './logos/6.png';
import ClientLogo7 from './logos/7.png';
import ClientLogo8 from './logos/8.png';
import ClientLogo9 from './logos/9.png';
import ClientLogo10 from './logos/10.png';
import ClientLogo11 from './logos/11.png';
import ClientLogo12 from './logos/12.png';
import ClientLogo13 from './logos/13.png';
import ClientLogo14 from './logos/14.png';
import ClientLogo15 from './logos/15.png';
import ClientLogo16 from './logos/16.png';

const AnimatedCounter = ({ end, duration = 2000, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={counterRef}>{count}{suffix}</span>;
};

const testimonials = [
  { company: 'KUBERA SILKS', name: 'Srinivas', text: 'We have been working together for over a decade. Perfection from day 1 till now! Their dedication and graphic design quality are absolutely unmatched.' },
  { company: 'Rameshwari Silks', name: 'Duragam Prakash Matteti', text: "We've worked with you since the beginning, and your patience and creativity truly brought our vision to life. From the logo to our branding, you perfectly captured what we wanted. Thank you for your constant support and for going above and beyond for our opening!" },
  { company: 'Vedicare', name: 'Dr. A. Nagaraju', text: 'Incredible work on our branding! You perfectly understood our concept and delivered a stunning logo and design. We truly appreciate your patience, endless revisions, and your unwavering support during our opening & NABH accreditation. Highly recommended!' },
  { company: 'Deccan Chai', name: 'Velluli Gopi', text: "You've been with us from the start, and we couldn't be happier with our branding. Thank you for your incredible patience and for designing a logo that perfectly captures our vision. Your support made our opening a great success!" },
  { company: 'TTCDA', name: 'Srinivas Kothapalli', text: 'From our logo to our overall branding, your work perfectly elevated our vision. We truly appreciate your immense patience, openness to feedback and the dedicated support provided. Thank you for being a part of our journey!' },
  { company: 'V-Grand Group', name: 'T. Vinod Kumar', text: 'Fantastic experience working with you from day one. You captured our vision perfectly, handled every revision with patience, and were a huge support during our opening. Thank you for helping us build such a strong brand!' },
];

function App() {
  const scrollRef = useRef(null);
  const isPausedRef = useRef(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let pos = 0;
    const speed = 0.6;

    const animate = () => {
      if (!isPausedRef.current) {
        pos += speed;
        const half = container.scrollWidth / 2;
        if (pos >= half) {
          pos = 0;
          container.scrollLeft = 0;
        } else {
          container.scrollLeft = pos;
        }
      } else {
        pos = container.scrollLeft;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    const pause = () => { isPausedRef.current = true; };
    const resume = () => { isPausedRef.current = false; };

    container.addEventListener('mouseenter', pause);
    container.addEventListener('mouseleave', resume);
    container.addEventListener('touchstart', pause, { passive: true });
    container.addEventListener('touchend', resume);

    return () => {
      cancelAnimationFrame(rafRef.current);
      container.removeEventListener('mouseenter', pause);
      container.removeEventListener('mouseleave', resume);
      container.removeEventListener('touchstart', pause);
      container.removeEventListener('touchend', resume);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Creative Birds — On-Screen Graphic Design Studio | Hyderabad & India</title>
        <meta name="description" content="India's first hourly on-screen graphic design studio. Creative Birds offers logo design, branding, packaging, social media creatives & 3D graphics. Delivery starts in 10 mins. Call 91000 60049." />
        <link rel="canonical" href="https://www.creativebirds.in/" />
      </Helmet>

      {/* ── NAV ── */}
      <nav>
        <div className="nav-logo">
          <img src={LogoImg} alt="Creative Birds Logo" style={{ height: '70px', objectFit: 'contain' }} />
        </div>
        <div className="nav-links">
          <a href="#home">HOME</a><span className="sep">|</span>
          <a href="#team">OUR TEAM</a><span className="sep">|</span>
          <a href="#portfolio">OUR PORTFOLIO</a><span className="sep">|</span>
          <a href="#pricing">PRICING</a><span className="sep">|</span>
          <a href="#clientele">CLIENTELE</a><span className="sep">|</span>
          <a href="#contact">CONTACT US</a>
        </div>
        <a href="https://wa.me/919100060049" target="_blank" rel="noopener noreferrer" className="btn-schedule desktop-schedule" style={{ textDecoration: 'none', display: 'inline-block' }}>SCHEDULE NOW</a>
      </nav>
      <div className="mobile-schedule-wrapper">
        <a href="https://wa.me/919100060049" target="_blank" rel="noopener noreferrer" className="btn-schedule" style={{ textDecoration: 'none', display: 'block', width: '100%', textAlign: 'center', boxSizing: 'border-box' }}>SCHEDULE NOW</a>
      </div>

      {/* ── HERO ── */}
      <section className="hero" id="home">
        <p className="hero-eyebrow">WORLD'S FIRST HOURLY BASE ONSCREEN</p>
        <h1 className="hero-service">On-Screen Graphic Design Studio</h1>
        <p className="hero-sub" style={{ fontWeight: 700, fontSize: '18px', color: '#fff' }}>Breif | Shedule | On-Screen Delivery Start in</p>
        <div className="hero-minutes">10 Minutes<span className="hero-asterisk">*</span></div>

        <div className="hero-illustration">
          <img src={HeroImg} alt="Creative Birds graphic designer working live on screen delivering artwork in 10 minutes" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '16px' }} />
        </div>

        <div className="hero-buttons">
          <a href="https://wa.me/919100060049" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block' }}>BOOK NOW</a>
          <a href="https://wa.me/919100060079" target="_blank" rel="noopener noreferrer" className="btn-partner" style={{ textDecoration: 'none', display: 'inline-block' }}>BECOME A PARTNER</a>
        </div>
        <div style={{ marginTop: '20px' }}>
          <img src={TrustedToolsImg} alt="Trusted Tools: Adobe & CorelDRAW" style={{ height: '70px', objectFit: 'contain' }} />
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="stats">
        <div className="stat-item">
          <div className="stat-number"><AnimatedCounter end={1000} duration={2500} /></div>
          <div className="stat-label">Designs</div>
        </div>
        <div className="stat-item">
          <div className="stat-number"><AnimatedCounter end={300} duration={2000} /></div>
          <div className="stat-label">Clients</div>
        </div>
        <div className="stat-item">
          <div className="stat-number"><AnimatedCounter end={18} duration={1500} /></div>
          <div className="stat-label">Years of Excellence</div>
        </div>
      </div>

      <div className="section-divider"></div>

      {/* ── MENTOR ── */}
      <section className="mentor-section" id="team">
        <h2 className="section-title">Our Mentor</h2>
        <div className="mentor-card">
          <div className="mentor-photo-placeholder" style={{ border: 'none', background: 'transparent', padding: 0 }}>
          <img src={MentorImg} alt="Vijay Boda — Founder and Mentor at Creative Birds Graphic Design Studio" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
        </div>
          <div className="mentor-text">
            <p className="tagline">Crazy Creatolives…</p>
            <p><strong>Vijay Boda</strong> has been shaping visual stories since 2009.</p>
            <p>With 1000+ designs crafted across industries, his work spans logos, brochures, flyers, hoardings, and movie posters.</p>
            <p>Beyond design, he mentors at Creative Birds, inspiring young creatives to think bigger, design smarter, and build confidently.</p>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="team-section">
        <h2 className="section-title" style={{ textAlign: 'center' }}>Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src={TeamImg1} alt="Ramya Sree" className="team-photo-placeholder" style={{ objectFit: 'cover', border: 'none', background: 'transparent' }} />
            <div className="team-name">Ramya Sree</div>
            <div className="team-role">Co-Founder & Finance</div>
          </div>
          <div className="team-card">
            <img src={TeamImg2} alt="Mukesh K" className="team-photo-placeholder" style={{ objectFit: 'cover', border: 'none', background: 'transparent' }} />
            <div className="team-name">Mukesh K</div>
            <div className="team-role">Managing Partner & SMM</div>
          </div>

          <div className="team-card">
            <img src={TeamImg4} alt="Raju V" className="team-photo-placeholder" style={{ objectFit: 'cover', border: 'none', background: 'transparent' }} />
            <div className="team-name">Raju V</div>
            <div className="team-role">Managing Partner & OOH Manager</div>
          </div>

          <div className="team-card">
            <img src={TeamImg5} alt="Ravi Teja" className="team-photo-placeholder" style={{ objectFit: 'cover', border: 'none', background: 'transparent' }} />
            <div className="team-name">Ravi Teja</div>
            <div className="team-role">Marketing – Sales</div>
          </div>
          <div className="team-card">
            <img src={TeamImg6} alt="Vinod" className="team-photo-placeholder" style={{ objectFit: 'cover', border: 'none', background: 'transparent' }} />
            <div className="team-name">Vinod</div>
            <div className="team-role">Photography</div>
          </div>
          <div className="team-card">
            <img src={TeamImgVijay} alt="D. Vijay Kumar" className="team-photo-placeholder" style={{ objectFit: 'cover', border: 'none', background: 'transparent' }} />
            <div className="team-name">D. Vijay Kumar</div>
            <div className="team-role">Sr. Graphic Designer</div>
          </div>
          <div className="team-card">
            <img src={TeamImg7} alt="J. Jagadesh" className="team-photo-placeholder" style={{ objectFit: 'cover', border: 'none', background: 'transparent' }} />
            <div className="team-name">J. Jagadesh</div>
            <div className="team-role">SM Manager</div>
          </div>
          <div className="team-card">
            <img src={TeamImg8} alt="Sai Charan" className="team-photo-placeholder" style={{ objectFit: 'cover', border: 'none', background: 'transparent' }} />
            <div className="team-name">Sai Charan</div>
            <div className="team-role">3D & Motion Graphics</div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* ── WHY CHOOSE US ── */}
      <section className="why-section">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">Not Just Instant Delivery, But...</p>
        <div className="why-grid">
          <div className="why-card">10+ Experienced<br />Graphic Designers</div>
          <div className="why-card">Easy Booking<br />Call Us / Whatsapp Chat</div>
          <div className="why-card">Hourly Charges<br />Starts From ₹999/-</div>
          <div className="why-card">Safe & Secure<br />Copyright Stock Images</div>
          <div className="why-card">Instant Design<br />On-Screen Delivery</div>
          <div className="why-card">Friendly Creative Support<br />On-spot Implement</div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* ── PORTFOLIO ── */}
      <section className="portfolio-section" id="portfolio">
        <h2 className="section-title" style={{ fontSize: '18px', marginBottom: '32px' }}>Our Portfolio</h2>
        <div className="portfolio-grid">
          <a href="/CB_PORTFOLIO.pdf" download="CB_PORTFOLIO.pdf" className="portfolio-card" style={{ textDecoration: 'none' }}>
            <img src={PortfolioImg1} alt="Logo Designs" className="portfolio-img" style={{ objectFit: 'cover', background: '#fff', padding: '0' }} />
            <div className="portfolio-label">Logo Designs</div>
          </a>
          <a href="/CB_PORTFOLIO.pdf" download="CB_PORTFOLIO.pdf" className="portfolio-card" style={{ textDecoration: 'none' }}>
            <img src={PortfolioImg2} alt="Stationary, Flyers & Brochures" className="portfolio-img" style={{ objectFit: 'cover', background: '#fff', padding: '0' }} />
            <div className="portfolio-label">Stationary, Flyers & Brochures</div>
          </a>
          <a href="/CB_PORTFOLIO.pdf" download="CB_PORTFOLIO.pdf" className="portfolio-card" style={{ textDecoration: 'none' }}>
            <img src={PortfolioImg3} alt="Packaging" className="portfolio-img" style={{ objectFit: 'cover', background: '#fff', padding: '0' }} />
            <div className="portfolio-label">Packaging</div>
          </a>
          <a href="/CB_PORTFOLIO.pdf" download="CB_PORTFOLIO.pdf" className="portfolio-card" style={{ textDecoration: 'none' }}>
            <img src={PortfolioImg4} alt="Branding" className="portfolio-img" style={{ objectFit: 'cover', background: '#fff', padding: '0' }} />
            <div className="portfolio-label">Branding</div>
          </a>
          <a href="/CB_PORTFOLIO.pdf" download="CB_PORTFOLIO.pdf" className="portfolio-card" style={{ textDecoration: 'none' }}>
            <img src={PortfolioImg5} alt="Social Media Creatives" className="portfolio-img" style={{ objectFit: 'cover', background: '#fff', padding: '0' }} />
            <div className="portfolio-label">Social Media Creatives</div>
          </a>
          <a href="/CB_PORTFOLIO.pdf" download="CB_PORTFOLIO.pdf" className="portfolio-card" style={{ textDecoration: 'none' }}>
            <img src={PortfolioImg6} alt="3D & Videos" className="portfolio-img" style={{ objectFit: 'cover', background: '#fff', padding: '0' }} />
            <div className="portfolio-label">3D & Videos</div>
          </a>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* ── PRICING ── */}
      <section className="pricing-section" id="pricing">
        <h2 className="section-title" style={{ marginBottom: '40px' }}>Pricing</h2>

        <div className="pricing-layout">
          {/* ── TOP ROW ── */}
          <div className="pricing-top-row">
            {/* Left: Per Hour & Per Day */}
            <div className="pricing-hourly-daily">
              <div className="pricing-card-hd">
                <div className="pricing-badge-red">PER HOUR</div>
                <div className="pricing-price"><span className="rupee-red">₹</span><span className="price-big">999</span>/-</div>
                <div className="pricing-badge-yellow">1 HOUR ON-SCREEN</div>
                <p className="pricing-desc">PROFESSIONAL<br/>GRAPHIC DESIGNER</p>
              </div>
              <div className="pricing-card-hd">
                <div className="pricing-badge-red">PER DAY</div>
                <div className="pricing-price"><span className="rupee-red">₹</span><span className="price-big">6999</span>/-</div>
                <div className="pricing-badge-yellow">8 HOURS ON-SCREEN</div>
                <p className="pricing-desc">DEDICATED<br/>GRAPHIC DESIGNER</p>
              </div>
            </div>

            {/* Right: Basic / Standard / Premium */}
            <div className="pricing-plans-card">
              <div className="pricing-plans-row">
                <div className="plan-col">
                  <div className="plan-price"><span className="rupee-red">₹</span><span className="plan-price-big">19999</span>/-</div>
                  <div className="plan-name">BASIC</div>
                  <div className="plan-socials">
                    <span className="social-icon-red"><svg viewBox="0 0 24 24" fill="#fff" width="10" height="10"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg></span>
                    <span className="social-icon-red"><svg viewBox="0 0 24 24" fill="#fff" width="10" height="10"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg></span>
                    <span className="social-icon-red"><svg viewBox="0 0 24 24" fill="#fff" width="10" height="10"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/></svg></span>
                  </div>
                  <ul className="plan-features">
                    <li>Flyer Design - 1</li>
                    <li>Creative Design Support - 6hrs</li>
                    <li>Static Post Designs - 10</li>
                    <li>Monthly Festival Greetings</li>
                    <li>Complete 3 Platforms Account Handling</li>
                    <li>Creation of Ad Campaign</li>
                    <li>Monthly Report Creation</li>
                    <li>Ad Budget Release by Client</li>
                  </ul>
                </div>
                <div className="plan-col plan-col-mid">
                  <div className="plan-price"><span className="rupee-red">₹</span><span className="plan-price-big">29999</span>/-</div>
                  <div className="plan-name">STANDARD</div>
                  <div className="plan-socials">
                    <span className="social-icon-red"><svg viewBox="0 0 24 24" fill="#fff" width="10" height="10"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg></span>
                    <span className="social-icon-red"><svg viewBox="0 0 24 24" fill="#fff" width="10" height="10"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg></span>
                    <span className="social-icon-red"><svg viewBox="0 0 24 24" fill="#fff" width="10" height="10"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/></svg></span>
                  </div>
                  <ul className="plan-features">
                    <li>Flyer Design - 2</li>
                    <li>Creative Design Support - 8hrs</li>
                    <li>Static Post Designs - 15</li>
                    <li>Reels - 4 (20-30 secs)</li>
                    <li>Monthly Festival Greetings</li>
                    <li>Complete 3 Platforms Account Handling</li>
                    <li>Creation of Ad Campaign</li>
                    <li>Monthly Report Creation</li>
                    <li>Ad Budget Release by Client</li>
                  </ul>
                </div>
                <div className="plan-col">
                  <div className="plan-price"><span className="rupee-red">₹</span><span className="plan-price-big">49999</span>/-</div>
                  <div className="plan-name">PREMIUM</div>
                  <div className="plan-socials">
                    <span className="social-icon-red"><svg viewBox="0 0 24 24" fill="#fff" width="10" height="10"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg></span>
                    <span className="social-icon-red"><svg viewBox="0 0 24 24" fill="#fff" width="10" height="10"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg></span>
                    <span className="social-icon-red"><svg viewBox="0 0 24 24" fill="#fff" width="10" height="10"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/></svg></span>
                    <span className="social-icon-red"><svg viewBox="0 0 24 24" fill="#fff" width="10" height="10"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg></span>
                  </div>
                  <ul className="plan-features">
                    <li>Daily 1hr Screen Share Works</li>
                    <li>Unlimited Creative Support</li>
                    <li>Business Growth Ideas</li>
                    <li>Static Post Designs - 25+</li>
                    <li>Reels - 6 (20-30 secs)</li>
                    <li>Monthly Festival Greetings</li>
                    <li>Complete 5 Platforms Account Handling</li>
                    <li>Creation of Ad Campaign</li>
                    <li>Monthly Report Creation</li>
                    <li>Ad Budget Release by Client</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ── BOTTOM ROW ── */}
          <div className="pricing-bottom-row">
            {/* Left: Logo & Branding */}
            <div className="pricing-card-big">
              <div className="pricing-card-big-top">
                <div className="big-price"><span className="rupee-red">₹</span><span className="big-price-num">14999</span>/-</div>
                <div className="big-subtitle">LOGO & BRANDING IDENTITY</div>
                <div className="pricing-badge-yellow">DELIVERY IN 48 HOURS</div>
              </div>
              <div className="pricing-card-big-bottom">
                <p>LOGO DESIGN - 3 OPTIONS</p>
                <p>STATIONARY - 5 ITEMS</p>
                <p>SIGNAGE BRANDING</p>
                <p>BRANDING MANUAL</p>
              </div>
            </div>

            {/* Right: Monthly Package */}
            <div className="pricing-card-big">
              <div className="pricing-card-big-top">
                <div className="big-price"><span className="rupee-red">₹</span><span className="big-price-num">24999</span>/-</div>
                <div className="big-subtitle">ANY GRAPHIC DESIGN WORK</div>
                <div className="pricing-badge-yellow">MONTHLY PACKAGE</div>
              </div>
              <div className="pricing-card-big-bottom">
                <p>SOCIAL MEDIA POSTS</p>
                <p>BROCHURE / FLYER / PPT</p>
                <p>MENU / CATALOGUE</p>
                <p>ANY CREATIVE ARTWORKS</p>
                <p className="pricing-note">(EXCEPT LOGO BRANDING)</p>
              </div>
            </div>
          </div>

          {/* ── V SHOOTS BANNER ── */}
          <div className="vshoots-banner">
            <img src={PackageImg} alt="V Shoots - Reel/AD ₹2999 - Professional Mobile Shoot & Editors" />
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* ── CLIENTELE ── */}
      <section className="clientele-section" id="clientele">
        <h2 className="section-title">Our Clientele</h2>
        <div className="client-grid">
          <div className="client-logo" style={{ height: '80px', padding: '12px' }}><img src={ClientLogo1} alt="Heritage" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
          <div className="client-logo" style={{ height: '80px', padding: '12px' }}><img src={ClientLogo2} alt="Samadhan" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
          <div className="client-logo" style={{ height: '80px', padding: '12px' }}><img src={ClientLogo3} alt="Deccan Chai" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
          <div className="client-logo" style={{ height: '80px', padding: '12px' }}><img src={ClientLogo4} alt="Nutripeak" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
          <div className="client-logo" style={{ height: '80px', padding: '12px' }}><img src={ClientLogo5} alt="Grand Infra" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
          <div className="client-logo" style={{ height: '80px', padding: '12px' }}><img src={ClientLogo6} alt="Tranquil" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
          <div className="client-logo" style={{ height: '80px', padding: '12px' }}><img src={ClientLogo7} alt="Olivia" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
          <div className="client-logo" style={{ height: '80px', padding: '12px' }}><img src={ClientLogo8} alt="Loan Seva" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
          <div className="client-logo" style={{ height: '80px', padding: '12px' }}><img src={ClientLogo9} alt="Sri Divya" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
          <div className="client-logo" style={{ height: '80px', padding: '12px' }}><img src={ClientLogo10} alt="Rameshwari" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
          <div className="client-logo" style={{ height: '80px', padding: '12px' }}><img src={ClientLogo11} alt="Kubera" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
          <div className="client-logo" style={{ height: '80px', padding: '12px' }}><img src={ClientLogo12} alt="Roopsagar" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
          <div className="client-logo" style={{ height: '80px', padding: '12px' }}><img src={ClientLogo13} alt="Pharmonics" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
          <div className="client-logo" style={{ height: '80px', padding: '12px' }}><img src={ClientLogo14} alt="Vedicare" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
          <div className="client-logo" style={{ height: '80px', padding: '12px' }}><img src={ClientLogo15} alt="Cygnus" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
          <div className="client-logo" style={{ height: '80px', padding: '12px' }}><img src={ClientLogo16} alt="TTCDA" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonial-section">
        <h2 className="section-title">Our Loving Customers Say</h2>
        <div className="testimonial-list" ref={scrollRef}>
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={`a-${i}`}>
              <div className="testimonial-author">{t.company}<br />{t.name}</div>
              <div className="testimonial-text">"{t.text}"</div>
            </div>
          ))}
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={`b-${i}`}>
              <div className="testimonial-author">{t.company}<br />{t.name}</div>
              <div className="testimonial-text">"{t.text}"</div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider"></div>

      {/* ── CONTACT ── */}
      <section className="contact-section" id="contact">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-grid">
          <div>
            <div style={{ marginBottom: '24px' }}>
              <img src={LogoImg} alt="Creative Birds Logo" style={{ height: '70px', objectFit: 'contain' }} />
            </div>
            <div className="contact-info">
              <p>
                <svg width="20" height="20" fill="white" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: '2px' }}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                <span>Flat No. G3, Dwarakamaye,<br/>Royal Enfield Showroom Backside,<br/>Pillar No. C848, Saraswathi Nagar,<br/>Uppal, Hyderabad. TS. INDIA</span>
              </p>
              <p style={{ marginTop: '16px' }}>
                <svg width="20" height="20" fill="white" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: '2px' }}><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                <a href="mailto:creativebirdsindia@gmail.com">creativebirdsindia@gmail.com</a>
              </p>
              <div className="contact-social" style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#fff', color: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 'bold' }}>f</div>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#fff', color: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>ig</div>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#fff', color: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 'bold' }}>p</div>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#fff', color: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>yt</div>
                <span style={{ color: '#fff', fontSize: '16px' }}>/creativebirds</span>
              </div>
              <div className="contact-cities"><Link to="/graphic-design-hyderabad" style={{ color: 'inherit', textDecoration: 'none' }}>HYDERABAD</Link> | <Link to="/social-media-marketing-vizag" style={{ color: 'inherit', textDecoration: 'none' }}>VIZAG</Link> | <Link to="/branding-agency-ongole" style={{ color: 'inherit', textDecoration: 'none' }}>ONGOLE</Link> | <Link to="/ad-shoot-pune" style={{ color: 'inherit', textDecoration: 'none' }}>PUNE</Link> | <Link to="/3d-graphic-design-bengaluru" style={{ color: 'inherit', textDecoration: 'none' }}>BANGLORE</Link></div>
              <a className="whatsapp-cta" href="https://wa.me/919100060049" target="_blank" rel="noopener noreferrer">
                DM <svg width="32" height="32" fill="var(--navy)" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.8 3.08 1.23 4.79 1.23 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.46 14.1c-.23.65-1.32 1.25-1.84 1.34-.48.09-1.1.18-3.41-.78-2.77-1.16-4.54-4.01-4.68-4.2-.14-.18-1.12-1.49-1.12-2.84 0-1.35.7-2.03.95-2.31.25-.28.55-.35.74-.35.18 0 .37 0 .53.01.18.01.42-.07.65.48.23.55.78 1.91.85 2.05.07.14.12.3.02.48-.09.18-.14.3-.28.46-.14.16-.3.35-.42.46-.14.14-.28.28-.12.55.16.28.71 1.18 1.54 1.91 1.06.94 1.95 1.23 2.22 1.37.28.14.44.12.6-.07.16-.2.69-.81.88-1.09.18-.28.37-.23.62-.14.25.09 1.62.76 1.89.9.28.14.46.21.53.33.07.12.07.69-.16 1.34z"/></svg> 91000 600 49
              </a>
            </div>
          </div>
          <div>
            <div className="contact-form">
              <div className="input-wrap">
                <span className="input-icon">👤</span>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-wrap">
                <span className="input-icon">✉️</span>
                <input type="email" placeholder="E-mail" />
              </div>
              <div className="input-wrap">
                <span className="input-icon">📞</span>
                <input type="tel" placeholder="Phone" />
              </div>
              <div className="input-wrap textarea-wrap">
                <span className="input-icon">💬</span>
                <textarea placeholder="Message"></textarea>
              </div>
              <button className="btn-send">SEND →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
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
      </footer>
    </>
  );
}

export default App;
