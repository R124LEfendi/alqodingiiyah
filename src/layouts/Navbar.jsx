import * as React from 'react';

import Search from '@mui/icons-material/Search';
import Bag from '@mui/icons-material/WorkOutline';
import Menu from '@mui/icons-material/Menu';
import logo from '../assets/images/logo.png';
import { Box, Typography, Menu as CustomMenu, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const pages = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Menu',
    path: '/menu',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

function Navbar() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const _handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const _handleClose = () => {
    setAnchorEl(null);
  };
  const _gotoPage = (v) => {
    _handleClose();
    navigate(v.path);
  };

  const _goHome = () => navigate('/');

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        backgroundColor: '#1ac073',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        px: { xs: '24px', sm: '40px', md: '90px' },
        py: 2,
        zIndex: 100,
      }}
    >
      <Box onClick={_handleClick} display={{ xs: 'flex', sm: 'none' }}>
        <Menu style={{ color: '#fff' }} />
      </Box>
      <CustomMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={_handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {pages.map((item, idx) => {
          return (
            <MenuItem key={idx} onClick={() => _gotoPage(item)}>
              {item.name}
            </MenuItem>
          );
        })}
      </CustomMenu>
      <Box>
        <Box onClick={_goHome} component="img" src={logo} alt="app-logo" />
      </Box>
      <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', gap: 28 } }}>
        {pages.map((item, idx) => {
          return (
            <Link to={item.path} key={idx} style={{ textDecoration: 'none' }}>
              <Typography component="p" color="#fff" fontWeight="500">
                {item.name}
              </Typography>
            </Link>
          );
        })}
      </Box>
      <Box display="flex">
        <Search style={{ color: '#fff' }} />
        <Box width={12} />
        <Bag style={{ color: '#fff' }} />
      </Box>
    </Box>
  );
}
export default Navbar;
