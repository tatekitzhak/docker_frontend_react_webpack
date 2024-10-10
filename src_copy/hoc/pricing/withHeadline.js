import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import GlobalStyles from '@mui/material/GlobalStyles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function withHeadline(Element) {
    function EnhancElement(props) {
        return (
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
                <CssBaseline />

                <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
          <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
          >
              Pricing
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" component="p">
              Quickly build an effective pricing table for your potential customers with
              this layout. It&apos;s built with default MUI components with little
              customization.
          </Typography>
      </Container>
            </ThemeProvider>
        );
    }
    return EnhancElement
}