import {
  Box,
  Button,
  CardMedia,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ContactUs from "../components/ContactUs/ContactUs";

const ContactUsPage = () => {
  return (
    <Box sx={{ py: "20vh", mt: "3px" }} className="bgImage1">
      <Grid sx={{ display: "flex", justifyContent: "flex-end" }} container>
        <Grid
          sm={12}
          md={6}
          p={5}
          noValidate
          autoComplete="off"
          sx={{
            width: "50vw",
            margin: "25 auto",
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
            color="success"
          >
            Отправить
          </Button>
        </Grid>
        <Grid item sm={12} md={6}>
          <CardMedia
            component="img"
            sx={{ width: "100%", height: "100%", margin: "0 auto" }}
            image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fG1lZGljYWwlMjBjYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500"
            alt="Shop"
          />
        </Grid>
      </Grid>
      ;
    </Box>
    // <div>
    //   <ContactUs />
    // </div>
  );
};

export default ContactUsPage;
