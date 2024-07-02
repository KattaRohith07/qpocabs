import React, { useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, Grid, TextField, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';

const CreateUserButton = styled(Button)({
  backgroundColor: 'lightblue',
  color: 'black',
  marginBottom: '20px',
  '&:hover': {
    backgroundColor: 'blue',
  },
});

// Initial users list
const initialUsers = [
  { sno: '01', username: 'Amal', Name: 'Amal', phonenumber: '1234567890', role: 'role', status: 'status', action: 'action' },
  { sno: '02', username: 'John', Name: 'John', phonenumber: '0987654321', role: 'role', status: 'status', action: 'action' },
];

const Users = () => {
  const [users, setUsers] = useState(initialUsers);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [newUser, setNewUser] = useState({
    username: '',
    Name: '',
    phonenumber: '',
    role: '',
    status: '',
    action: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleCreateUser = () => {
    setIsCreatingUser(true);
  };

  const handleSubmitUser = () => {
    // Add new user to the users list
    setUsers([
      ...users,
      {
        ...newUser,
        sno: String(users.length + 1).padStart(2, '0'), // Increment and pad the serial number
      },
    ]);

    // Reset the form and go back to the user list view
    setNewUser({
      username: '',
      Name: '',
      phonenumber: '',
      role: '',
      status: '',
      action: '',
    });
    setIsCreatingUser(false);
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, userIndex) => userIndex !== index).map((user, i) => ({
      ...user,
      sno: String(i + 1).padStart(2, '0'), // Reassign the serial numbers
    }));
    setUsers(updatedUsers);
  };

  return (
    <Grid container>
      <Grid item xs={2} /> {/* Adjust this value to match the width of your sidebar */}
      <Grid item xs={10}>
        <Box sx={{ padding: '20px' }}>
          <Typography variant="h4" gutterBottom>
            Users
          </Typography>
          {!isCreatingUser ? (
            <>
              <CreateUserButton variant="contained" onClick={handleCreateUser}>
                + CREATE USER
              </CreateUserButton>
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
                      <TableCell>Delete</TableCell> {/* Add Delete column */}
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
                        <TableCell>
                          <IconButton onClick={() => handleDeleteUser(index)}>
                            <DeleteIcon />
                          </IconButton>
                        </TableCell> {/* Add delete button */}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          ) : (
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Typography variant="h5">Create User</Typography>
              <TextField
                required
                label="Username"
                name="username"
                value={newUser.username}
                onChange={handleInputChange}
              />
              <TextField
                required
                label="Name"
                name="Name"
                value={newUser.Name}
                onChange={handleInputChange}
              />
              <TextField
                required
                label="Phone Number"
                name="phonenumber"
                value={newUser.phonenumber}
                onChange={handleInputChange}
              />
              <TextField
                required
                label="Role"
                name="role"
                value={newUser.role}
                onChange={handleInputChange}
              />
              <TextField
                required
                label="Status"
                name="status"
                value={newUser.status}
                onChange={handleInputChange}
              />
              <TextField
                required
                label="Action"
                name="action"
                value={newUser.action}
                onChange={handleInputChange}
              />
              <Button variant="contained" onClick={handleSubmitUser}>
                SUBMIT USER
              </Button>
            </Box>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Users;
