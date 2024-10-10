import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import { Box, Grid } from '@mui/material';

// import Header from '@/components/pricing/header';
import Footer from '@/layout/ThemeLayouts/footer';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

// Header Footer Layout
function withHeaderFooterLayout(ElementLayout, layout_data, ...props) {

    function EnhancElement(props) {
        const [info, setInfo] = useState([]);

        useEffect(() => {
            setInfo(layout_data);
        }, []);

        return (
            <ThemeProvider theme={defaultTheme} >
                <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
                <CssBaseline />
                <AppBar
                    position="static"
                    color="default"
                    elevation={0}
                    sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
                >
                    <Toolbar sx={{ flexWrap: 'wrap' }}> </Toolbar>
                </AppBar>

                {/* <Header /> */}
                <Grid container component="main"
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ minHeight: '65vh' }} >

                    {/* headline */}
                    <Grid
                        container item xs={5}
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        maxWidth="sm" 
                        sx={{ pt: 8, pb: 6, height: '85vh' }}>
                       
                        <Typography component="h1" variant="h4" align="center" color="text.primary" gutterBottom>
                            {info.headline}
                        </Typography>
                        <Typography component="section" variant="h6" align="center" color="text.secondary">
                            {info.content}
                        </Typography>
                       
                       
                    </Grid>
                    {/* End headline */}

                    {/* Body */}
                    <ElementLayout>

                        <p>{info.subheadline}</p>
                    </ElementLayout>

                    {/* Footer */}
                    <Footer />
                </Grid>
            </ThemeProvider>
        );
    }
    return EnhancElement;
}

export default withHeaderFooterLayout;
