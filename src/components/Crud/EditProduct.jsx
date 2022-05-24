import { Box, Button, Input, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../context/ProductContextProvider';

const EditProduct = () => {


    const { getProductDetails, productDetails, saveEditedProduct } =
        useProducts();

    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(productDetails);

    useEffect(() => {
        setProduct(productDetails);
    }, [productDetails]);

    useEffect(() => {
        getProductDetails(id);
    }, []);


    console.log(product);


    const handleInp = (e) => {
        let obj = {
            ...product,
            [e.target.name]: e.target.value,
            'image': e.target.files,
        };
        setProduct(obj);
    };

    // const handleInpFile = (e) => {
    //     let file = e.target.files[0];
    //     setProduct({...product, image: file})
    // }
    return (
        <div>

            <Box sx={{ width: '60vw', margin: '10vh auto' }}>
                <TextField
                    sx={{ marginBottom: '10px', borderColor: 'black' }}
                    fullWidth
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    name='name'
                    size="small"
                    onChange={handleInp}
                />
                {/* <Box sx={{display: 'flex'}}>

                <input
                type='file'
                sx={{ marginBottom: '10px', borderColor: 'black' }}
                fullWidth
                id="outlined-basic"
                variant="outlined"
                size="small"
                onChange={handleInpFile}
                
                />
                 <Button variant='outlined' >Отпрвить</Button> 
                </Box> */}
                <TextField
                    sx={{ marginBottom: '10px', borderColor: 'black' }}
                    fullWidth
                    id="outlined-basic"
                    label="Direction"
                    variant="outlined"
                    size="small"

                    onChange={handleInp}
                />
                <TextField

                    sx={{ marginBottom: '10px', borderColor: 'black', backgroundColor: 'whitesmoke' }}
                    fullWidth
                    id="outlined-basic"
                    label="Speciality"
                    variant="outlined"
                    name='speciality'
                    size="small"

                    onChange={handleInp}
                />
                <TextField

                    sx={{ marginBottom: '10px', borderColor: 'black', backgroundColor: 'whitesmoke' }}
                    fullWidth
                    id="outlined-basic"
                    label="Ranks"
                    variant="outlined"
                    name='ranks'
                    size="small"

                    onChange={handleInp}
                />

                <TextField

                    sx={{ marginBottom: '10px', borderColor: 'black', backgroundColor: 'whitesmoke' }}
                    fullWidth
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    name='description'
                    size="small"

                    onChange={handleInp}
                />

                <Button
                    sx={{ marginBottom: '10px', borderColor: 'black', color: 'black', backgroundColor: 'whitesmoke' }}
                    variant="outlined"
                    fullWidth
                    size="large"
                    onClick={() => {
                        saveEditedProduct(product);
                        navigate(-1);
                    }}
                >
                    EDIT
                </Button>
            </Box>

        </div>
    );
};

export default EditProduct;