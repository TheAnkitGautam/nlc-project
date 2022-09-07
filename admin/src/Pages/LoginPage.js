import {
  Button,
  CardMedia,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import logo from "./logo-white.png";
import PasswordIcon from "@mui/icons-material/Password";
import KeyIcon from "@mui/icons-material/Key";
import { useState } from "react";
import { Login } from "../utils/API_CALLS";
import { useAuth } from "../AuthContext";
import { Alert, Snackbar } from "@mui/material";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [msg, setMsg] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const { _signInUser } = useAuth();

  const handleLogin = async () => {
    const response = await Login(values.username, values.password);
    _signInUser(response.token, response.user);
    if (response.type === "success") {
      window.location.href = "/";
    }
    setMsg({ type: response.type, text: response.msg });
    setOpen(true);
  };

  return (
    <Box sx={{ py: 8, height: "100vh" }}>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          variant="filled"
          elevation={6}
          severity={msg.type}
          sx={{ width: "100%" }}
          onClose={handleClose}
        >
          {msg.text}
        </Alert>
      </Snackbar>

      <Container elevation={4} component={Paper} sx={{ width: "450px", py: 8 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 82, filter: "invert(100%)", mr: 3 }}
            image={logo}
            alt="NLC Logo"
          />
          <Typography fontWeight={500} variant="h3" color="#282828">
            NLC
          </Typography>
        </Box>
        <Typography
          sx={{ mb: 8 }}
          align="center"
          variant="body2"
          color="#3a3541de"
        >
          Please Sign-in to your account to continue.
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", my: 4, px: 2 }}>
          <PasswordIcon sx={{ mr: 3 }} />
          <TextField
            name="username"
            onChange={handleChange}
            value={values.username}
            variant="outlined"
            size="small"
            type="text"
            label="Username"
            fullWidth
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", my: 4, px: 2 }}>
          <KeyIcon sx={{ mr: 3 }} />
          <TextField
            name="password"
            onChange={handleChange}
            value={values.password}
            variant="outlined"
            size="small"
            type={showPassword ? "text" : "password"}
            label="Password"
            fullWidth
          />
        </Box>
        <Box>
          <FormGroup sx={{ mb: 3, px: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={showPassword}
                  onChange={(e) => {
                    setShowPassword(!showPassword);
                  }}
                />
              }
              label={<Typography variant="body2">Show Password</Typography>}
            />
          </FormGroup>
        </Box>
        <Box sx={{ px: 2 }}>
          <Button
            onClick={handleLogin}
            variant="contained"
            sx={{ mb: 2 }}
            color="primary"
            fullWidth
          >
            Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
