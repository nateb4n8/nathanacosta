import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Container from './Container';

export default function Social() {
  const socials = [
    {
      href: window.data.social.githubHref,
      label: 'Github',
      icon: faGithubAlt,
    },
    {
      href: window.data.social.linkedin,
      label: 'LinkedIn',
      icon: faLinkedinIn,
    },
    {
      href: `mailto:${window.data.social.email}`,
      label: 'Email',
      icon: faEnvelope,
    },
  ];

  return (
    <Container>
      <Grid container justify="center" spacing={3}>
        {socials.map((s) => (
          <Grid item key={s.href}>
            <Fab href={s.href} color="primary" aria-label={`${s.label} Button`}>
              <FontAwesomeIcon icon={s.icon} size="2x" />
            </Fab>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
