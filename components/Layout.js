import React, {useContext} from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { AppBar, Toolbar, Typography, Container, Link, Badge } from '@mui/material';
import useStyles from '../utils/styles';
import classes from '../styles/Layout.module.css';
import { Store } from '../utils/Store';

const Layout = (props) => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  return (
    < div className={classes.Layout} >
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
              <Link>
                {cart.cartItems.length > 0 ? (
                  <Badge
                    color="secondary"
                    badgeContent={cart.cartItems.length}
                  >
                    Cart
                  </Badge>
                ) : (
                  'Cart'
                )}
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
    </div >
  )
}

export default Layout;