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
import { useContext, useState, useLayoutEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import { API_Login_Request } from './utils/API_Calls';
import PreviousEvents from "./components/Events/PreviousEvents";
import RulesPage from "./components/Events/RulesPage";
import Loader from "./components/Loader";
import Notification from "./components/Notification";

function App() {

  const { profile, msg, dispatch } = useContext(AuthContext);
  const [loader, setLoader] = useState(true);

  useLayoutEffect(() => {
    API_Login_Request(dispatch)
      .then(() => {
        setLoader(false);
      })
  }, [dispatch])

  return (
    <BrowserRouter>
      <Navbar />
      <Loader loader={loader} />
      {msg && <Notification msg={msg} />}
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/team' element={<TeamPage />} />
        <Route path='/achievement' element={<AchievementPage />} />
        <Route path='/events' element={<><Events /><PreviousEvents /></>} />
        <Route path='/events/rules' element={<RulesPage />} />
        <Route path='/profile' element={!profile ? <Profile /> : <Navigate to="/events" replace />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
      <ScrollButton />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
