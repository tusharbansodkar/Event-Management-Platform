import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          {user ? "Welcome, " + user?.email : "Event Management"}
        </Typography>

        {user ? (
          <Button color="inherit" onClick={logout} component={Link} to="/login">
            Logout
          </Button>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
