import React, { useState, useEffect, useRef } from 'react';
import HeroImg from './logos/cb website ALL IMAGES/1.png';
import TrustedToolsImg from './logos/cb website ALL IMAGES/2.png';
import LogoImg from './logos/cb website ALL IMAGES/CB LOGO.png';
import MentorImg from './logos/cb website ALL IMAGES/3.png';
import TeamImg1 from './logos/cb website ALL IMAGES/4.png';
import TeamImg2 from './logos/cb website ALL IMAGES/5.png';
import TeamImg3 from './logos/cb website ALL IMAGES/6.png';
import TeamImg4 from './logos/cb website ALL IMAGES/7.png';
import TeamImg5 from './logos/cb website ALL IMAGES/8.png';
import TeamImg6 from './logos/cb website ALL IMAGES/9.png';
import TeamImg7 from './logos/cb website ALL IMAGES/10.png';
import TeamImg8 from './logos/cb website ALL IMAGES/11.png';
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

function App() {
  return (
    <>
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
        <a href="https://wa.me/919100060049" target="_blank" rel="noopener noreferrer" className="btn-schedule" style={{ textDecoration: 'none', display: 'inline-block' }}>SCHEDULE NOW</a>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" id="home">
        <p className="hero-eyebrow">WORLD'S FIRST HOURLY BASE ONSCREEN</p>
        <p className="hero-service">GRAPHIC DESIGN SERVICE</p>
        <p className="hero-sub" style={{ fontWeight: 700, fontSize: '18px', color: '#fff' }}>Breif | Shedule | On-Screen Delivery Start in</p>
        <div className="hero-minutes">10 Minutes<span className="hero-asterisk">*</span></div>

        <div className="hero-illustration">
          <img src={HeroImg} alt="Designer at Work" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '16px' }} />
        </div>

        <div className="hero-buttons">
          <a href="https://wa.me/919100060049" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block' }}>BOOK NOW</a>
          <a href="https://wa.me/919100060049" target="_blank" rel="noopener noreferrer" className="btn-partner" style={{ textDecoration: 'none', display: 'inline-block' }}>BECOME A PARTNER</a>
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
        <p className="section-title">OUR MENTOR</p>
        <div className="mentor-card">
          <div className="mentor-photo-placeholder" style={{ border: 'none', background: 'transparent', padding: 0 }}>
          <img src={MentorImg} alt="Vijay Boda" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
          <div className="name-tag" style={{ marginTop: '-12px', zIndex: 2, position: 'relative' }}>VIJAY BODA</div>
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
        <p className="section-title" style={{ textAlign: 'center' }}>OUR TEAM</p>
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
            <img src={TeamImg3} alt="Vijay Aparanj" className="team-photo-placeholder" style={{ objectFit: 'cover', border: 'none', background: 'transparent' }} />
            <div className="team-name">Vijay Aparanj</div>
            <div className="team-role">Managing Partner & Operations Head</div>
          </div>
          <div className="team-card">
            <img src={TeamImg4} alt="Raju V" className="team-photo-placeholder" style={{ objectFit: 'cover', border: 'none', background: 'transparent' }} />
            <div className="team-name">Raju V</div>
            <div className="team-role">Managing Partner & OOH Manager</div>
          </div>
        </div>
        <div className="team-row2">
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
            <img src={TeamImg7} alt="Jagadish" className="team-photo-placeholder" style={{ objectFit: 'cover', border: 'none', background: 'transparent' }} />
            <div className="team-name">Jagadish</div>
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
        <p className="section-title">WHY CHOOSE US</p>
        <p className="section-subtitle">Not Just Instant Delivery, But...</p>
        <div className="why-grid">
          <div className="why-card">10+ Experienced<br />Graphic Designers</div>
          <div className="why-card">Easy Booking<br />Call Us / Whatsapp Chat</div>
          <div className="why-card">Hourly Charges<br />Starts From ₹399/-</div>
          <div className="why-card">Safe & Secure<br />Copyright Stock Images</div>
          <div className="why-card">Instant Design<br />On-Screen Delivery</div>
          <div className="why-card">Friendly Creative Support<br />On-spot Implement</div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* ── PORTFOLIO ── */}
      <section className="portfolio-section" id="portfolio">
        <p className="section-title" style={{ fontSize: '18px', marginBottom: '32px' }}>OUR PORTFOLIO</p>
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
        <p className="section-title" style={{ marginBottom: '40px' }}>PRICING</p>

        <div className="pricing-grid">
          <div className="pricing-cell border-right border-bottom">
            <img src={PricingImg1} alt="Hourly and Daily Plans" className="pricing-img" />
          </div>
          <div className="pricing-cell border-bottom">
            <img src={PricingImg2} alt="Basic, Standard, Premium Plans" className="pricing-img" />
          </div>
          <div className="pricing-cell border-right">
            <img src={PricingImg3} alt="Logo & Branding Identity" className="pricing-img" />
          </div>
          <div className="pricing-cell">
            <img src={PricingImg4} alt="Monthly Package" className="pricing-img" />
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* ── CLIENTELE ── */}
      <section className="clientele-section" id="clientele">
        <p className="section-title">OUR CLIENTELE</p>
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
        <p className="section-title">OUR LOVING CUSTOMERS SAY</p>
        <div className="testimonial-list">
          <div className="testimonial-card">
            <div className="testimonial-author">KUBERA SILKS<br />SRINIVAS</div>
            <div className="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
          </div>
          <div className="testimonial-card" style={{ opacity: 0.5 }}>
            <div className="testimonial-author">CLIENT NAME</div>
            <div className="testimonial-text">Testimonial text goes here…</div>
          </div>
          <div className="testimonial-card" style={{ opacity: 0.5 }}>
            <div className="testimonial-author">CLIENT NAME</div>
            <div className="testimonial-text">Testimonial text goes here…</div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* ── CONTACT ── */}
      <section className="contact-section" id="contact">
        <p className="section-title">CONTACT US</p>
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
              <div className="contact-cities">VIZAG | ONGOLE | PUNE | BANGLORE</div>
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
          <div className="footer-left">
            <p>© 2026 Creative Birds</p>
            <p>A product of PR ADVERTISE</p>
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
