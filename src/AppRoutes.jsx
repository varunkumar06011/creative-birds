import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Layout from './components/Layout';
import GraphicDesignHyderabad from './pages/GraphicDesignHyderabad';
import BrandingAgencyOngole from './pages/BrandingAgencyOngole';
import SocialMediaMarketingVizag from './pages/SocialMediaMarketingVizag';
import AdShootPune from './pages/AdShootPune';
import GraphicDesignBengaluru from './pages/GraphicDesignBengaluru';
import CaseStudyKuberaSilks from './pages/CaseStudyKuberaSilks';
import CaseStudyVedicare from './pages/CaseStudyVedicare';
import CaseStudyDeccanChai from './pages/CaseStudyDeccanChai';
import NotFound from './pages/NotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/graphic-design-hyderabad" element={<Layout><GraphicDesignHyderabad /></Layout>} />
      <Route path="/branding-agency-ongole" element={<Layout><BrandingAgencyOngole /></Layout>} />
      <Route path="/social-media-marketing-vizag" element={<Layout><SocialMediaMarketingVizag /></Layout>} />
      <Route path="/ad-shoot-pune" element={<Layout><AdShootPune /></Layout>} />
      <Route path="/3d-graphic-design-bengaluru" element={<Layout><GraphicDesignBengaluru /></Layout>} />
      <Route path="/case-study/kubera-silks" element={<Layout><CaseStudyKuberaSilks /></Layout>} />
      <Route path="/case-study/vedicare-ayurveda" element={<Layout><CaseStudyVedicare /></Layout>} />
      <Route path="/case-study/deccan-chai" element={<Layout><CaseStudyDeccanChai /></Layout>} />
      <Route path="*" element={<Layout><NotFound /></Layout>} />
    </Routes>
  );
}

export default AppRoutes;
