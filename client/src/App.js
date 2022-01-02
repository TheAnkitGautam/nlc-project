import React from 'react';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import TeamPage from "./Pages/TeamPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from './Pages/AboutPage';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/team' element={<TeamPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
