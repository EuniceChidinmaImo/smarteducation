import HomePage from './Home';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import RefundPage from './RefundPage';
import TermsPage from './T&C';
import PrivacyPage from './P&P';

const renderPage = (currentPage) => {
  console.log("Rendering page for route:", currentPage);
  switch (currentPage) {
    case '/':
      return <HomePage />;
    case '/about':
      return <AboutPage />;
    case '/contact':
      return <ContactPage />;
    case '/refund':
      return <RefundPage />;
    case '/terms':
      return <TermsPage />;
    case '/privacy':
      return <PrivacyPage />;
    default:
      return <HomePage />;
  }
};

export default renderPage;
