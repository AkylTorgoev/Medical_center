import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ProductList from "../components/Crud/ProductList";
import SideBar from "../components/Crud/Sidebar";

const CoursesPage = () => {
  return (
    <Grid sx={{ display: 'flex' }}>
      <Grid item md={3} ml={10} mt={6}><SideBar /></Grid>
      <Grid item md={6} m='0 auto' pr={10}><ProductList /></Grid>

    </Grid>
  );
};

export default CoursesPage;
