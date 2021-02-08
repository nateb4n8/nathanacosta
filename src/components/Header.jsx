import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 200,
    height: 200,
    backgroundColor: '#eaeaea',
    borderStyle: 'solid',
    borderColor: '#eaeaea',
    borderWidth: 10,
    marginTop: '1rem',
  },
  banner: {
    position: 'absolute',
    zIndex: -1,
    backgroundColor: theme.palette.primary.main,
    width: '100%',
  },
  titles: {
    color: '#fff',
    paddingTop: '1rem',
  },
}));

export default function Header() {
  const classes = useStyles();
  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    setHeaderHeight(document.getElementById('header').clientHeight);
  }, []);
  return (
    <Grid container direction="column" alignItems="center" id="header">
      {headerHeight ? (
        <div className={classes.banner} style={{ height: headerHeight - 105 }} />
      ) : null}

      <Grid item xs={12}>
        <div className={classes.titles}>
          <Typography align="center" variant="h4" color="inherit">
            Nathan Acosta
          </Typography>
          <Typography align="center" variant="h5" color="inherit">
            Software Engineer
          </Typography>
        </div>
      </Grid>

      <Grid item xs={12}>
        <Avatar
          id="nathan-avatar"
          alt="Nathan Acosta Avatar"
          src="/images/nathan.jpg"
          className={classes.avatar}
        />
      </Grid>
    </Grid>
  );
}
