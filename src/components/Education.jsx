import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';

export default function Education() {
  const { education } = window.data;

  return (
    <Card style={{ width: '100%' }}>
      <CardHeader title="Education" />

      <CardContent style={{ padding: 0 }}>
        <List disablePadding component="nav">
          {education.map((edu) => (
            <ListItem button component="a" href={edu.href} key={edu.cert}>
              <ListItemIcon>
                <Avatar alt={`${edu.educator} logo`} src={edu.image} />
              </ListItemIcon>

              <ListItemText
                primary={edu.educator}
                secondary={
                  <span>
                    {edu.cert}
                    <br />
                    <small>{edu.duration}</small>
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
