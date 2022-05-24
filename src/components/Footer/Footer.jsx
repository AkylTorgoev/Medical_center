import React from 'react';
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material';

import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <footer>
            <Box sx={{ background: '#26335D', color: 'white', display: 'wrap' }}
                px={{ xs: 4, sm: 10 }} py={{ xs: 6, sm: 10 }}
            >
                <Container maxWidth="xl">
                    <Grid container spacing={3}>
                        <Grid item px={5} xs={12} sm={6} md={3} sx={{ display: 'flex', flexDirection: 'column', display: { xs: 'none', sm: 'flex' } }}>
                            <Typography variant='h6'>OUR PRODUCTS</Typography>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Consulting
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Psychotherapy
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Alternative medicine
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Ambulatory treatment
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Biopsy
                            </Link>



                        </Grid>





                        <Grid item px={5} xs={12} sm={6} md={3} sx={{ display: 'flex', flexDirection: 'column', display: { xs: 'none', sm: 'flex' } }}>
                            <Typography variant='h6'>CONTACTS</Typography>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Center hours
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Phone
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Address
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Store location
                            </Link>

                        </Grid>

                        <Grid item pr={5} xs={12} sm={6} md={3} sx={{ display: 'flex', flexDirection: 'column', display: { xs: 'none', sm: 'flex' } }}>
                            <Typography variant='h6'>COMPANY</Typography>

                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                About us
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Carrier
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                We are hiring
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Blog
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                User analitics
                            </Link>



                        </Grid>
                        <Grid item pt={3} xs={12} sm={6} md={3} sx={{ display: { xs: 'none', sm: 'block' } }}>

                            <Typography variant='h6'>PROVIDING FIRST AID</Typography>
                            <Grid py={3}>
                                <img style={{ margin: '5px', width: '70px', height: '70px' }} src="https://cdn-icons-png.flaticon.com/512/3004/3004458.png" alt="" />
                                <img style={{ margin: '5px', width: '70px', height: '70px' }} src="https://cdn-icons.flaticon.com/png/512/2371/premium/2371353.png?token=exp=1653330736~hmac=27f0ba45b2f9cc9ba5efb64b7ca69866" alt="" />
                                <img style={{ margin: '5px', width: '70px', height: '70px' }} src="https://cdn-icons.flaticon.com/png/512/4441/premium/4441162.png?token=exp=1653330736~hmac=37841791d9f1ac6ce9a088387c6a5e40" alt="" />

                            </Grid>
                        </Grid>


                    </Grid>
                </Container>

                <Grid>
                    <Grid container spacing={3} px={{ xs: 4, sm: 3 }} py={{ xs: 6, sm: 3 }}>
                        <Grid item px={{ xs: 4, sm: 5 }} sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Center hours
                            </Link>
                            <Box component='span' sx={{ color: 'white' }}>
                                Mon-Sun: 9AM-6PM
                            </Box>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Phone
                            </Link>
                            <Box component='span' sx={{ color: 'white' }}>
                                +996 999 777 555
                            </Box>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Address
                            </Link>
                            <Box component='span' sx={{ color: 'white' }} >
                                I. Ahunbaeva street 88, Bishkek, Kyrghyzstan
                            </Box>
                        </Grid>


                    </Grid>


                    <Box textAlign='center' sx={{ color: 'white', display: 'flex', justifyContent: 'space-around', flexDirection: { xs: 'column', sm: 'row' } }} variant='body2' pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
                        <Typography variant='h6'>MEDICAL CENTER</Typography>
                        <Box>&reg; {new Date().getFullYear()} Medical center All Rights Reserved</Box>
                        <Box>
                            <Box component='span' p={2} ><TelegramIcon fontSize='large' /></Box>

                            <Box component='span' p={2} ><TwitterIcon fontSize='large' /></Box>
                            <Box component='span' p={2} ><InstagramIcon fontSize='large' /></Box>
                        </Box>
                    </Box>
                </Grid>
            </Box>
        </footer >
    );
};

export default Footer;