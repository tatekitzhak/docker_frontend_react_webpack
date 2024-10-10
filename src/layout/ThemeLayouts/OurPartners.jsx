import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useSelector, useDispatch } from 'react-redux';
import { addPerson, fetchPersonThunk } from '@/store/features/slices/topics/secondTopicsSlice';

// import { addToCart } from "../store/features/cartSlice";

import withHeaderFooterLayout from '@/hoc/withHeaderFooterLayout';

const contact_content = {
    headline: 'Our Partners',
    subheadline: 'Strategic Technology Partners',
    content: `We work to create innovative, 
    world-first experiences for Accelerating technology
    Accelerating technology through world-first experience`
};

function OurPartners(props) {
    const dispatch = useDispatch();
    let usersData = '';
    // const usersDataStatus = useSelector(state => state.usersSlice.status)

    useEffect(() => {
        dispatch(fetchPersonThunk());
        console.log('usersData:', usersData);
    }, [dispatch]);
    return (
        <>
            {' '}
            {((usersData = useSelector((state) => state.person)), console.log(usersData))}
            <Container maxWidth="md" component="main">
            <Typography component="h2" variant="h3" color="text.primary">
                                        {props.children[1]}
                                    </Typography>
                <Grid container spacing={5} alignItems="flex-end">
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardHeader
                                title={'Our Partners'}
                                subheader={'contact us OurPartners'}
                                titleTypographyProps={{ align: 'center' }}
                                subheaderTypographyProps={{
                                    align: 'center'
                                }}
                                sx={{
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[700]
                                }}
                            />
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'baseline',
                                        mb: 2
                                    }}
                                >
                                    <Typography component="h2" variant="h3" color="text.primary">
                                        AWS
                                    </Typography>
                                </Box>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardHeader
                                title={'Our Partners'}
                                subheader={'contact us OurPartners'}
                                titleTypographyProps={{ align: 'center' }}
                                subheaderTypographyProps={{
                                    align: 'center'
                                }}
                                sx={{
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[700]
                                }}
                            />
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'baseline',
                                        mb: 2
                                    }}
                                >
                                    <Typography component="h2" variant="h3" color="text.primary">
                                    OpenAI
                                    </Typography>
                                </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

const OurPartnersLayout = withHeaderFooterLayout(OurPartners, contact_content);

export default OurPartnersLayout;
