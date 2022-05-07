import React from 'react';
import NextLink from 'next/link';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import Layout from '../components/Layout'
import db from '../utils/db';
import Product from '../models/Product';

const Home = (props) => {
  const {products} = props;

  return (
    <Layout>
      <Typography component="h2" variant="h2">
        Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item md={4} key={product.name}>
            <Card>
              <NextLink href={`/product/${product.slug}`} passHref>
                <CardActionArea>
                  <CardMedia component="img" image={product.image} title={product.name}></CardMedia>
                  <CardContent>
                    <Typography>{product.name}</Typography>
                  </CardContent>
                </CardActionArea>
              </NextLink>̦
              <CardActions>
                <Typography>${product.price}</Typography>
                <Button size='small' color='primary'>Add to cart</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}

export default Home;
