import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={3} // Margin bottom
    >
      <Typography variant="h4" align="center" flexGrow={1}>
        Users
      </Typography>
      <Button variant="contained" sx={{ ml: 'auto' }} onClick={()=>{
        navigate('/add-user')
      }} >
        Add User
      </Button>
    </Box>
  );
}

export default Header;
