import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Sidebar from "./components/Sidebar/Sidebar";
import LoginPage from "./Pages/LoginPage";
import ManageContent from "./Pages/ManageContent";
import SubscriberPage from "./Pages/SubscriberPage";
import ParticipantPage from "./Pages/PaticipantPage";
import Box from "@mui/material/Box";

function App() {
  const { user } = useAuth();

  return (
    <Box sx={{ backgroundColor: "#F4F5FA", height: "100vh" }}>
      <BrowserRouter>
        {user ? (
          <>
            <Sidebar>
              <Routes>
                <Route path="/" element={<ManageContent />} />
                <Route path="/participants" element={<ParticipantPage />} />
                <Route path="/subscribers" element={<SubscriberPage />} />
              </Routes>
            </Sidebar>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </BrowserRouter>
    </Box>
  );
}

export default App;
