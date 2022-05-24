import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../context/ProductContextProvider';




const AddProduct = () => {


    const { addProduct, getProducts } = useProducts()

    useEffect(() => {
        getProducts();
    }, []);

    const navigate = useNavigate()



    const [product, setProduct] = useState({
        name: '',
        image: '',
        direction: '',
        speciality: '',
        ranks: '',
        description: ''

    })

    const handleInp = (e) => {
        if (e.target.name === 'price') {
            let obj = {
                ...product,
                [e.target.name]: Number(e.target.value),
            };
            setProduct(obj)
        } else {
            let obj = {
                ...product,
                [e.target.name]: e.target.value,
            }
            setProduct(obj)
        }
    }
    const handleInpFile = (e) => {
        let file = e.target.files[0];
        setProduct({...product, image: file})
    }


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
                <Box sx={{display: 'flex'}}>

                <input
                type='file'
                onChange={handleInpFile}
                    
                />
                </Box>
                <TextField
                    sx={{ marginBottom: '10px', borderColor: 'black' }}
                    fullWidth
                    id="outlined-basic"
                    label="Direction"
                    variant="outlined"
                    name='direction'
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
                        addProduct(product);
                        navigate('/courses');
                    }}
                >
                    Add product
                </Button>
            </Box>
        </div>

    );
};

export default AddProduct;