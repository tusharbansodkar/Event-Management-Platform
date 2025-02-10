import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button, Container, TextField, Typography } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   //dummy authentication replace with API call
  //   if (email === "test@test.com" && password === "password") {
  //     login({ email, token: "dummy-jwt-token" });
  //     console.log(email, password);
  //     navigate("/dashboard");
  //   } else {
  //     alert("Invalid credentials!");
  //   }
  // };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/dashboard"); // Redirect on success
    } catch (error) {
      alert("Login failed: " + error.response?.data?.message);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ marginTop: "80px" }}>
      <Typography variant="h5">Login</Typography>
      <form onSubmit={handleLogin}>
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          label="Password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button fullWidth variant="contained" type="submit">
          Login
        </Button>
        <p>
          Dont have an account? <a href="/signup">Sign up here</a>
        </p>
      </form>
    </Container>
  );
};
export default Login;
