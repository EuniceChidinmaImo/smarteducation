import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import RefundPage from "./Pages/RefundPage";
import TermsPage from "./Pages/T&C";
import PrivacyPage from "./Pages/P&P";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/refund" element={<RefundPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
