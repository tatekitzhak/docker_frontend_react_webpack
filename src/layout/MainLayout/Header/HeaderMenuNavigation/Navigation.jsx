import React, { useState, useEffect } from 'react';
import { NavLink, Link, matchPath, useLocation, Outlet, useParams } from 'react-router-dom';
import {
    Avatar,
    IconButton,
    ListItemText,
    ListItemIcon,
    Box,
    Grid,
    Menu,
    MenuItem,
    Divider,
    List,
    Typography,
    Button,
    Drawer,
    useMediaQuery,
    ListItem,
    ListItemButton
} from '@mui/material';
import { styled, alpha, useTheme } from '@mui/material/styles';

import MenuIcon from '@mui/icons-material/Menu';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { IconChevronDown, IconChevronUp } from '@tabler/icons';

import LogoSection from '@/layout/MainLayout/LogoSection/index';
import { navbar_items, services } from '@/menu-items/navbar_menu_items';
import { service_items } from '@/menu-items/service_items';

// https://codesandbox.io/s/laughing-cori-3iuw8h?file=/demo.js:306-315
function useRouteMatch(patterns) {
    const { pathname } = useLocation();

    for (let i = 0; i < patterns.length; i += 1) {
        const pattern = patterns[i];
        const possibleMatch = matchPath(pattern, pathname);
        if (possibleMatch !== null) {
            return possibleMatch;
        }
    }

    return null;
}

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0'
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5)
            },
            '&:active': {
                backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
            }
        }
    }
}));

