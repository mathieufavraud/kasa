import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Routeur from "./components/routeur/routeur.jsx";
import "./components/header/header.scss";
import "./components/footer/footer.scss";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routeur></Routeur>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
