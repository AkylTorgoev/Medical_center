import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import { AppBar, Badge, Button, Drawer, Paper, Toolbar } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
import logo from './logo.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContextProvider';
import { ADMIN } from '../../helpers/const';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import Cart from '../cart/Cart';
import { getCountProductsInCart } from '../../helpers/functions';
import { useCart } from '../../context/CartContextProvider';


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
  const { addProductToCart } = useCart();


  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth();
    }
  }, []);

  React.useEffect(() => {
    setCount(getCountProductsInCart);
  }, [addProductToCart]);

  const navigate = useNavigate();


  //Cart
  const [count, setCount] = React.useState(0);

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

 

  const list = (anchor) => (
    <Box
      sx={{ width: 'auto'}}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Cart/>

    </Box>
  );


  

  return (
    <Box mb={2} sx={{ flexGrow: 1, }}>
      <AppBar position="static" sx={{ bgcolor: 'white', color: 'rgb(59 131 115)', padding: '10px 0',  borderRadius: '0 0 14px 14px' }}>
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
            <Button sx={{ fontFamily: 'Source Sans Pro', fontSize: { xl: '19px' }, color: 'black' }} variant='text'>
              <Link to='/about'>
                О нас
              </Link>
            </Button>
            <Button sx={{ fontFamily: 'Source Sans Pro', fontSize: { xl: '19px' }, color: 'black' }} variant='text'>
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
            ) : (
              <>
              {user ? (
              <Box sx={{ my: 2, color: 'black' }}>
                <Badge badgeContent={count} color="error">
                  
                  {['right'].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button sx={{p: '0'}} onClick={toggleDrawer(anchor, true)}>    
                      {count > 0 ?
                      <MedicalServicesIcon
                      color='secondary' sx={{fontSize: '32px'}}
                      /> : <MedicalServicesIcon
                      color='primary' sx={{fontSize: '32px'}}
                      />
                      }
                    </Button>

                    <Drawer
                        
                      onClose={toggleDrawer(anchor, false)}
                      anchor={anchor}
                     
                      
                      open={state[anchor]}
                      PaperProps={{
                        sx: { width: {xs: "75%", sm: "55%", md: "35%"}, borderRadius: '10% 10% 10% 30%',  bgcolor: '#e8eaf6'},
                      }}
                    >
                      {list(anchor)}

                    </Drawer>
                  </React.Fragment>
                  ))}
                </Badge>
              </Box>
          ) : (null)}
          </>
          )}

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
              <FaceIcon color='success' sx={{fontSize: '35px'}}/>
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
