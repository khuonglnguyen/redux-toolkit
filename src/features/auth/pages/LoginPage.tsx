import { Paper, makeStyles, Typography, Box, Button, CircularProgress } from '@material-ui/core';
import { useAppSelector } from 'app/hooks';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../authSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },

  box: {
    padding: theme.spacing(3),
  },
}));

export default function LoginPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLogging = useAppSelector((state) => state.auth.logging);

  const handleLoginClick = () => {
    // FAKE LOGIN
    dispatch(
      authActions.login({
        username: '',
        password: '',
      })
    );
  };

  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>

        <Box mt={4}>
          <Button fullWidth variant="contained" color="primary" onClick={handleLoginClick}>
            {isLogging && <CircularProgress size={20} color="secondary"></CircularProgress>}
            Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
