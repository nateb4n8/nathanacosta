import { CardHeader, Hidden, makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';

const useStyles = makeStyles(() => ({
  card: {
    width: '100%',
  },
  cardContent: {
    padding: 0,
  },
  avatar: {
    width: 128,
    height: 128,
  },
}));

export default function Projects() {
  const classes = useStyles();
  const { projects } = window.data;

  return (
    <Card className={classes.card}>
      <CardHeader title="Projects" />

      <CardContent className={classes.cardContent}>
        <List disablePadding component="nav">
          {projects.map((project) => (
            <ListItem button component="a" href={project.link} key={project.title}>
              <Hidden smUp>
                <ListItemIcon>
                  <Avatar src={project.image} alt={`${project.title} screenshot`} />
                </ListItemIcon>
              </Hidden>

              <Hidden xsDown>
                <ListItemIcon>
                  <Avatar src={project.image} alt={`${project.title} screenshot`} />
                </ListItemIcon>
              </Hidden>

              <ListItemText
                primary={project.title}
                secondary={
                  <span>
                    {project.desc}
                    <br />
                    <small>{project.tech}</small>
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
