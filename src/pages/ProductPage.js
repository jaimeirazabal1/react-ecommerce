import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, CardContent, CardMedia, Button, Snackbar, Typography, Grid, TextField, Rating } from '@mui/material';
import { products } from '../data/products';
import { getReviewsByProductId, addReview } from '../data/reviews';
import { CartContext } from '../context/CartContext';
import PageTitle from '../components/PageTitle';

function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [reviews, setReviews] = useState(getReviewsByProductId(product.id));
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleAddToCart = () => {
    addToCart(product);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleReviewSubmit = () => {
    const newReview = {
      id: reviews.length + 1,
      productId: product.id,
      username,
      comment,
      rating
    };
    addReview(newReview);
    setReviews(getReviewsByProductId(product.id));
    setUsername('');
    setComment('');
    setRating(0);
  };

  const recommendedProducts = products.filter(p => p.category === product.category && p.id !== product.id);

  return (
    <Container style={{ marginTop: '2rem' }}>
      <PageTitle title={product.name} description={`Buy ${product.name} at TechStore. ${product.description}`} />
      <Card>
        <CardMedia
          component="img"
          alt={product.name}
          height="300"
          image={product.image}
        />
        <CardContent>
          <Typography variant="body1" component="p">
            {product.description}
          </Typography>
          <Typography variant="h6" component="p">
            ${product.price}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </CardContent>
      </Card>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Product added to cart"
        action={
          <Button color="secondary" size="small" onClick={() => window.location.href = '/cart'}>
            View Cart
          </Button>
        }
      />
      <Typography variant="h4" component="h2" style={{ marginTop: '2rem' }}>
        Reviews
      </Typography>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <Card key={review.id} style={{ marginBottom: '1rem' }}>
            <CardContent>
              <Typography variant="h6">{review.username}</Typography>
              <Typography variant="body2">{review.comment}</Typography>
              <Rating value={review.rating} readOnly />
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="body2">No reviews yet.</Typography>
      )}
      <Typography variant="h5" component="h3" style={{ marginTop: '2rem' }}>
        Leave a Review
      </Typography>
      <TextField
        label="Username"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Comment"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Rating
        value={rating}
        onChange={(event, newValue) => setRating(newValue)}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: '1rem' }}
        onClick={handleReviewSubmit}
      >
        Submit Review
      </Button>
      <Typography variant="h4" component="h2" style={{ marginTop: '2rem' }}>
        You May Also Like
      </Typography>
      <Grid container spacing={4}>
        {recommendedProducts.map(recommendedProduct => (
          <Grid item key={recommendedProduct.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt={recommendedProduct.name}
                height="140"
                image={recommendedProduct.image}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {recommendedProduct.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {recommendedProduct.description}
                </Typography>
                <Typography variant="h6" component="p">
                  ${recommendedProduct.price}
                </Typography>
                <Button variant="contained" color="primary" onClick={() => window.location.href = `/product/${recommendedProduct.id}`}>
                  View Product
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductPage;
