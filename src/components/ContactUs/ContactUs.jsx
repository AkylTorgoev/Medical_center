import {
    Box,
    Button,
    Grid,
    makeStyles,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

import React from "react";

const ContactUs = () => {
    return (
        <Box sx={{ py: "20vh", mt: "3px" }} className="bgImage1">
            <Box
                p={5}
                noValidate
                autoComplete="off"
                sx={{
                    width: "50vw",
                    margin: "0 auto",
                    background: "white",
                    borderRadius: "12px",
                }}
            >
                <Typography
                    sx={{ fontSize: "2em", fontWeight: 600, fontFamily: "Roboto" }}
                    variant="h2"
                    component="h1"
                    marginBottom={3}
                    color="textPrimary"
                >
                    Свяжитесь с нами
                </Typography>

                <TextField
                    sx={{ width: "49%", marginRight: "2%" }}
                    label="ФИО"
                    margin="dense"
                    color="primary"
                />
                <TextField
                    sx={{ width: "47б%", marginRight: "2%" }}
                    label="Телефон"
                    margin="dense"
                    color="primary"
                />
                <TextField sx={{ width: "49%" }} label="Email" margin="dense" />
                <TextField sx={{ width: "100%" }} label="Тема" margin="dense" />
                <TextField
                    sx={{ width: "100%" }}
                    label="Описание"
                    margin="dense"
                    multiline
                    rows="4"
                />
                <Button
                    sx={{ borderRadius: "20px", marginTop: "2%" }}
                    variant="contained"
                    size="large"
                    color="secondary"
                >
                    Отправить
                </Button>
            </Box>
        </Box>
    );
};

export default ContactUs;
