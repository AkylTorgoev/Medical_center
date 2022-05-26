import React, { useEffect, useState } from 'react';




import { Box, Grid, Pagination, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useProducts } from '../../context/ProductContextProvider';
import Carousel from '../Carousel/Carousel';


const ProductList = () => {



    const { products, getProducts, page, setPage, count } = useProducts();
    const [searchParams] = useSearchParams();



    useEffect(() => {
        getProducts();
    }, []);



    useEffect(() => {
        getProducts()
    }, [page, searchParams])



    const handleChange = (e, p) => {
        setPage(p)
    }





    return (


        <Grid item>


            <Box sx={{

                display: 'flex',
                flexWrap: 'wrap',
                my: '35px',
                justifyContent: 'space-evenly'

            }}

            >
                {products ? (
                    (products.results || products).map((item) => {
                        return (<Box key={item.id} sx={{ margin: '15px' }}>

                            <ProductCard item={item}/>
                        </Box>)
                    })
                ) : (
                    <h2>Loading...</h2>
                )}
            </Box>

            <Box sx={{
                display: "flex",
                justifyContent: 'center'
            }}>
                <Box my={3}>
                    <Pagination count={count} page={page} onChange={handleChange} />
                </Box>
            </Box>


        </Grid>


    );
};

export default ProductList;