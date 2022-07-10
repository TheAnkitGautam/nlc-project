import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import TeamPage from "./Pages/TeamPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from './Pages/AboutPage';
import PublicCorner from './components/PublicCorner/PublicCorner';
import ScrollButton from './components/ScrollToTop/ScrollToTop';
import AchievementPage from './components/Achievements/AchievementPage';
import NotFound from './Pages/NotFound';
import Profile from "./components/PublicCorner/Profile";
import { useContext, useLayoutEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import { API_Login_Request } from './utils/API_Calls';

function App() {

  const { user, dispatch } = useContext(AuthContext);

  useLayoutEffect(() => {
    API_Login_Request(dispatch)
  }, [dispatch])


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/team' element={<TeamPage />} />
          <Route path='/achievement' element={<AchievementPage />} />
          <Route path='/public' element={<PublicCorner />} />
          <Route path='/profile' element={user !== null ? <Profile /> : <PublicCorner />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <ScrollButton />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
