import React from 'react';
import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet';

function PageTitle({ title, description }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Typography variant="h3" component="h1" gutterBottom style={{ marginBottom: '2rem' }}>
        {title}
      </Typography>
    </>
  );
}

export default PageTitle;
