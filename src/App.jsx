// Rotas
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

//React
import { useState } from "react";

//App
import "./App.css";

//Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

//Componentes
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
