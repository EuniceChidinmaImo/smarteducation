import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import RefundPage from "./Pages/RefundPage";
import TermsPage from "./Pages/T&C";
import PrivacyPage from "./Pages/P&P";
import NotFound from "./Pages/NotFound";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/refund" element={<RefundPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<NotFound />} />

  
  
      </Routes>

      <Footer />
    </>
  );
}

export default App;
