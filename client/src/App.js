import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import TeamPage from "./Pages/TeamPage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AboutPage from './Pages/AboutPage';
import Events from './components/Events/Events';
import ScrollButton from './components/ScrollToTop/ScrollToTop';
import AchievementPage from './components/Achievements/AchievementPage';
import NotFound from './Pages/NotFound';
import Profile from "./components/Events/Profile";
import { useContext, useLayoutEffect } from "react";
import { AuthContext } from "./Context/AuthContext";
import { API_Login_Request } from './utils/API_Calls';
import AdminPage from "./Pages/AdminPage";
import PreviousEvents from "./components/Events/PreviousEvents";


function App() {

  const { user, profile, dispatch } = useContext(AuthContext);

  useLayoutEffect(() => {
    API_Login_Request(dispatch)
  }, [dispatch])


  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/team' element={<TeamPage />} />
          <Route path='/achievement' element={<AchievementPage />} />
          <Route path='/events' element={<><Events /><PreviousEvents/></>} />
          <Route path='/profile' element={!profile ? <Profile /> : <Navigate to="/events" replace />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/admin' element={user?.isAdmin ? <AdminPage /> : <HomePage />} />
        </Routes>
        <ScrollButton />
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
