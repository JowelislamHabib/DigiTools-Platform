import "./App.css";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Stats from "./components/Stats/Stats";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <div className="divider"></div>

        <Hero />
        <Stats />
      </div>
    </>
  );
}

export default App;
