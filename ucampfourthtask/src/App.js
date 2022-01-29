import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import React from "react";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Menu } from "./pages/Menu";
import { Home } from "./pages/Home";

function App() {

  const indices = [
        {
            id: 1,
            indexName: 'Nosotros + Reservas'
        },
        {
            id: 2,
            indexName: 'Nuestro Menú'
        }
    ]

  return (
    <>
    <Router>
        <NavBar name="El Pez Peruano" pages={indices} />
        <Routes>
              <Route
                exact
                path="/"
                element={<Navigate to="/pages/Home" />}
              />
          <Route exact path="/pages/Home" element={<Home/>} />
          <Route exact path="/pages/Menu" element={<Menu/>} />
        </Routes>

        <Footer copyright="UCamp 2022 - FourthTask - Renzo Ibañez" />
    </Router>
    </>
  );
}

export default App;
