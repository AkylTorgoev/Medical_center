import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';

const MainPage = () => {
    return (
        <Box>
            <Container>
                <Typography sx={{fontFamily: 'Source Sans Pro'}} variant='body2'>

                Добро пожаловать в 
                <h2>Medical center</h2>
                </Typography>
            </Container>
        </Box>
    );
};

export default MainPage;