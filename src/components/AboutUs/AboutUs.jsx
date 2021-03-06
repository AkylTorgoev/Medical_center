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


const cards = [1, 2, 3];


const theme = createTheme();

export default function AboutUs() {
    return (
        <ThemeProvider theme={theme}>
            <main>
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
                                        Medical Center
                                        <Typography
                                            variant="h5"
                                            color="text.secondary"
                                            paragraph
                                            sx={{ margin: "auto", verticalAlign: "middle" }}
                                        >
                                            ?????????????????????? ?????????? ???Medical Center??? ??? ?????? ?????????????????????? ??
                                            ?????????????? ??????????????????????. ???????? ?????????????? ???????????????? ??????????
                                            ?????????????????????? ?????????????????????? ?????????????????????????? ?? ????????????????????
                                            ???????????????????????? ??????????, ?????? ?????????????????? ?? ?????????????? ??????????????????
                                            ?????????????????? ???????????????????????? ?? ???????????????????????? ??????????????????????
                                            ??????????????????????. ???????????????????????? ?????????????? ????????????????
                                            ?????????????????????????????????????????????? ?????????????? ?? ???????????????? ??????????????????????,
                                            ???????????????????? ?????????????????? ?????????????????? ?? ?????????? ????????????.
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
                                        ???????????? ??????????
                                        <Typography variant="h5" color="text.secondary" paragraph>
                                            ???????????????? ?????????? ?????????????? ??? ?????? ?????????????????????????????????????????????? ??????????
                                            ?? ?????????????????????? ???????????? ?? ?????????? ??????????????. ?? ???? ???????????????????????? ???
                                            ???????????????????? ???????????????????? ????????????????????, ?? ?????????? ??????????????????????????
                                            ???????????????????? ?????????????????????? ??????????. ?? ?????????????? ???????????????? ??????????????
                                            ?????????????????????????????? ???????????????????? ?????????? ??????????????????, ??????????????????????
                                            ?????????????? ?????????????????? 50 ??????????. ?????????????????????????????? ??????????????????????
                                            ?????????? ??Medical Center?? ??? ?????? ?????????????????????? ??????????????,
                                            ?????????????????????? ??????????????????????-?????????????????????? ???????? ?? ????????????????????????????
                                            ??????????????.
                                        </Typography>
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Stack sx={{ pt: 8 }} spacing={6} justifyContent="center"></Stack>
                        </Container>
                    </Paper>
                </Box>

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
                                        ?????????????? ?? ??????????????????????
                                        <Typography
                                            variant="h5"
                                            color="text.secondary"
                                            paragraph
                                            sx={{ margin: "auto", verticalAlign: "middle" }}
                                        >
                                            ?????????????????????? ???????????????? ?????????????????????? ??????????????????????????????????????
                                            ?????????????????????????? ???? ?????????????? ???????????????????????????? ??????????????????????
                                            ??????????????. ???????????????????? ???????????????????????? ?????????????????? ????????????????????????
                                            ?????????????????? ??????????????, ???????????????? ?? ?????????????????????? ?????????????????????? ????
                                            ???????? ???????????????? ?????????????????????? ???????????????????????? ????????????????????????. ??????
                                            ???????????????????????? ???????????????? ???????????????????????? ?????????????????????? ??????????????
                                            ????????????????????????, ???????????????????? ????????????????, ?? ?????????????? ??????????????.
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
                {/* End hero unit */}

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
                                            ???????????? ?????????? ??????????????????????
                                        </Typography>
                                        <Typography>???????????? ???????? ??????????????????????</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                        ))}
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );

}