export default function HeaderMenu() {
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });
    const [selectedTab, setSelectedTab] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    const [breakpointsStatus, SetBreakpointsStatus] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open1 = Boolean(anchorEl);
    const [open, setOpen] = useState(false);
    const [serviceItems, setServiceItems] = useState([]);
    const theme = useTheme();
    const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    useEffect(() => {
        setMenuItems(navbar_items);

        SetBreakpointsStatus(matchesXs);
    }, [matchesXs]);

    useEffect(() => {
        setServiceItems(service_items);
    }, []);

    // Mobile BreakpointsStatus
    function mobileMenus(anchor) {
        return (
            <Box
                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}

            >
                <List>
                    <ListItemIcon>
                        <LogoSection />
                    </ListItemIcon>
                    {
                        menuItems.map(function (text, index) {
                            return (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        {/* <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon> */}

                                        <NavLink
                                            style={{ color: 'inherit', textDecoration: 'inherit' }}
                                            to={`${text.toLowerCase()}`}
                                            state={`From ${text} Page`}
                                        >
                                            <ListItemText primary={text} />
                                        </NavLink>
                                    </ListItemButton>
                                </ListItem>
                            )
                        })
                    }
                </List>
                <Divider />

                <List>
                    {
                        services.map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>

                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>

                <IconButton>
                    {/* {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />} */}
                    <ExpandLessIcon />
                </IconButton>
            </Box>
        );
    }
    const drawer = (anchorType) => (
        <Drawer
            PaperProps={{
                sx: { width: "80%" },
            }}
            anchor={anchorType}
            open={state[anchorType]}
            onClose={toggleDrawer(anchorType, false)} >

            {mobileMenus(anchorType)}

        </Drawer>
    );

    const iconUpDownHandleClick = (event, index) => {
        console.log('iconUpDownHandleClick:', index, setSelectedTab(index))
        if (index == 1) {
            setAnchorEl(event.currentTarget);
            setOpen(!open);
        }
    };

    const handleCloseMenuItems = () => {
        setAnchorEl(null);
    };

    const IconUpDownStatus = ({ open }) => {
        // console.log('IconDown:', open);
        return open ? (
            <IconChevronUp stroke={1.5} size="1rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
        ) : (
                <IconChevronDown stroke={1.5} size="1rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
            );
    };
    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    const routeMatch = useRouteMatch(menuItems);
    const currentTab = routeMatch ?.pattern ?.path;
    // console.log('currentTab:', currentTab === undefined ? '/' : currentTab)
    return (
        <>
            {
                // Large screen BreakpointsStatus //tabValue, setTabValue
                !breakpointsStatus ? (
                    <Tabs
                        value={selectedTab}
                        indicatorColor="primary"
                        textColor="inherit"
                        variant="scrollable"
                        scrollButtons="auto"
                        TabIndicatorProps={{
                            style: {
                                display: 'none',
                            }
                        }}
                    >
                        {menuItems.map(function (anchor, index) {
                            return anchor == '/' ? (
                                console.log('anchor:', index)
                            ) : (
                                    <Tab
                                        key={anchor}
                                        label={anchor}
                                        value={selectedTab}
                                        id={index === 1 ? 'demo-customized-button' : 'demo-customized-button123'}
                                        aria-controls={index === 1 ? 'demo-customized-menu' : undefined}
                                        aria-haspopup={index === 1 ? 'true' : 'false'}
                                        aria-expanded={index === 1 ? 'true' : undefined}
                                        variant="contained"
                                        disableelevation="true"
                                        onClick={(event) => iconUpDownHandleClick(event, index)}
                                        icon={index === 1 ? <IconUpDownStatus open={open} /> : null}
                                        iconPosition="end"
                                        to={anchor.toLowerCase() == 'services' ? '' : anchor.toLowerCase()}
                                        component={Link}
                                    // {...a11yProps(index)}
                                    ></Tab>
                                );
                            // if(anchor == '/')
                            //     console.log('anchor:', index)
                            // else
                            //     return (

                            //         <Tab key={anchor} label={anchor}  to={`${anchor.toLowerCase()}`} component={Link}>
                            //         </Tab>
                            //     )
                        })}
                    </Tabs>
                ) : (
                        <Box >

                            {drawer('top')}
                            <IconButton size="large" edge="start" aria-label="menu" onClick={toggleDrawer('top', true)}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    )
            }

            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button'
                }}
                anchorEl={anchorEl}
                open={open1}
                onClose={handleCloseMenuItems}
            >
                {/* <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to={`/services/audio-to-text`} state={`From Page`}>
                    <MenuItem onClick={handleCloseMenuItems} disableRipple>
                        <Typography component="div">
                            <Box sx={{ fontSize: 16 }}> Convert an Audio to Text </Box>
                            <Box sx={{ fontSize: 12 }}> Convert your audio and video files to text with AI. </Box>
                        </Typography>
                    </MenuItem>
                </NavLink>
                <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to={`/services/text-to-image`} state={`From Page`}>
                    <MenuItem onClick={handleCloseMenuItems} disableRipple>
                        <Typography component="div">
                            <Box sx={{ fontSize: 16 }}>Text to Image</Box>
                            <Box sx={{ fontSize: 12 }}>AI Image Generator</Box>
                        </Typography>
                    </MenuItem>
                </NavLink>
                <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to={`/services/image-to-text`} state={`From Page`}>
                    <MenuItem onClick={handleCloseMenuItems} disableRipple>
                        <Typography component="div">
                            <Box sx={{ fontSize: 16 }}>Image to Text</Box>
                            <Box sx={{ fontSize: 12 }}>Default</Box>
                        </Typography>
                    </MenuItem>
                </NavLink> */}
                {serviceItems &&
                    serviceItems.map((item, index) => (
                        <NavLink key={index} style={{ color: 'inherit', textDecoration: 'inherit' }} to={`/services/${item.link}`} state={`From Page`}>
                            <MenuItem onClick={handleCloseMenuItems} disableRipple>
                                <Typography component="div">
                                    <Box sx={{ fontSize: 13 }}>{item.title}</Box>
                                    <Box sx={{ fontSize: 11 }}>{item.description}</Box>
                                </Typography>
                            </MenuItem>
                        </NavLink>

                    ))
                }
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleCloseMenuItems} disableRipple>
                    Features & more
                </MenuItem>
            </StyledMenu>
        </>
    );
}
