import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, Divider, ListItem, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Payment from '../Payment/Payment';
import { Navigate, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContextProvider';
import  cartImage  from './cartImage.jpg'





export default function Cart({}) {
  const { getCart, cart, deleteCartProduct } = useCart();

  const navigate = useNavigate();

  React.useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem('cart');
    getCart();
  };


  return (
    // <TableContainer >
    //   <Table sx={{ minWidth: 700, mb: 7 }} aria-label="customized table">
    //     <TableHead>
    //       <TableRow>
    //         <StyledTableCell>Picture</StyledTableCell>
    //         <StyledTableCell align="right">Name</StyledTableCell>
    //         <StyledTableCell align="right">Description</StyledTableCell>
    //         <StyledTableCell align="right">Price</StyledTableCell>
    //         <StyledTableCell align="right">-</StyledTableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {cart?.products.map((row) => (
    //         <StyledTableRow key={row.item.id}>
    //           <StyledTableCell component="th" scope="row">
    //             <img src={row.item.picture} alt="" width="70" height="70" />
    //           </StyledTableCell>
    //           <StyledTableCell align="right">{row.item.name}</StyledTableCell>
    //           <StyledTableCell sx={{fontSize: '10px'}} align="right">
    //             {row.item.description}
    //           </StyledTableCell>
    //           <StyledTableCell align="right">{row.item.price}</StyledTableCell>
    //           <StyledTableCell align="right">
    //             <Button onClick={() => deleteCartProduct(row.item.id)}>
    //               DELETE
    //             </Button>
    //           </StyledTableCell>
    //         </StyledTableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    //         <Divider sx={{mb: 5}}/>
    //         <Box sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>

    //   <Button variant='outlined' sx={{maxHeight: 35}} onClick={cartCleaner}> Clean cart</Button>
    //   <Button variant='contained' sx={{my: 3, alignSelf: 'center', border: '1px solid #2e7d32', borderRadius: '4%', color: 'white', bgcolor: '#a5d6a7'}} onClick={()=>navigate('/payment')}> BUY NOW FOR {cart?.totalPrice} $</Button>
    //         </Box>
    // </TableContainer>
    <Box mb={10}>
            <Paper elevation={4} sx={{display: 'flex', justifyContent: 'space-around', m: '20px auto', p: '20px 0', width: '90%', borderRadius: '45px'}}>
                <img src={cartImage} className='cartImage'/>
                <Typography variant='h4' sx={{alignSelf: 'center', mb: '20px'}}>Ваши консультации:</Typography> 
            </Paper>
           {cart?.products.map((row) => (
               <Box key={row.item.id}>

        <Stack spacing={2} sx={{p: '7% 10%'}}>
          <Box sx={{py: '10px', border: '1px solid', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                <img src={row.item.image} alt="Doctor" className='cartItemImage'/>                
                <Typography variant='h5' mt={1} sx={{width: '100px'}}>
                    {row.item.name}
                </Typography>

                <Typography mt={1} sx={{width: '100px', fontSize: '14px'}}>
                    {row.item.ranks}
                </Typography>

                <Typography mt={1} sx={{ fontSize: '16px', fontWeight: 'bold'}}>
                    {row.item.speciality}
                </Typography>


          </Box>
          
          <Button color='error' variant='outlined' size='small' sx={{maxWidth: '19em', borderRadius: '15px', m: '8px auto'}} onClick={() => deleteCartProduct(row.item.id)}>
                   Удалить из избранного
                 </Button>
        </Stack>
               </Box>
           ))}
          <Box
           sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}
           >

          <Button  onClick={cartCleaner} variant='contained' color='error' size='large' sx={{maxWidth: '19em', borderRadius: '15px', m: '8px auto'}} >Очистить избранное</Button>
          <Button variant='contained' color='success' size='large' sx={{maxWidth: '30em', borderRadius: '15px',  m: '8px auto'}} onClick={()=>{navigate('/payment') }}>Записаться на прием и оплатить</Button>
          </Box>

    </Box>
  );
}
