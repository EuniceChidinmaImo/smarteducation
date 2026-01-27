
// import { useEffect, useState } from "react";
// import Footer from "./Components/Footer";
// import Header from "./Components/Header";
// import renderPage from "./Pages/renderPage";



// function App() {
//   const [route, setCurrentRoute] = useState(window.location.pathname);

//   useEffect(() => {
//     setCurrentRoute(window.location.pathname)
//   }, [])



//   // switch (route) {
//   //   case '/':
//   //     return <Home/>;
//   //   case '/about':
//   //     return <AboutPage/>;
//   //   case '/contact':
//   //     return <ContactPage/>;
//   //   case '/refund':
//   //     return <RefundPage/>;
//   //   case '/terms':
//   //     return <TermsPage/>;
//   //   case '/privacy':
//   //     return <PrivacyPage/>;
//   //   default:
//   //     break;
//   // }

//   const page = renderPage(route);
//   return (
//     <><div>
//       <Header currentPage={route} />
//       {page}
//     </div>

//     <Footer/></>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import renderPage from "./Pages/renderPage";

function App() {
  const getRoute = () =>
    window.location.pathname.replace("/smarteducation", "") || "/";

  const [route, setCurrentRoute] = useState(getRoute());

  useEffect(() => {
    setCurrentRoute(getRoute());
  }, []);

  const page = renderPage(route);

  return (
    <>
      <div>
        <Header currentPage={route} />
        {page}
      </div>
      <Footer />
    </>
  );
}

export default App;
