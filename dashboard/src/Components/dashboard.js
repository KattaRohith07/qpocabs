import React from 'react';
import { Grid, Paper, Typography, Box, Link } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Dashboard = () => {
  const data = [
    { title: "Driver's online", count: 52, change: "+12 in past 15 mins" },
    { title: "Ongoing Driver's Trips", count: 38, change: "+7 in past 20 mins" },
    { lane: "L1H1 - L1H116", drivers: 10, riders: 30, color: 'green' },
    { lane: "L2H1 - L2H115", drivers: 10, riders: 30, color: 'blue' },
    { lane: "L3H1 - L3H69", drivers: 10, riders: 30, color: 'purple' },
    { lane: "L4H1 - L4H49", drivers: 10, riders: 30, color: 'red' },
    { lane: "L5H1 - L4H34", drivers: 10, riders: 30, color: 'orange' }
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 2, marginLeft: 29, width: '85%' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>Admin Panel Overview</Typography>
        <Typography variant="subtitle1" gutterBottom>Streamline your Data's with our concise overview.</Typography>
      </Box>
      <Grid container spacing={3}>
        {/* First two items */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">{data[0].title}</Typography>
            <Typography variant="h3">{data[0].count}</Typography>
            <Typography variant="subtitle2">{data[0].change}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">{data[1].title}</Typography>
            <Typography variant="h3">{data[1].count}</Typography>
            <Typography variant="subtitle2">{data[1].change}</Typography>
          </Paper>
        </Grid>
        {/* Remaining items */}
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {data.slice(2).map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper elevation={3} sx={{ p: 2, position: 'relative' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <LocationOnIcon sx={{ color: item.color }} />
                    <Link href="#" variant="body2">Show more...</Link>
                  </Box>
                  <Typography variant="h6">
                    Lane Name : {item.lane}
                  </Typography>
                  <Typography variant="body1">Driver's Engaged: {item.drivers}</Typography>
                  <Typography variant="body1">Rider's Engaged: {item.riders}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
