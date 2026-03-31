import { Suspense, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Pricing from "./components/Pricing/Pricing";
import AllProducts from "./components/Products/AllProducts";
import ReadyTransform from "./components/ReadyTransform/ReadyTransform";
import Stats from "./components/Stats/Stats";

const dataFetching = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const dataPromise = dataFetching();

  const [cartItem, setCartItem] = useState([]);

  return (
    <>
      <div>
        <NavBar cartItem={cartItem} />
        <div className="divider"></div>

        <Hero />
        <Stats />

        <Suspense
          fallback={<span className="loading loading-ring loading-xl"></span>}
        >
          <AllProducts
            dataPromise={dataPromise}
            cartItem={cartItem}
            setCartItem={setCartItem}
          />
        </Suspense>

        <GetStarted />

        <Pricing />

        <ReadyTransform />

        <Footer />
      </div>
    </>
  );
}

export default App;
