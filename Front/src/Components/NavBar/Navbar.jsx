import { useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
    

const defaultTheme = createTheme();
const Navbar = () => {    

  const handleLogout = () => {
    sessionStorage.setItem('token', '');
    sessionStorage.setItem('user', '');     
    window.location.href = '/';
  };

  const clickHome = () => {
    window.location.href = '/home';
  };

  const linkStyle = {
    color: 'inherit',
    textDecoration: 'none',
  };

  const activeStyle = {
    color: '#0080FF',
  };

  const getLinkStyle = ({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle);

  useEffect(() => {
    if(sessionStorage.getItem('token') === null || sessionStorage.getItem('token') === ''){
      window.location.href = '/';
    }
  }
  , []);  

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppBar position="fixed">
        <Toolbar style={{ justifyContent: 'space-between', backgroundColor: '#282828' }}>
          <Typography variant="h6" component={NavLink} to="/" style={{ ...linkStyle, flexGrow: 1, fontWeight: 'bolder' }}>
          UniBodim<span style={{ color: '#0080FF' }}>-Finder</span>
          </Typography>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <MenuItem component={NavLink} to="/home" style={getLinkStyle} onClick={clickHome}>
              Home
            </MenuItem> 
            <MenuItem component={NavLink} to="/bodims" style={getLinkStyle}>
              Boarding Places
            </MenuItem>   
            <MenuItem component={NavLink} to="/booking" style={getLinkStyle}>
              Bookings
            </MenuItem>   
            <MenuItem component={NavLink} to="/supticket" style={getLinkStyle}>
              Support Ticket
            </MenuItem>      
            <MenuItem component={NavLink} to="/suptickets" style={getLinkStyle}>
              Tickets
            </MenuItem>    
            <MenuItem component={NavLink} to="/feedback" style={getLinkStyle} onClick={()=>(window.location.href = '/feedback')}>
              Feedback
            </MenuItem>                                    
            <MenuItem component={NavLink} to="/profile" style={getLinkStyle}>
              Profile
            </MenuItem>
            <Button variant="contained" color="primary" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
