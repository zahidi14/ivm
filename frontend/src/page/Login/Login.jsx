import {
  Box,
  Button,
  useTheme,
  TextField,
  Container,
  Typography,
  IconButton,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import React, { useContext, useState } from "react";
import { ColorModeContext } from "../../misc/theme";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../misc/AuthContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
    } else {
      setError("");
      // Handle login logic here
      console.log("Email:", email);
      console.log("Password:", password);
      try {
        await signIn(email, password);
        navigate("/home");
      } catch (err) {
        console.log("error sign in", err);
      }
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          width: "50px",
          height: "50px",
          backgroundColor: "#7CF5FF",
          borderRadius: "10px",
          position: "fixed",
          right: "0",
          top: "50%",
        }}
      >
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
