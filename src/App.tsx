import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import Benefits from "./pages/Benefits";
import Home from "./pages/Home";
import Testimonials from "./pages/Testimonials";
import Faq from "./pages/Faq";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Benefits />
      <Testimonials />
      <Faq />
    </>
  );
}

export default App;
