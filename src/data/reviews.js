const reviewsData = [
    {
      id: 1,
      productId: 1,
      username: 'John Doe',
      comment: 'Great product! Highly recommend it.',
      rating: 5
    },
    {
      id: 2,
      productId: 1,
      username: 'Jane Smith',
      comment: 'Good value for the price.',
      rating: 4
    },
    {
      id: 3,
      productId: 2,
      username: 'Mike Johnson',
      comment: 'Decent phone but a bit overpriced.',
      rating: 3
    }
  ];
  
  export const getReviewsByProductId = (productId) => {
    return reviewsData.filter(review => review.productId === productId);
  };
  
  export const addReview = (newReview) => {
    reviewsData.push(newReview);
  };
  