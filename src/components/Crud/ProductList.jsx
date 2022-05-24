import React, { useEffect, useState } from 'react';




import { Box, Pagination, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useProducts } from '../../context/ProductContextProvider';


const ProductList = () => {



    const { products, getProducts, page, setPage, count } = useProducts();
    const [searchParams] = useSearchParams();


    // console.log(products);
    useEffect(() => {
        getProducts();
    }, []);



    useEffect(() => {
        getProducts()
    }, [page, searchParams])

    // const [page, setPage] = useState(1)
    // const itemsPerPage = 15
    // const count = Math.ceil(products.length / itemsPerPage)

    const handleChange = (e, p) => {
        setPage(p)
    }

    // const currentData = () => {
    //     const begin = (page - 1) * itemsPerPage
    //     const end = begin + itemsPerPage
    //     return products.slice(begin, end)

    // }




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

                    <Typography>Page: {page}</Typography>
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