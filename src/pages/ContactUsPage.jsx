// import {
//   Box,
//   Button,
//   CardMedia,
//   Grid,
//   makeStyles,
//   Paper,
//   TextField,
//   Typography,
// } from "@mui/material";
import React from "react";
import ContactUs from "../components/ContactUs/ContactUs";

const ContactUsPage = () => {
  return (
    <Box sx={{ py: "20vh", mt: "3px" }} className="bgImage1">
      <Grid sx={{ display: "flex", justifyContent: "center" }} container>
        <Grid item sm={12} md={6}>
          <CardMedia
            component="img"
            sx={{ width: "100%", height: "100%", margin: "0 auto" }}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_BxtApMq4nZZndeUXLbOdsNAJWWM0sAoB6Q&usqp=CAU"
            alt="Shop"
          />
        </Grid>
      </Grid>
      ;
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
          color="success"
        >
          Отправить
        </Button>
      </Box>
    </Box>
    // <div>
    //   <ContactUs />
    // </div>
  );
};

export default ContactUsPage;
