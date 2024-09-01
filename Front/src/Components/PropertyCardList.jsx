import { useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Grid, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';


export default function PropertyCardList({ props }) {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [selecteditem, setSelecteditem] = useState(null);

    const handleClickOpen = (props) => {
        setSelecteditem(props);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelecteditem(null);
    };

    const bookingProperty = async (data) => {
        localStorage.setItem('bookingProperty', JSON.stringify(data));
        navigate('/bookingForm')
    }


    return (
        <Box sx={{ mt: 4 }}>
            <Grid container spacing={4}>
                {props.map((data) => (
                    <Grid item key={data.id} xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345 }} onClick={() => handleClickOpen(data)}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={data.picture}
                                alt={data.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {data.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <b>Price : </b> {data.price} LKR
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <b>Adderss : </b> {data.address}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <b>Contact : </b> {data.phone}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <b>Campus Area : </b> {data.area}
                                </Typography>
                                <div>
                                    <button variant="contained" color="primary" style={{ marginTop: '5px', marginLeft: '-5px', backgroundColor: '#0080FF' }} onClick={(e) => bookingProperty(data)}>
                                        Booking
                                    </button>
                                    <button variant="contained" color="primary" style={{ marginTop: '5px', marginLeft: '5px', backgroundColor: '#7400B6' }} onClick={(e) => handleClickOpen()}>
                                        View
                                    </button>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle>
                    {selecteditem?.name}
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Typography variant="body2" color="text.secondary">
                        <b>Price : </b> {selecteditem?.price} LKR
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <b>Adderss : </b> {selecteditem?.address}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <b>Contact : </b> {selecteditem?.phone}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <b>Campus Area : </b> {selecteditem?.area}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <b>Email : </b> {selecteditem?.email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <b>Description : </b> {selecteditem?.description}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                        <b>Utilities : </b> {selecteditem?.description}
                    </Typography> */}
                </DialogContent>
            </Dialog>
        </Box>
    );
}

