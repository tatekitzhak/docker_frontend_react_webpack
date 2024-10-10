import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

// material-ui

import Grid from '@mui/system/Unstable_Grid';

import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Typography, useMediaQuery } from '@mui/material';
import { Avatar, ButtonBase } from '@mui/material';

// project imports
import Breadcrumbs from '@/ui-component/extended/Breadcrumbs';
import HeaderLayout from './Header';
import Sidebar from './Sidebar';
import Feedback from '../Feedback';
import navigation from '@/menu-items/index.js';
import { drawerWidth } from 'store/constant';

import { set_menu } from '@/store/features/customizationCreateSlice';

import Footer from '@/layout/ThemeLayouts/footer';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// assets
import { IconChevronRight, IconMenu2 } from '@tabler/icons';

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    ...theme.typography.mainContent,
    ...(!open && {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        [theme.breakpoints.up('md')]: {
            marginLeft: -(drawerWidth - 20),
            width: `calc(100% - ${0}px)`
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px',
            width: `calc(100% - ${0}px)`,
            padding: '16px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
            width: `calc(100% - ${0}px)`,
            padding: '16px',
            marginRight: '10px'
        }
    }),
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0,
        marginTop: '85px',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: `calc(100%)`,
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px',
            paddingTop: '20px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px'
        }
    })
}));

const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    border: '1px solid',
    borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
    padding: theme.spacing(1),
    borderRadius: '4px',
    textAlign: 'center'
}));

function Topics({ leftDrawerOpened }) {
    const theme = useTheme();
    return (
        <>
            <Main theme={theme} open={leftDrawerOpened}>
                <Typography variant="h5" component="h2" sx={{ textAlign: 'center', paddingBottom: '20px' }}>
                    Explore Things
                </Typography>
                {/* breadcrumb */}
                <Breadcrumbs separator={IconChevronRight} navigation={navigation()} icon title rightAlign />

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
                        {Array.from(Array(6)).map((_, index) => (
                            <Grid xs={2} sm={4} key={index}>
                                <Item sx={{ padding: '0px' }}>
                                    {index + 1}quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal
                                </Item>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Includes and Loading navigation links */}
                <Outlet context={{ hello: 'world' }} />

                <Footer params={'Footer Page'} />
            </Main>
        </>
    );
}

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = (props) => {
    // console.log('MainLayout props:', props);
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));

    // Handle left drawer
    const leftDrawerOpened = useSelector((state) => state.customization.opened);
    const dispatch = useDispatch();
    const handleLeftDrawerToggle = () => {
        //dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
        dispatch(set_menu(!leftDrawerOpened));
    };

    useEffect(() => {
        // dispatch({ type: SET_MENU, opened: !matchDownMd });
        dispatch(set_menu(!matchDownMd));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matchDownMd]);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {/* header */}
            <Box
                position="fixed"
                color="#fff"
                elevation={0}
                sx={{
                    bgcolor: '#e0e0e0',
                    transition: leftDrawerOpened ? theme.transitions.create('width') : 'none',
                    borderColor: 'grey.500',
                    marginTop: '68px',
                    width: '260px'
                }}
            >
                {/* <HeaderLayout handleLeftDrawerToggle={handleLeftDrawerToggle} /> */}

                <IconButton
                    variant="rounded"
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    sx={{
                        mr: 2,
                        backgroundColor: '#FD7F51',
                        borderRadius: '7px',
                        '&:hover': {
                            background: '#fff',
                            color: 'red',
                            border: 1,
                            borderColor: '#FD7F51'
                        }
                    }}
                    onClick={handleLeftDrawerToggle}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: 'inline', color: '#000' }}>
                    {' Services '}
                </Typography>
            </Box>

            {/* drawer */}
            <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />

            {/* main content */}
            <Topics leftDrawerOpened />
            {/* Feedback settings */}
            <Feedback />
        </Box>
    );
};

export default MainLayout;
