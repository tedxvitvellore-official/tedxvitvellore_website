import logo from "./logo.svg";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import PastEvents from "./components/PastEvents/PastEvents";
import About from "./components/About/About";
import HeroSection from "./components/Hero/HeroSection";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";

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
    <Router>
      <div className="bg-black text-white h-screen">
        {/* render what you want to render */}

        <Navbar />
        <Routes>
          <Route exact path="" element={<Home />}></Route>
          <Route exact path="about" element={<About />}></Route>
          <Route exact path="contact" element={<Contact />}></Route>
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
