import logo from "./logo.svg";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

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
    <>
      {/* render what you want to render */}
      <Navbar />
    </>
  );
}

export default App;
