import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';

export default function Proficiences() {
  const { proficiencies } = window.data;
  return (
    <Card style={{ width: '100%' }}>
      <CardHeader title="Proficiencies" />
      <CardContent>
        <Grid container spacing={2}>
          {proficiencies.map((profSet) => (
            <Grid item xs={12} sm={4} key={profSet.toString()}>
              {profSet.map((prof) => (
                <Typography key={prof}>{prof}</Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </CardContent>
      <div />
    </Card>
  );
}
