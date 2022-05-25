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
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Pulse from 'react-reveal/Pulse';

// import { useCart } from '../../contexts/CartContextProvider';

export default function ProductCard({ item }) {
    const navigate = useNavigate();

    const { deleteProduct, like } = useProducts();
    // const { addProductToCart, checkProductInCart } = useCart()

    return (
        <Pulse>
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

                    <Typography gutterBottom variant="h5" component="div" sx={{
                        color: 'blue', fontWeight: '700',
                    }}>
                        {item.speciality}
                    </Typography>

                    <Typography gutterBottom variant="h5" component="div" sx={{
                        color: 'blue', fontWeight: '700',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '1',
                        WebkitBoxOrient: 'vertical',
                    }} >
                        {item.ranks}
                    </Typography>


                </CardContent>
                <CardActions>
                    <IconButton>
                        <DeleteOutlineIcon size="small" onClick={() => deleteProduct(item.id)} />
                    </IconButton>


                    <IconButton size="small" onClick={() => navigate(`/edit/${item.id}`)}>
                        <EditIcon />
                    </IconButton>

                    <IconButton onClick={() => like(item.id)}>
                        <FavoriteBorderIcon />
                    </IconButton>
                    <Typography>{item.likes}</Typography>


                </CardActions>
            </Card>
        </Pulse>
    );
}
