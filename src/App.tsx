import { useState } from "react";
import "./index.css";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/sections/Home";

function App() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      {!isLoaded ? (
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      ) : null}
      <div
        className={`min-h-screen transition-opacity duration-70${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Home />
      </div>
    </>
  );
}

export default App;
