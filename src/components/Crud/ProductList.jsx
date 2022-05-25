import React, { useEffect, useState } from 'react';




import { Box, Pagination, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useProducts } from '../../context/ProductContextProvider';


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
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    my: '35px',
                    justifyContent: 'space-evenly',

                }}
            >
                {products ? (
                    (products.results || products).map((item) => {

                        return <ProductCard item={item} key={item.id} />
                    })
                ) : (
                    <h2>Loading...</h2>
                )}
            </Box>
            {products ? (
                <Box sx={{
                    textAlign: 'center'
                }}>


                    <Box my={3} display="flex" justifyContent="center">
                        <Pagination count={count} page={page} onChange={handleChange} />
                    </Box>
                </Box>
            ) : ('')
            }
        </>

    );
};

export default ProductList;