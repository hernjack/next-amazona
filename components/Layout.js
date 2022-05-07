import React, { useContext, useState } from 'react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  AppBar, Toolbar, Typography, Container, Link, Badge, Button, Menu, MenuItem,
} from '@mui/material';
import useStyles from '../utils/styles';
import classes from '../styles/Layout.module.css';
import { Store } from '../utils/Store';
import { useRouter } from 'next/router';

const Layout = (props) => {
  const router = useRouter();
  const { state, dispatch, userInfo } = useContext(Store);
  const { cart } = state;

  const [anchorEl, setAnchorEl] = useState(null);
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const loginMenuCloseHandler = () => {
    setAnchorEl(null);
  };

  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: 'USER_LOGOUT' });
    // Cookies.remove('userInfo');
    // Cookies.remove('cartItems');
    router.push('/');
  };
  return (
    < div className={classes.Layout} >
      <Head>
        <title>Tommy Hilfiger Clone</title>
        <title>{props.title ? `${props.title} - Next Amazona` : 'Next Amazona'}</title>
        {props.description && <meta name="description" content={props.description}></meta>}
      </Head>
      <AppBar position='static' sx={useStyles.navbar}>
        <Toolbar>
          <NextLink  href="/" passHref>
            <Link className={classes['main-link']} >
              <Typography>Tommy Hilfiger</Typography>
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
            {userInfo ? (
              <>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={loginClickHandler}
                  className={classes.navbarButton}
                >
                  {userInfo.name}
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={loginMenuCloseHandler}
                >
                  <MenuItem onClick={loginMenuCloseHandler}>Profile</MenuItem>
                  <MenuItem onClick={loginMenuCloseHandler}>
                    My account
                  </MenuItem>
                  <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            )}

          </div>
        </Toolbar>
      </AppBar>
      <Container sx={useStyles.main}>
        {props.children}
      </Container>
      <footer>
        <Typography>All rights reserved. Tommy Hilfiger Clone. Jayson Hernandez. 2022</Typography>
      </footer>
    </div >
  )
}

export default Layout;