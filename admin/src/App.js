import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Sidebar from "./components/Sidebar/Sidebar";
import LoginPage from "./Pages/LoginPage";
import ManageContent from "./Pages/ManageContent";
import SubscriberPage from "./Pages/SubscriberPage";
import ParticipantPage from "./Pages/PaticipantPage";
// import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
// import Paper from '@mui/material/Paper';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

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
