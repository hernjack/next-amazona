import React from 'react';
import Head from 'next/head'
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import useStyles from '../utils/styles';
import classes from './Layout.module.css';

const Layout = (props) => (
  <div className={classes.Layout}>
    <Head>
      <title>Amazona Clone</title>
    </Head>
    <AppBar position='static' sx={useStyles.navbar}>
      <Toolbar>
        <Typography>Amazona</Typography>
      </Toolbar>
    </AppBar>
    <Container sx={useStyles.main}>
      {props.children}
    </Container>
    <footer sx={useStyles.footer}>
      <Typography>All rights reserved. Amazona Clone. Jayson Hernandez. 2022</Typography>
    </footer>
  </div>
)


export default Layout;