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
import { width } from '@mui/system';
import { useAuth } from '../../context/AuthContextProvider';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

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
    <Box mb={2} sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{bgcolor: 'white', color: 'rgb(59 131 115)', padding: '10px 0'}}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-around'}}>
          <Box>
            <img id='logo' src={logo} alt="logo" />
          </Box>
          {/* <Search sx={{border: '1px solid'}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          <Box sx={{ width: '100%', px: 9, display: {xs:'none', md: 'flex'}, justifyContent: 'center'}}>

            <Button sx={{fontFamily: 'Source Sans Pro', fontSize: { xl: '19px'},  px: 3, color: 'black'}} variant='text'>
            <Link to='/'>
            Новости
            </Link>
            </Button>
            <Button sx={{fontFamily: 'Source Sans Pro', fontSize: { xl: '19px'},  px: 3, color: 'black'}} variant='text'>
            <Link to='/'>
            Консультация
            </Link>
            </Button>
            <Button sx={{fontFamily: 'Source Sans Pro', fontSize: { xl: '19px'},  px: 3, color: 'black'}} variant='text'>
            <Link to='/'>
            О нас
            </Link>
            </Button>
            <Button sx={{fontFamily: 'Source Sans Pro', fontSize: { xl: '19px'},  px: 3, color: 'black'}} variant='text'>
            <Link to='/'>
            Связаться с нами
            </Link>
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={3} color="error">
                <MailIcon sx={{fontSize: '30px'}}/>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon sx={{fontSize: '30px'}}/>
              </Badge>
            </IconButton> */}
            



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
          {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
            >
            <MoreIcon sx={{fontSize: '30px'}}/>
            </IconButton>
          </Box> */}
          {user ? (
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
        
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>) : (
            <>
              <NavLink to="/login">
                <Button color="inherit" sx={{ color: 'white' }}>
                  Login
                </Button>
              </NavLink>

              <NavLink to="/register">
                <Button color="inherit" sx={{ color: 'white' }}>
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
