import Grid from '@material-ui/core/Grid';
import React from 'react';
import PropTypes from 'prop-types';

export default function Container(props) {
  const { children } = props;
  return (
    <div style={{ padding: 16 }}>
      <Grid container justify="center" spacing={4}>
        <Grid container item justify="center" xs={12} md={10} lg={8} xl={6}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
