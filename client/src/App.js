import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import TeamPage from "./Pages/TeamPage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AboutPage from './Pages/AboutPage';
import Events from './Pages/EventsPage';
import ScrollButton from './components/ScrollToTop/ScrollToTop';
import AchievementPage from './Pages/AchievementPage';
import NotFound from './Pages/NotFound/NotFound';
import Profile from "./components/Events/Profile";
import PreviousEvents from "./components/Events/PreviousEvents";
import RulesPage from "./components/Events/RulesPage";
import { useAuth } from "./Context/AuthContext";

function App() {

  const { data } = useAuth()

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/team' element={<TeamPage />} />
        <Route path='/achievement' element={<AchievementPage />} />
        <Route path='/events' element={<><Events /><PreviousEvents /></>} />
        <Route path='/event/:eventName' element={<RulesPage />} />
        <Route path='/profile' element={data ? <Profile /> : <Navigate to={'/'} />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
      <ScrollButton />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
