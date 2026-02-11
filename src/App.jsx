import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

// Components
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// Pages
// import Home from './pages/Home';      
// import Services from './pages/Services';
// import About from './pages/About';
import Contact from './pages/Contact';
// import Login from './pages/Login';
// import PrivacyPolicy from './pages/PrivacyPolicy'; 
// import TermsOfService from './pages/TermsOfService';

function App() {
  // const location = useLocation();
  // const isLoginPage = location.pathname === '/login';
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      
      {/* {!isLoginPage && <Navbar />} */}
      
      <div className="flex-grow">
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} /> */}
          <Route path="/" element={<Contact />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} /> */}
        </Routes>
      </div>

      {/* {!isLoginPage && <Footer />} */}
      
    </div>
  );
}

export default App;