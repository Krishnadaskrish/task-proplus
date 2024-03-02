import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import toast from "react-hot-toast";
import axios from "axios"

function Register() {
  const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
  
        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const username = e.target.username.value.trim();
        const password = e.target.password.value.trim();
  
        if (name === "" || email === "" || username === "" || password === "") {
           toast.error("Enter All the Inputs");
        } else {
           try {
              const userData = { name, email,username , password };
              const response = await axios.post("http://localhost:4000/user/register", userData); //without using the axios instance it's about the usecase
              if (response) {
                 toast.success(response.data.message);
                 navigate("/log");
              }
           } catch (error) {
              toast.error(error);
              
           }
        }
     };
  
  return (
    <Container component="main" maxWidth="lg">
    
        <Button >Login in</Button>
     

    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12} sm={6}>
        <img
          src="https://img.freepik.com/free-vector/freelancer-working-laptop-her-house_1150-35048.jpg?w=740&t=st=1703404336~exp=1703404936~hmac=35b4820f021ab4071238e02cd1d819a3ee47060b0a467ec09907dd4130c6531d"
          alt="Reset Password"
          style={{ width: '100%', padding: '5%', paddingTop: '15%' }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '5%',
          }}
        >
          

        
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form style={{ width: '70%' }}  onSubmit={handleSubmit} >
          <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              autoComplete="username"
              autoFocus
            />
         
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              type="password"
              autoComplete="password"
              autoFocus
            />
          
            <Button type="submit" variant="outlined" fullWidth sx={{ mt: 3, mb: 2 }}>
              submit
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  </Container>
  )
}

export default Register
