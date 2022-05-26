

import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { height } from "@mui/system";
import Fade from 'react-reveal/Fade';




const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function AboutUs() {
    return (
        <ThemeProvider theme={theme}>
            <main>



                <Fade left>
                    <Box
                        sx={{
                            bgcolor: "background.paper",
                            pt: 8,
                            pb: 6,
                        }}

                    >
                        <Paper sx={{ maxWidth: "100%", m: 6, boxShadow: 0 }}>
                            <Container
                                maxWidth="xl"
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    flexWrap: "wrap",
                                }}
                                spacing={5}
                            >
                                <Grid container
                                >
                                    <Grid item sm={12} md={6} sx={{ margin: "auto" }}>
                                        <Typography
                                            component="h1"
                                            variant="h3"
                                            align="center"
                                            color="text.primary"
                                            gutterBottom
                                            mr={5}
                                        >
                                            Medical Center
                                            <Typography
                                                variant="h5"
                                                color="text.secondary"
                                                paragraph
                                                sx={{ margin: "auto", verticalAlign: "middle" }}
                                            >
                                                Медицинский центр “Medical Center” — это диагностика и
                                                лечение заболеваний. Наша клиника оснащена самым
                                                современным медицинским оборудованием и прекрасной
                                                лабораторной базой, что позволяет с высокой точностью
                                                проводить обследования и осуществлять диагностику
                                                заболеваний. Сотрудниками клиники являются
                                                высококвалифицированные детские и взрослые специалисты,
                                                обладатели врачебных категорий и стажа работы.
                                            </Typography>
                                        </Typography>
                                    </Grid>
                                    <Grid item sm={12} md={6}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: "100%", height: "100%" }}
                                            image="https://media.istockphoto.com/photos/colorful-corporate-building-at-fall-picture-id164478916?k=20&m=164478916&s=612x612&w=0&h=YT-_wyuzjgGJ-M5f9NMRzdI_GO4SHU_SyDx8QjZKX-M="
                                            alt="JAWS"
                                        />
                                    </Grid>
                                </Grid>
                                <Stack sx={{ pt: 8 }} spacing={6} justifyContent="center"></Stack>
                            </Container>
                        </Paper>
                    </Box>
                </Fade>
                <Fade right>
                    <Box
                        sx={{
                            bgcolor: "background.paper",
                            pt: 8,
                            pb: 6,
                        }}
                    >
                        <Paper sx={{ maxWidth: "100%", m: 6, boxShadow: 0 }}>
                            <Container
                                maxWidth="xl"
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    flexWrap: "wrap",
                                }}
                                spacing={5}
                            >
                                <Grid container>
                                    <Grid item sm={12} md={6}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: "100%", heigth: "100%" }}
                                            image="https://media.istockphoto.com/photos/portrait-of-medical-team-standing-in-hospital-corridor-picture-id1147975563?k=20&m=1147975563&s=612x612&w=0&h=QMzIvWymhVq9bPduT-sNhPuAt42sCMDVu2GbE4vQiQc="
                                            alt="Shop"
                                            ml={8}
                                        />
                                    </Grid>

                                    <Grid item sm={12} md={6} sx={{ margin: "auto" }}>
                                        <Typography
                                            sx={{ align: "center" }}
                                            component="h1"
                                            variant="h2"
                                            align="center"
                                            color="text.primary"
                                            gutterBottom
                                            ml={5}
                                        >
                                            Лучшие Врачи
                                            <Typography variant="h5" color="text.secondary" paragraph>
                                                Персонал нашей клиники – это высококвалифицированные врачи
                                                с многолетним опытом в своей отрасли. В их распоряжении –
                                                уникальные разработки корпорации, а также прогрессивные
                                                достижения медицинской науки. О высоком качестве сервиса
                                                свидетельствует количество наших пациентов, численность
                                                которых превышает 50 тысяч. Многопрофильный медицинский
                                                центр «Medical Center» – это эффективное лечение,
                                                современная материально-техническая база и индивидуальные
                                                решения.
                                            </Typography>
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Stack sx={{ pt: 8 }} spacing={6} justifyContent="center"></Stack>
                            </Container>
                        </Paper>
                    </Box>
                </Fade>
                <Fade down>
                    <Box
                        sx={{
                            bgcolor: "background.paper",
                            pt: 8,
                            pb: 6,
                        }}
                    >
                        <Paper sx={{ maxWidth: "100%", m: 6, boxShadow: 0 }}>
                            <Container
                                maxWidth="xl"
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    flexWrap: "wrap",
                                }}
                                spacing={5}
                            >
                                <Grid container>
                                    <Grid item sm={12} md={6} sx={{ margin: "auto" }}>
                                        <Typography
                                            component="h1"
                                            variant="h3"
                                            align="center"
                                            color="text.primary"
                                            gutterBottom
                                            mr={5}
                                        >
                                            Анализы и диагностика
                                            <Typography
                                                variant="h5"
                                                color="text.secondary"
                                                paragraph
                                                sx={{ margin: "auto", verticalAlign: "middle" }}
                                            >
                                                Лаборатория оснащена современным высокотехнологичным
                                                оборудованием от мировых производителей медицинской
                                                техники. Отлаженная деятельность персонала обеспечивает
                                                получение быстрых, надежных и достоверных результатов во
                                                всех областях клинических лабораторных исследований. Эти
                                                исследования помогают вырабатывать медицинскую тактику
                                                профилактики, постановки диагноза, и лечения болезни.
                                            </Typography>
                                        </Typography>
                                    </Grid>
                                    <Grid item sm={12} md={6}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: "100%", height: "100%" }}
                                            image="https://images.unsplash.com/photo-1606206591513-adbfbdd7a177?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWNhbCUyMHRlc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500"
                                            alt="JAWS"
                                        />
                                    </Grid>
                                </Grid>
                                <Stack sx={{ pt: 8 }} spacing={6} justifyContent="center"></Stack>
                            </Container>
                        </Paper>
                    </Box>
                </Fade>
                {/* End hero unit */}

                <Fade down>
                    <Container sx={{ py: 8 }} maxWidth="md">
                        <Grid container spacing={4}>
                            {cards.map((card) => (
                                <Grid item key={card} xs={12} sm={6} md={4}>
                                    <Card
                                        sx={{
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            sx={{
                                                // 16:9
                                                pt: "56.25%",
                                            }}
                                            image="https://media.istockphoto.com/photos/medical-tech-science-innovative-iot-global-healthcare-ai-technology-picture-id1298626492?b=1&k=20&m=1298626492&s=170667a&w=0&h=gKFiFmLzM-jXK3IGgRHoBoP7dlRK1AecT8w1ivLGBSU="
                                            alt="random"
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                УЗИ
                                            </Typography>
                                            <Typography>Разные виды диагностики</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Fade>
            </main>
        </ThemeProvider>
    );
}
