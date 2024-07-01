import React from 'react';
import { Grid, Paper, Typography, Box, Link } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Dashboard = () => {
  const data = [
    { title: "Driver's online", count: 52, change: "+12 in past 15 mins", icon: <PersonIcon sx={{ fontSize: 40, color: 'white' }} />, bgColor: 'lightblue' },
    { title: "Ongoing Driver's Trips", count: 38, change: "+7 in past 20 mins", icon: <PersonIcon sx={{ fontSize: 40, color: 'white' }} />, bgColor: 'green' },
    { lane: "L1H1 - L1H116", drivers: 10, riders: 30, color: 'green' },
    { lane: "L2H1 - L2H115", drivers: 10, riders: 30, color: 'blue' },
    { lane: "L3H1 - L3H69", drivers: 10, riders: 30, color: 'purple' },
    { lane: "L4H1 - L4H49", drivers: 10, riders: 30, color: 'red' },
    { lane: "L5H1 - L4H34", drivers: 10, riders: 30, color: 'orange' }
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 2, marginLeft: 29, width: '85%' }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" gutterBottom>Admin Panel Overview</Typography>
        <Typography variant="subtitle1" gutterBottom>Streamline your Data's with our concise overview.</Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {data.slice(0, 2).map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper elevation={3} sx={{ p: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 60,
                  height: 60,
                  borderRadius:3,
                  backgroundColor: item.bgColor,
                }}>
                  {item.icon}
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="h3">{item.count}</Typography>
                  <Typography variant="subtitle2" color="textSecondary">{item.change}</Typography>
                </Box>
              </Box>
              <Link href="#" variant="body2">Show more...</Link>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3} justifyContent="center" alignItems="center" sx={{ mt: 3 }}>
        {data.slice(2).map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <LocationOnIcon sx={{ color: item.color, fontSize: 30 }} />
                <Link href="#" variant="body2">Show more...</Link>
              </Box>
              <Typography variant="body1">Lane Name: {item.lane}</Typography>
              <Typography variant="body2">Driver's Engaged: {item.drivers}</Typography>
              <Typography variant="body2">Rider's Engaged: {item.riders}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Dashboard;
