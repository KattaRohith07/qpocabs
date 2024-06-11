import React, { useState } from 'react';
import { Drawer, List, ListItem as MuiListItem, ListItemIcon, ListItemText, Toolbar, Typography, Collapse, styled, Avatar, Box, useTheme, useMediaQuery, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import TrafficIcon from '@mui/icons-material/Traffic';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PieChartIcon from '@mui/icons-material/PieChart';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const drawerWidth = 240;

const ListItem = styled(MuiListItem)(({ theme }) => ({
  padding: '4.2%',
  marginLeft: '2px',
  color: 'black',

  '&:hover': {
    backgroundColor: '#2984FF',
    borderRadius: '5px',
    width: '90%',
    marginTop: '2px',
  },
  '&.active': {
    backgroundColor: '#2984FF',
    borderRadius: '5px',
    width: '90%',
    marginLeft: '4px',
  },
}));

const Sidebar = () => {
  const [openReports, setOpenReports] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleReportsClick = () => {
    setOpenReports(!openReports);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <div>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar alt="Logo" src="C:\Users\jayk7\OneDrive\Pictures\qpocabs\dashboard\src\assests\qpologo.svg" sx={{ marginRight: 2 }} />
          <Typography variant="h6" noWrap component="div">
            Cabs
          </Typography>
        </Box>
      </Toolbar>
      <List>
        <ListItem button component={NavLink} to="/dashboard" onClick={handleDrawerToggle} activeClassName="active">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><PersonIcon /></ListItemIcon>
          <ListItemText primary="Driver" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary="Riders" />
        </ListItem>
        <ListItem button key="Rider Lane">
          <ListItemIcon><TrafficIcon /></ListItemIcon>
          <ListItemText primary="Rider Lane" />
        </ListItem>
        <ListItem button key="Driver Lane">
          <ListItemIcon><LocationOnIcon /></ListItemIcon>
          <ListItemText primary="Driver Lane" />
        </ListItem>
        <ListItem button onClick={handleReportsClick}>
          <ListItemIcon><PieChartIcon /></ListItemIcon>
          <ListItemText primary="Reports" />
          {openReports ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openReports} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} key="Lanes">
              <ListItemText primary="Lanes" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} key="Hotspots">
              <ListItemText primary="Hotspots" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} key="Rider Leaderboard">
              <ListItemText primary="Rider Leaderboard" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} key="Driver Leaderboard">
              <ListItemText primary="Driver Leaderboard" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button key="Notifications">
          <ListItemIcon><LocationOnIcon /></ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem button key="Users">
          <ListItemIcon><LocationOnIcon /></ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
      </List>
      <Box sx={{ padding: '12px', textAlign: 'center', borderTop: '1px solid #ddd' }}>
        <Avatar
          alt="Super Admin"
          src="/path/to/profile/image.jpg"
          sx={{ width: 80, height: 80, margin: '0 auto' }}
        />
        <Typography variant="h6" sx={{ mt: 2 }}>Super Admin</Typography>
        <Typography variant="body2" color="textSecondary">@admin</Typography>
      </Box>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ m: 1 }}
        >
          {mobileOpen ? <CloseIcon style={{ color: 'black' }} /> : <MenuIcon />}
        </IconButton>
      )}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            ...(isMobile && { width: '70%' }),
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}

export default Sidebar;
