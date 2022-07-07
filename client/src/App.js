import React from 'react';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import TeamPage from "./Pages/TeamPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from './Pages/AboutPage';
import PublicCorner from './components/PublicCorner/PublicCorner';
import Notice from './components/PublicCorner/Notice';
import RulesPage from './components/PublicCorner/RulesPage';
import Form from './components/PublicCorner/Form';
import ScrollButton from './components/ScrollToTop/ScrollToTop';
import AchievementPage from './components/Achievements/AchievementPage';
import NotFound from './Pages/NotFound';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/team' element={<TeamPage />} />
          <Route path='/achievement' element={<AchievementPage />} />
          <Route path='/public' element={<PublicCorner />} >
            <Route path='' element={<Notice />} />
            <Route path="rules" element={<RulesPage />} />
            <Route path="register" element={<Form />} />
          </Route>
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <ScrollButton />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
