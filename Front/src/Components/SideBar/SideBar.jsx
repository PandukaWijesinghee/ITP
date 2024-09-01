import { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InventoryIcon from '@mui/icons-material/Inventory';
import BadgeIcon from '@mui/icons-material/Badge';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@material-ui/core';
// const ZperxLogo = 'url(https://images.pexels.com/photos/1028427/pexels-photo-1028427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';

const SideBar = () => {
  const defaultTheme = createTheme();
  const [selectedItem, setSelectedItem] = useState('Dashboard');  
  const navigate = useNavigate();


  useEffect(() => {
    const storedSelectedItem = window.sessionStorage.getItem('selectedItem');
    if (storedSelectedItem) {
      setSelectedItem(storedSelectedItem);
    }
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    window.sessionStorage.setItem('selectedItem', item);
    navigate(`/${item}`);
  };

  const handleLogout = () => {
    sessionStorage.setItem("hradmin", false);
    window.location.href = `/`;

  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Drawer
        anchor="left"
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: '#1c2331',
            color: '#ffffff',
          },
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 }}>
          <Typography variant="h5" sx={{ color: '#ecf0f1'}}>
            Admin Panel
          </Typography>
          {/* <Avatar
            alt="Company Logo"
            src={ZperxLogo}
            sx={{ width: 80, height: 80, border: '2px solid yellow' }}
          /> */}
        </Toolbar>
        <List>
          <>
            <ListItem
              button
              selected={selectedItem === 'staffDash'}
              onClick={() => handleItemClick('staffDash')}
              sx={{ '&:hover': { backgroundColor: '#2c3e50' } }}
            >
              <ListItemIcon>
                <BadgeIcon sx={{ color: '#ecf0f1' }} />
              </ListItemIcon>
              <ListItemText primary="Staff" />
            </ListItem>
            <ListItem
              button
              selected={selectedItem === 'Advertisement'}
              onClick={() => handleItemClick('Advertisement')}
              sx={{ '&:hover': { backgroundColor: '#2c3e50' } }}
            >
              <ListItemIcon>
                <BadgeIcon sx={{ color: '#ecf0f1' }} />
              </ListItemIcon>
              <ListItemText primary="Advertisement" />
            </ListItem>
            <ListItem
              button
              selected={selectedItem === 'foodMenuDash'}
              onClick={() => handleItemClick('foodMenuDash')}
              sx={{ '&:hover': { backgroundColor: '#2c3e50' } }}
            >
              <ListItemIcon>
                <BadgeIcon sx={{ color: '#ecf0f1' }} />
              </ListItemIcon>
              <ListItemText primary="Food & Menu" />
            </ListItem>
            <ListItem
              button
              selected={selectedItem === 'Service'}
              onClick={() => handleItemClick('Service')}
              sx={{ '&:hover': { backgroundColor: '#2c3e50' } }}
            >
              <ListItemIcon>
                <BadgeIcon sx={{ color: '#ecf0f1' }} />
              </ListItemIcon>
              <ListItemText primary="Service" />
            </ListItem>
            <ListItem
              button
              selected={selectedItem === 'utilityDash'}
              onClick={() => handleItemClick('utilityDash')}
              sx={{ '&:hover': { backgroundColor: '#2c3e50' } }}
            >
              <ListItemIcon>
                <BadgeIcon sx={{ color: '#ecf0f1' }} />
              </ListItemIcon>
              <ListItemText primary="Utility" />
            </ListItem>
            <ListItem
              button
              selected={selectedItem === 'Finance'}
              onClick={() => handleItemClick('Finance')}
              sx={{ '&:hover': { backgroundColor: '#2c3e50' } }}
            >
              <ListItemIcon>
                <BadgeIcon sx={{ color: '#ecf0f1' }} />
              </ListItemIcon>
              <ListItemText primary="Finance" />
            </ListItem>
            <ListItem
              button
              selected={selectedItem === 'propertyDash'}
              onClick={() => handleItemClick('propertyDash')}
              sx={{ '&:hover': { backgroundColor: '#2c3e50' } }}
            >
              <ListItemIcon>
                <BadgeIcon sx={{ color: '#ecf0f1' }} />
              </ListItemIcon>
              <ListItemText primary="Property" />
            </ListItem>
            <ListItem
              button
              selected={selectedItem === 'Reservation'}
              onClick={() => handleItemClick('Reservation')}
              sx={{ '&:hover': { backgroundColor: '#2c3e50' } }}
            >
              <ListItemIcon>
                <BadgeIcon sx={{ color: '#ecf0f1' }} />
              </ListItemIcon>
              <ListItemText primary="Reservation" />
            </ListItem>
            <ListItem
              button
              selected={selectedItem === 'mapDash'}
              onClick={() => handleItemClick('mapDash')}
              sx={{ '&:hover': { backgroundColor: '#2c3e50' } }}
            >
              <ListItemIcon>
                <BadgeIcon sx={{ color: '#ecf0f1' }} />
              </ListItemIcon>
              <ListItemText primary="Map" />
            </ListItem>
            <ListItem
              button
              selected={selectedItem === 'SupportTickets'}
              onClick={() => handleItemClick('SupportTickets')}
              sx={{ '&:hover': { backgroundColor: '#2c3e50' } }}
            >
              <ListItemIcon>
                <BadgeIcon sx={{ color: '#ecf0f1' }} />
              </ListItemIcon>
              <ListItemText primary="Support Tickets" />
            </ListItem>
            <ListItem
              button
              selected={selectedItem === 'Reviews'}
              onClick={() => handleItemClick('Reviews')}
              sx={{ '&:hover': { backgroundColor: '#2c3e50' } }}
            >
              <ListItemIcon>
                <BadgeIcon sx={{ color: '#ecf0f1' }} />
              </ListItemIcon>
              <ListItemText primary="Reviews" />
            </ListItem>
          </>
        </List>
        <List sx={{ marginTop: 'auto' }}>
          <ListItem button onClick={handleLogout} sx={{ '&:hover': { backgroundColor: '#2c3e50' } }}>
            <LogoutIcon>
              <InventoryIcon sx={{ color: '#ecf0f1' }} />
            </LogoutIcon>
            <ListItemText primary="Logout" sx={{ paddingLeft: '50px' }} />
          </ListItem>
        </List>
      </Drawer>
    </ThemeProvider>
  );
};

export default SideBar;
