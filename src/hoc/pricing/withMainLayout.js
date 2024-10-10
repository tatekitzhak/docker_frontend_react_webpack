import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

import Header from '@/components/pricing/header';
import Footer from '@/components/pricing/footer';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

function withPricingLayout(ElementLayout, layout_data) {
    function EnhancElement(props) {
        
        const [info, setInfo] = useState([]);

        useEffect(() => {
            setInfo(layout_data);
          }, []);

        return (
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
                <CssBaseline />

                <Header />

                  {/* headline */}
                <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                    <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    >
                    {info.headline}
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" component="p">
                    { info.content } 
                    </Typography>
                </Container>
                {/* End headline */}

                {/* Body */}
                <ElementLayout>
                    <p>ppp</p>
                </ElementLayout>
                
                {/* Footer */}
                <Footer />
                {/* End footer */}
            </ThemeProvider>
        );
    }
    return EnhancElement;
}

export default withPricingLayout;