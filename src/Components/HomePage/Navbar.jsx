import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material";
import { theme } from "./Theme";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import orange from "@mui/material/colors/orange";
import { useNavigate } from 'react-router-dom'


const Search = styled("div")(({ theme }) => ({
  backgroundColor: "#f3f5fb",
  padding: "0 2px",
  borderRadius: theme.shape.borderRadius,
  width: "100%",
  position: "relative",
  "&:hover": {
    backgroundColor: theme.palette.common.blue,
  },
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing.unit * 3,
    width: "auto",
  },
}));

const styles = {
  root: {
    width: "100%",
    marginBottom: "10px",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  destopContainer: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  mobileContainer: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  customColor: {
    backgroundColor: orange[500],
  },
};

const pages = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

 

  const renderMenu = () => {
    
    return (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem><Link to="/login">Login</Link></MenuItem>
        <MenuItem><Link to="/register">Register</Link></MenuItem>
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
    );
  };

  const renderMobileMenu = () => {
    
    return (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );
  };

  return (
    <Box sx={styles.root}>
      <AppBar position="static" sx={styles.customColor} >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton color="inherit" aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
          <Typography sx={styles.title} variant="h6" color="inherit" noWrap>
            Wedding Planner
          </Typography>
          <Search>
            <InputBase placeholder="Search" />
          </Search>

          <Box sx={styles.destopContainer}>
            {pages.map((page, index) => (
              <Link
                key={index}
                to={page.url}
                style={{
                  padding: "6px 4px",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                {page.name}
              </Link>
            ))}

            <IconButton color="inherit">
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              aria-owns={isMenuOpen ? "material-appbar" : undefined}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={styles.mobileContainer}>
            <IconButton
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu()}
      {renderMobileMenu()}
    </Box>
  );
};

export default Navbar;