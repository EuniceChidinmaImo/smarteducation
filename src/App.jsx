 import Header from "./Components/Header";
import renderPage from "./Pages/renderPage";

function App() {
  let route = 'home';
  const path = window.location.pathname;
  switch (path) {
    case '/smarteducation/':
      route = 'home';
      break;
    case '/smarteducation/about':
      route = 'about';
      break;
    case '/smarteducation/contact':
      route = 'contact';
      break;
    case '/smarteducation/refund':
      route = 'refund';
      break;
    case '/smarteducation/terms':
      route = 'terms';
      break;
    case '/smarteducation/privacy':
      route = 'privacy';
      break;
    default:
      break;
  }

  const page = renderPage(route);
  return (
    <div>
      <Header currentPage={route} /> 
      {page}
    </div>
  );
}

export default App;