import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Mobile from "./pages/Mobile";
import Desktop from "./pages/Desktop";
import Slide1691 from "./pages/Slide1691";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/desktop":
        title = "";
        metaDescription = "";
        break;
      case "/slide-169-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Mobile />} />
      <Route path="/desktop" element={<Desktop />} />
      <Route path="/slide-169-1" element={<Slide1691 />} />
    </Routes>
  );
}
export default App;
