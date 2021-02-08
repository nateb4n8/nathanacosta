import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React from 'react';

export default function Introduction() {
  return (
    <Card style={{ width: '100%' }}>
      <CardContent>
        <Typography variant="body1" align="left">
          {window.data.introduction}
        </Typography>
      </CardContent>
      <div />
    </Card>
  );
}
