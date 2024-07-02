import React from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';

const CreateUserButton = styled(Button)({
  backgroundColor: 'lightblue',
  color: 'black',
  marginBottom: '20px',
  '&:hover': {
    backgroundColor: 'blue',
  },
});

const users = [
  { sno: '01',username: 'Amal', Name: 'Amal', phonenumber: '1234567890', role: 'role', status: 'status' ,action: 'action' },
  { sno: '01',username: 'Amal', Name: 'Amal', phonenumber: '1234567890', role: 'role', status: 'status' ,action: 'action' },
];

const Users = () => {
  return (
    <Grid container>
      <Grid item xs={2} /> {/* Adjust this value to match the width of your sidebar */}
      <Grid item xs={10}>
        <Box sx={{ padding: '20px' }}>
          <Typography variant="h4" gutterBottom>
            Users
          </Typography>
          <CreateUserButton variant="contained">+ CREATE USER</CreateUserButton>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                <TableCell>SNo</TableCell>
                  <TableCell>USERNAME</TableCell>
                  <TableCell>NAME</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow key={index}>
                     <TableCell>{user.sno}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.Name}</TableCell>
                    <TableCell>{user.phonenumber}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{user.status}</TableCell>
                    <TableCell>{user.action}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Users;
