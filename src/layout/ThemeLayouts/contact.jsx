import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import EmailIcon from '@mui/icons-material/Email';


import withHeaderFooterLayout from '@/hoc/withHeaderFooterLayout';

const contact_content = {
    icon: () => <Avatar sx={{ bgcolor: 'Orange', height: '70px', width: '70px' }}>
        <EmailIcon />
    </Avatar>,
    headline: 'We Want to Hear From You!',
    content: "Have a question, comment or concern? Send a message to: info@askmediatech.com"
};

function Contact() {

    useEffect(() => {
    }, []);
    return (
        <>
            <Container maxWidth="md" component="main">
                <Grid 
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '10vh' }}
                >
                    <Grid item xs={12} sm={6} md={4}>
                        <Avatar sx={{ bgcolor: 'Orange', height: '70px', width: '70px' }}>
                            <EmailIcon />
                        </Avatar>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

const ContactLayout = withHeaderFooterLayout(Contact, contact_content);

export default ContactLayout;
