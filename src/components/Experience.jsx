import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';

export default function Experience() {
  const { experience } = window.data;

  return (
    <Card style={{ width: '100%' }}>
      <CardHeader title="Experience" />

      <CardContent style={{ padding: 0 }}>
        <List disablePadding component="nav">
          {experience.map((xp) => (
            <ListItem button component="a" href={xp.href} key={xp.title + xp.employer}>
              <ListItemIcon>
                <Avatar alt={`${xp.employer} logo`} src={xp.image} />
              </ListItemIcon>

              <ListItemText
                primary={xp.title}
                secondary={
                  <span>
                    {xp.employer}
                    <br />
                    <small>{xp.duration}</small>
                  </span>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>

      <div />
    </Card>
  );
}
