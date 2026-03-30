import "./App.css";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import AllProducts from "./components/Products/AllProducts";
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
      </div>
    </>
  );
}

export default App;
