import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";
import { AnimatePresence } from "framer-motion";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Provider store={store}>
          <AnimatePresence>
            <App />
          </AnimatePresence>
        </Provider>
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);

// Ajoute un useEffect ici pour gérer la classe "blurred"
useEffect(() => {
  const body = document.body;
  body.classList.remove("blurred");  // Assure-toi qu'il n'est pas flouté au départ

  return () => {
    body.classList.remove("blurred"); // Enlève le flou lorsque le composant est démonté
  };
}, []); 
