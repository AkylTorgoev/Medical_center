import { Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../context/ProductContextProvider';

const ProductDetails = () => {
    const { id } = useParams();
    console.log(id);
    const { getProductDetails, productDetails } = useProducts();

    useEffect(() => {
        getProductDetails(id);
    }, []);

    console.log(productDetails);

    return (
        <Paper sx={{ m: 3 }} elevation={24}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <img
                        src={productDetails.image}
                        alt=""
                        style={{ maxWidth: '100%' }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h3">{productDetails.name}</Typography>
                    <Typography variant="subtitle1">{productDetails.direction}</Typography>
                    <Typography variant="caption">{productDetails.speciality}</Typography>
                    <Typography variant="caption">{productDetails.ranks}</Typography>
                    <Typography variant="caption">
                        {productDetails.description}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default ProductDetails;