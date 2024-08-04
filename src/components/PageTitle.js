import React from 'react';
import { Typography } from '@mui/material';

function PageTitle({ title }) {
  return (
    <Typography variant="h3" component="h1" gutterBottom style={{ margin: '2rem 0' }}>
      {title}
    </Typography>
  );
}

export default PageTitle;
