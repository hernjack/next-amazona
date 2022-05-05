import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { AppBar, Toolbar, Typography, Container, Link } from '@mui/material';
import useStyles from '../utils/styles';
import classes from '../styles/Layout.module.css';

const Layout = (props) => (
  <div className={classes.Layout}>
    <Head>
      <title>Amazona Clone</title>
      <title>{props.title ? `${props.title} - Next Amazona` : 'Next Amazona'}</title>
      {props.description && <meta name="description" content={props.description}></meta>}
    </Head>
    <AppBar position='static' sx={useStyles.navbar}>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link >
            <Typography className={classes['main-link']}>Amazona</Typography>
          </Link>
        </NextLink>
        <div className={classes.grow}></div>
        <div className={classes.links}>
          <NextLink href="/cart" passHref>
            <Link >
              <Typography>Cart</Typography>
            </Link>
          </NextLink>
          <NextLink href="/login" passHref>
            <Link >
              <Typography>Login</Typography>
            </Link>
          </NextLink>
        </div>
      </Toolbar>
    </AppBar>
    <Container sx={useStyles.main}>
      {props.children}
    </Container>
    <footer>
      <Typography>All rights reserved. Amazona Clone. Jayson Hernandez. 2022</Typography>
    </footer>
  </div>
)

export default Layout;