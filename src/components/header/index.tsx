import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import { Menu as MenuIcon, ArrowBack } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleMenuClick = () => {
    if (pathname !== "/") {
      navigate("/");
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuClick}
          >
            {pathname === "/" ? <MenuIcon /> : <ArrowBack />}
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            {pathname === "/" ? "Breweries" : "Brewery Detail"}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
