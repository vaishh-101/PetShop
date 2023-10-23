import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Link, Outlet } from 'react-router-dom';
import img1 from '../../Assets/2.png';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Hidden from '@mui/material/Hidden';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';

import { ShoppingCart } from '@mui/icons-material';
import ListItemIcon from "@mui/material/ListItemIcon";
import {useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import LogoutIcon from "@mui/icons-material/Logout";


const navBarStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const rightCornerStyles = {
  display: 'flex',
  alignItems: 'center',
};

const logoStyles = {
  width: '50px',
  height: '40px',
};

const dashboardStyle = {
  // backgroundColor: '#AB274F',
};


function NavBar() {

  let navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const cardsData = [
    {
      img: 'https://images.vetster.com/grey_cat_being_petted_fb599118c3.jpg',
      category: 'WELLNESS',
      title: 'Preventative wellness tips for your cat',
      description: 'There are many ways you can improve your cat’s physical and mental state. Annual veterinary exams, staying up to date on vaccines,',
    },
    {
      img: 'https://images.vetster.com/puppy_eating_from_bowl_0db6a6081d.jpg',
      category: 'BLOG',
      title: 'Preventative wellness tips for your cat',
      description: 'There are many ways you can improve your cat’s physical and mental state. Annual veterinary exams, staying up to date on vaccines,',
    },
    {
      img: 'https://images.vetster.com/General_Advice_and_Guidance_in_Virtual_Care_USA_CAN_3a5476d52e.jpg',
      category: 'WELLNESS',
      title: 'Preventative wellness tips for your cat',
      description: 'There are many ways you can improve your cat’s physical and mental state. Annual veterinary exams, staying up to date on vaccines,',
    },
  ];

  const animalitem = [
    { text: 'General information' },
    { text: 'About the shelter' },
    { text: 'Statistic data' },
    { text: 'Job' },
    { text: 'Tenders' },
    { text: 'Contact' },
  ];

  const vetitem = [
    { text: 'When your pet is missing' },
    { text: 'Recently found' },
    { text: 'How to adopt' },
    { text: 'Pets for adoption' },
    { text: 'Material Gifts' },
    { text: 'Help with Walks' },
    { text: 'Volunteer Activities' },

  ]
  return (
    <>
     <div style={dashboardStyle}>
     <AppBar position="static">
          <Toolbar style={navBarStyles}>
          <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
            <img src={img1} alt="Logo" style={logoStyles} />
            <div>
              <Hidden smDown>
              <Button component={Link} to="/dashboard/main" color="inherit">
                  Home
                </Button>
                <Button component={Link} to="/dashboard/product" color="inherit">
                  Product
                </Button>
                <Button component={Link} to="/dashboard/vetAppointment" color="inherit">
                  Consult a Vet
                </Button>
                <Button component={Link} to="/dashboard/contact" color="inherit">
                  Contact Us
                </Button>
                <Button component={Link} to="/dashboard/health" color="inherit">
                  HealthCare
                </Button>
              </Hidden>
            </div>
            <div style={rightCornerStyles}>
              <Hidden mdUp>
                <div style={{ marginLeft: 'auto' }}>
                  <IconButton
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenuOpen}
                  >
                  </IconButton>
                </div>
              </Hidden>
              {isLoggedIn ? (
                <>
                  <IconButton component={Link} to="/dashboard/cart" color="inherit"  style={{marginLeft: "20px"}}> 
                                     <ShoppingCart />

                  </IconButton>
                  <Avatar  style={{marginLeft: "20px"}} alt="Admin" src="/broken-image.jpg">
                  </Avatar>
                  <ListItemIcon
         style={{marginLeft: "20px"}}
         onClick={() => {
           localStorage.clear();
           Swal.fire({
             title: "Logout!",
             text: "You Logged out...👍",
             icon: "success",
           });

           navigate("/login");
         }}
       >
         <LogoutIcon />
       </ListItemIcon>
                </>
              ) : (
                <Button component={Link} to="/login" color="inherit">
                  Log In
                </Button>
              )}
            </div>
          </Toolbar>

          {/* Responsive menu for small screens */}
          <Menu
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleMenuClose}
          >
             <MenuItem component={Link} to="/dashboard/main" onClick={handleMenuClose}>
              Home
            </MenuItem>
            <MenuItem component={Link} to="/dashboard/product" onClick={handleMenuClose}>
              Product
            </MenuItem>
            <MenuItem
              component={Link}
              to="/dashboard/vetAppointment"
              onClick={handleMenuClose}
            >
              Consult a Vet
            </MenuItem>
            <MenuItem component={Link} to="/dashboard/contact" onClick={handleMenuClose}>
              Contact Us
            </MenuItem>
            <MenuItem component={Link} to="/dashboard/health" onClick={handleMenuClose}>
              HealthCare
            </MenuItem>
          </Menu>
        </AppBar>
        <div>
          <Outlet />
        </div>
  
</div>

  </>
  );
}

export default NavBar;
