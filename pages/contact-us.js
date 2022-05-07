import {
  List,
  ListItem,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import React from 'react';
import Layout from '../components/Layout';

export default function Login() {
  return (
    <Layout title="Login">
      <form className="form">
        <Typography component="h2" variant="h2">
          Contact us
        </Typography>
        <List>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="name"
              label="Name"
              inputProps={{ type: 'name' }}
            ></TextField>
          </ListItem>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="email"
              label="Email"
              inputProps={{ type: 'email' }}
            ></TextField>
          </ListItem>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="comments"
              label="Comments"
              inputProps={{ type: 'comments' }}
              multiline
              minRows={10}
            ></TextField>
          </ListItem>
          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Send
            </Button>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
}