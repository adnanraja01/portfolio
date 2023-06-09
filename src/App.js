import About from "./components/About";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LetsConnect from "./components/LetsConnect";
import MyPortfolio from "./components/MyPortfolio";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="Index_gradient_left"></div>
      <div className="Index_gradient_right"></div>
      <Home />
      <About />
      <Expertise />
      <MyPortfolio />
      <LetsConnect />
      <Footer />
    </>
  );
}

export default App;
