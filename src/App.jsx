import "./App.css";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Pricing from "./components/Pricing/Pricing";
import AllProducts from "./components/Products/AllProducts";
import ReadyTransform from "./components/ReadyTransform/ReadyTransform";
import Stats from "./components/Stats/Stats";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <div className="divider"></div>

        <Hero />
        <Stats />

        <AllProducts />

        <GetStarted />

        <Pricing />

        <ReadyTransform />

        <Footer />
      </div>
    </>
  );
}

export default App;
