import { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Grid, Typography, Container, Card, CardContent, makeStyles } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';
import Swal from 'sweetalert2';
import configs from '../../config.js';
import { Link, useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  main: {
    height: '100vh',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  card: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const OwnerLogin = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${configs.apiUrl}/admin/login`, { email, password });
      if (response.status === 200 && response.data.type === 'Owner') {
        sessionStorage.setItem("admin_name", email);
        sessionStorage.setItem("admintype", 'Owner');
        sessionStorage.setItem("token", response.data.token);    
        await Swal.fire({
          title: "Success!",
          text: "Login successful.",
          icon: 'success',
          confirmButtonText: "OK"
        });
        navigate('/homes');
      } else {
        await Swal.fire({
          title: "Error!",
          text: "Invalid login credentials.",
          icon: 'error',
          confirmButtonText: "OK"
        });
      }
    } catch (error) {
      console.error(error);
      await Swal.fire({
        title: "Error!",
        text: "Server error occurred.",
        icon: 'error',
        confirmButtonText: "OK"
      });
    }
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.main}>
      <CssBaseline />
      <br />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon style={{ fontSize: 40 }} />
        </Avatar>
        <br />
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <br />
        <Card className={classes.card}>
          <CardContent>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
            </form>
            <Typography variant="body2" color="text.secondary" align="center" mt={5}>
              {'New account? '}
              <Link to="/ownerRegister" variant="body2">
              Sign Up
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
      <br />
    </Container>
  );
}

export default OwnerLogin;
