import { Paper, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import Carousel from '../Carousel/Carousel';
import bgImage from './bgImage.jpg'
import analises from './anlises.jpg'
import Fade from 'react-reveal/Fade'

const MainPage = () => {
    return (
        <Box py={2} sx={{backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed'}}>
            <Fade bottom>

            <Box  maxWidth={1000} sx={{}}>
                <Typography  sx={{fontFamily: 'Source Sans Pro', bgcolor: 'white', p: '10px', ml: '100px',  borderRadius: '14px'}} variant='h3'>
                <Paper elevation={3} sx={{p: '50px', borderRadius: '14px'}}>


                Добро пожаловать в 
                <Typography variant='h2'>Medical center</Typography>
                <Typography width={600} mt={5}>Медицинский центр “Medical Center” — это диагностика и лечение заболеваний. Наша клиника оснащена самым современным медицинским оборудованием и прекрасной лабораторной базой, что позволяет с высокой точностью проводить обследования и осуществлять диагностику заболеваний. 
                    Сотрудниками клиники являются высококвалифицированные детские и взрослые специалисты, обладатели врачебных категорий и стажа работы.</Typography>
                </Paper>
                </Typography>
            </Box>
            </Fade>
            <Fade right>
            <Box sx={{maxWidth: '90%',display: 'flex', alignItems: 'center', bgcolor: 'white', justifyContent: 'space-around', m: 'auto', px: '20px', my: '70px', borderRadius: '10px'}}>


                <Carousel />
                    <Box sx={{maxWidth: '40%', px: '20px'}}>
                    <Typography variant='h3'> Наш центр:</Typography>
                    <Typography variant='body1' mt={5}>Персонал нашей клиники – это высококвалифицированные врачи с многолетним опытом в своей отрасли. В их распоряжении – уникальные разработки корпорации, а также прогрессивные достижения медицинской науки. О высоком качестве сервиса свидетельствует количество наших пациентов, численность которых превышает 50 тысяч.
                         Многопрофильный медицинский центр «Medical Center» – это эффективное лечение, современная материально-техническая база и индивидуальные решения.</Typography>
                    </Box>

                

            </Box>
            </Fade>
            <Fade left>
            <Box sx={{maxWidth: '90%',display: 'flex', alignItems: 'center', bgcolor: 'white', justifyContent: 'space-around', m: 'auto', px: '20px', my: '100px', borderRadius: '10px'}}>


                    <Box sx={{maxWidth: '40%', px: '20px'}}>
                    <Typography variant='h3'> Диагностика и анализы</Typography>
                    <Typography variant='body1' mt={5}>Лаборатория оснащена современным высокотехнологичным оборудованием от мировых производителей медицинской техники. Отлаженная деятельность персонала обеспечивает получение быстрых, надежных и достоверных результатов во всех областях клинических лабораторных исследований. 
                    Эти исследования помогают вырабатывать медицинскую тактику профилактики, постановки диагноза, и лечения болезни.</Typography>
                    </Box>
                <Box py={10} sx={{my: '30px'}}>

                <img src={analises} width='600px' alt="asd" />
                </Box>

                

            </Box>
                
            </Fade>

        </Box>


    );
};

export default MainPage;