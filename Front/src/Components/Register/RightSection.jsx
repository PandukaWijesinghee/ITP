/* eslint-disable react/prop-types */
import { Avatar, Button, TextField, Paper, Box, Grid, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';



// eslint-disable-next-line react/prop-types
export default function RightSection({ handleSubmit, errors }) {

    const defaultTheme = createTheme();    

    return (
        <ThemeProvider theme={defaultTheme}>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
                sx={{
                    my: { xs: 6, md: 14 },
                    mx: { xs: 4, md: 8 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h4">
                    <b>Register</b>
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        required
                        error={!!errors.name}
                        helperText={errors.name}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        required
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="phone"
                        label="Phone Number"
                        name="phone"
                        autoComplete="phone"
                        required
                        error={!!errors.phone}
                        helperText={errors.phone}
                    />                   
                    <TextField
                        margin="normal"
                        fullWidth
                        id="address"
                        label="Address"
                        name="address"
                        autoComplete="address"
                        required
                        error={!!errors.address}
                        helperText={errors.address}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="nic"
                        label="NIC"
                        name="nic"
                        autoComplete="nic"
                        required
                        error={!!errors.nic}
                        helperText={errors.nic}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        required
                        error={!!errors.password}
                        helperText={errors.password}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container>
                        <Grid item>
                            Already have an account?{' '}
                            <Link to="/Login" variant="body2">
                                {'Login'}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Grid>
        </ThemeProvider>
    );
}
