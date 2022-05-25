import React, { useEffect, useState } from "react";
import { Box, Button, Input, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/ProductContextProvider";

const AddProduct = () => {
  const { addProduct, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    image: "",
    direction: "",
    speciality: "",
    ranks: "",
    description: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };
  const handleInpFile = (e) => {
    let file = e.target.files[0];
    setProduct({ ...product, image: file });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1516549655169-df83a0774514?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbGwlMjBtZWRpY2FsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500)",
      }}
    >
      <Box
        sx={{
          width: "40vw",
          p: "6vh 1vw",
          ml: "1vw",
          my: "8vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "brown",
          borderRadius: "10%",
        }}
      >
        <TextField
          sx={{
            marginBottom: "10px",
            borderColor: "black",
            backgroundColor: "whitesmoke",
          }}
          //   fullWidth
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          size="small"
          onChange={handleInp}
        />
        <Input type="file" onChange={handleInpFile} />
        <TextField
          sx={{
            marginBottom: "10px",
            borderColor: "black",
            backgroundColor: "whitesmoke",
          }}
          //   fullWidth
          id="outlined-basic"
          label="Direction"
          variant="outlined"
          name="direction"
          size="small"
          onChange={handleInp}
        />
        <TextField
          sx={{
            marginBottom: "10px",
            borderColor: "black",
            backgroundColor: "whitesmoke",
          }}
          //   fullWidth
          id="outlined-basic"
          label="Speciality"
          variant="outlined"
          name="speciality"
          size="small"
          onChange={handleInp}
        />
        <TextField
          sx={{
            marginBottom: "10px",
            borderColor: "black",
            backgroundColor: "whitesmoke",
          }}
          //   fullWidth
          id="outlined-basic"
          label="Ranks"
          variant="outlined"
          name="ranks"
          size="small"
          onChange={handleInp}
        />

        <TextField
          sx={{
            marginBottom: "10px",
            borderColor: "black",
            backgroundColor: "whitesmoke",
          }}
          //   fullWidth
          id="outlined-basic"
          label="Description"
          variant="outlined"
          name="description"
          size="small"
          onChange={handleInp}
        />

        <Button
          sx={{
            marginBottom: "10px",
            borderColor: "black",
            color: "black",
            backgroundColor: "whitesmoke",
          }}
          variant="outlined"
          fullWidth
          size="large"
          onClick={() => {
            addProduct(product);
            navigate("/courses");
          }}
        >
          Add product
        </Button>
      </Box>
    </Box>
  );
};

export default AddProduct;
