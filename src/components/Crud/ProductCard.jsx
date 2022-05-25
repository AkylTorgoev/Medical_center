import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
import { useProducts } from '../../context/ProductContextProvider';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
// import { useCart } from '../../contexts/CartContextProvider';

export default function ProductCard({ item }) {
    const navigate = useNavigate();

    const { deleteProduct } = useProducts();
    // const { addProductToCart, checkProductInCart } = useCart()

    return (

        <Card sx={{ maxWidth: 300, justifyContent: 'center' }} elevation={24}>
            <CardMedia
                component="img"
                height="400"
                image={item.image}
                alt={item.name}
                onClick={() => navigate(`/courses/${item.id}`)}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                </Typography>

                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'blue', fontWeight: '700' }}>
                    {item.direction}
                </Typography>

                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'blue', fontWeight: '700' }}>
                    {item.speciality}
                </Typography>

                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'blue', fontWeight: '700' }}>
                    {item.ranks}
                </Typography>

                {/* <Typography
                    variant="body2"
                    color="text.secondary"
                    onClick={() => navigate(`/courses/${item.id}`)}
                    sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '3',
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {item.description}
                </Typography> */}
            </CardContent>
            <CardActions>
                <IconButton>
                    <DeleteOutlineIcon size="small" onClick={() => deleteProduct(item.id)} />
                </IconButton>


                <IconButton size="small" onClick={() => navigate(`/edit/${item.id}`)}>
                    <EditIcon />
                </IconButton>

                {/* <Button size="small" onClick={() => deleteProduct(item.id)}>
                    Delete
                </Button> */}

                {/* // <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
                //     Edit
                // </Button> */}

                {/* <IconButton onClick={() => addProductToCart(item)}> */}
                {/* <ShoppingCartIcon
                        color={checkProductInCart(item.id) ? 'primary' : ''} */}
                {/* /> */}
                {/* </IconButton> */}
            </CardActions>
        </Card>
    );
}
