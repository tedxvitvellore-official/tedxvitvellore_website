import logo from "./logo.svg";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import PastEvents from "./components/PastEvents/PastEvents";
import About from "./components/About/About";
import HeroSection from "./components/Hero/HeroSection";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Navbar />}>
    //       <Route index element={<HeroSection />} />
    //       <Route path="contact" element={<Contact />} />
    //       <Route path="*" element={<NoPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <div className="bg-black text-white h-screen">
      {/* render what you want to render */}
      <HeroSection />
      {/* <PastEvents /> */}
      {/* <About /> */}
    </div>
  );
}

export default App;
