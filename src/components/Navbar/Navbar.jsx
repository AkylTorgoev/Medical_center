import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { AppBar, Button, Paper, Toolbar } from '@mui/material';
import { AccountCircle, LogoDev } from '@mui/icons-material';
import logo from './logo.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContextProvider';
import { ADMIN } from '../../helpers/const';


export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const { user, checkAuth, logout } = useAuth();

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth();
    }
  }, []);

  const navigate = useNavigate();


  return (
    <Box mb={2} sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: 'white', color: 'rgb(59 131 115)', padding: '10px 0' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Link to='/'>
            <img id='logo' src={logo} alt="logo" />
          </Link>
          
          <Box sx={{ width: '100%', px: 9, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>

            <Button sx={{ fontFamily: 'Source Sans Pro', fontSize: { xl: '19px' }, px: 3, color: 'black' }} variant='text'>
              <Link to='/'>
                Новости
              </Link>
            </Button>
            <Button sx={{ fontFamily: 'Source Sans Pro', fontSize: { xl: '19px' }, px: 3, color: 'black' }} variant='text'>
              <Link to='/courses'>
                Консультация
              </Link>
            </Button>
            <Button sx={{ fontFamily: 'Source Sans Pro', fontSize: { xl: '19px' }, px: 3, color: 'black' }} variant='text'>
              <Link to='/about'>
                О нас
              </Link>
            </Button>
            <Button sx={{ fontFamily: 'Source Sans Pro', fontSize: { xl: '19px' }, px: 3, color: 'black' }} variant='text'>
              <Link to='/contacts'>
                Связаться с нами
              </Link>
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1 }} />

          {user == ADMIN ? (
              <Link to="/admin">
                <Button sx={{ my: 2, color: 'black' }}>ADMIN PAGE</Button>
              </Link>
            ) : (null)}

            {user ? (
          <>
          <Box>
           



          <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              >
              <AccountCircle sx={{fontSize: '35px'}}/>
            </IconButton>
          </Box>
          
            <Menu
            anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
        <MenuItem>
        

          <Avatar /> Profile
        
        </MenuItem>
        
        <Divider />
        <MenuItem>
        

          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        
        </MenuItem>
        
        <MenuItem onClick={() => {
                logout();
                navigate('/login');
              }}>
        

          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon >
          Logout
        
        </MenuItem>
      </Menu>
        </>
      ) : (
        <>
              <NavLink to="/login">
                <Button  sx={{mr: 2, px: 2, color:'#3a2c2cs'}}>
                  Login
                </Button>
              </NavLink>

              <NavLink to="/register">
                <Button  variant="outlined" color="inherit">
                  Register
                </Button>
              </NavLink>
            </>
          )}
        </Toolbar>
      </AppBar>

    </Box>
  );
}
