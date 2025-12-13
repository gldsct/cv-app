import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { Form } from "./components/Form.jsx";
import { About } from "./components/About.jsx";
import { Footer } from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header label = {"main-navigation"} />
    <Hero />
    <Form />
    <About />
    <Footer />
  </StrictMode>
)