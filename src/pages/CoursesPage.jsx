import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ProductList from "../components/Crud/ProductList";
import SideBar from "../components/Crud/Sidebar";

const CoursesPage = () => {
  return (
    <Box p={5}>
      <Grid container spacing={3}>
        <SideBar />
        <ProductList />
      </Grid>
    </Box>
  );
};

export default CoursesPage;
