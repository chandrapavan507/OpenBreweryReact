import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Autocomplete,
  TextField,
  Grid,
} from "@mui/material";
import Box from "@mui/material/Box";
import {
  Menu as MenuIcon,
  ArrowBack,
  Search as SearchIcon,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router";
import { CITIES } from "../../util/constants";
import { CityContext } from "../../App";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { city, setCity } = useContext(CityContext);

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
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="h6" color="inherit" component="div">
              {pathname === "/" ? "Breweries" : "Brewery Detail"}
            </Typography>

            <Autocomplete
              disablePortal
              options={CITIES}
              value={city}
              style={{ padding: 10, color: "white" }}
              sx={{ width: 300, color: "white" }}
              onChange={(e, value) => value && setCity(value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  style={{ color: "white" }}
                  label="City"
                  placeholder="Select a City"
                />
              )}
            />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
