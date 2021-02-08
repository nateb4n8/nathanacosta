import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import Container from './components/Container';
import Education from './components/Education';
import Experience from './components/Experience';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Proficiencies from './components/Proficiencies';
import Projects from './components/Projects';
import Social from './components/Social';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ffb74d',
    },
  },
});

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />

      <Social />

      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Introduction />
          </Grid>
          <Grid item xs={12}>
            <Proficiencies />
          </Grid>
          <Grid item xs={12}>
            <Projects />
          </Grid>
          <Grid item xs={12} md={6}>
            <Experience />
          </Grid>
          <Grid item xs={12} md={6}>
            <Education />
          </Grid>
        </Grid>
      </Container>
    </MuiThemeProvider>
  );
}
