import { Routes, Route, Navigate, Outlet, useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, lazy } from 'react';

// project imports
import Loadable from '@/ui-component/Loadable';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider, Box, Typography } from '@mui/material';

// routing
import ThemeRoutes from '@/routes/index.js';

// defaultTheme
import themes from 'themes';

// Theme Layouts imports
import NavigationScroll from '@/layout/NavigationScroll';
import HeaderLayout from '@/layout/MainLayout/Header/index.js';
import MainLayout from '@/layout/MainLayout/index';
import LayoutPage from '@/layout/ThemeLayouts';
import LoginLayout from '@/layout/ThemeLayouts/login';
import TopicsNavigation from '@/layout/ThemeLayouts/navigationLayouts/NavigationLayout';
import UploadAudioFileFormLayout from '@/layout/ThemeLayouts/AudioFileUpload';
import TextUploadFormLayout from '@/layout/ThemeLayouts/TextToImage';
import WebScrapingLayout from '@/layout/ThemeLayouts/WebScraping';

const Article = Loadable(lazy(() => import('@/views/pages/Article')));
const UtilsTypography = Loadable(lazy(() => import('@/views/utilities/Typography')));
const NavigationDashboard = Loadable(lazy(() => import('@/views/utilities/NavigationDashboard')));
const UtilsTablerIcons = Loadable(lazy(() => import('@/views/utilities/TablerIcons')));
const UtilsShadow = Loadable(lazy(() => import('@/views/utilities/Shadow')));
const TopicsNavigationMenu = Loadable(lazy(() => import('@/layout/ThemeLayouts/navigationLayouts/NavigationLayout')));
import Label from '@/layout/ThemeLayouts/LabelDemo';

function Image(props) {

    return (
        <>
            <article>
                <h2>
                    For.of, the function only deals with elements that are present in an array; for.forEach, on the other hand, only deals
                    with elements that are present in an array. The final option entails a fully explicit counting loop that is implemented
                    in all versions of JavaScript. Those who are familiar with syntax argue that for…in loops over an object’s properties.
                    As an Array in JavaScript is simply an object with numeric property names, you can theoretically loop over it. Map is
                    one of the functional programming techniques that is already included in other languages, such as Python and Haskell. It
                    is not recommended to loop through an Array with a for-in loop in JavaScript, but it is preferable to use a for loop. It
                    has been improved in addition to optimizing the array’s length. A set of improved Array methods can be found in Opera,
                    Safari, Firefox, and Chrome. When using do…while loops, the array elements can be accessed directly. The array and
                    elements are also more dynamic and controlled in this manner. Three components must be present in order for a
                    traditional for loop to function properly. The three components are separated from each other by a ; symbol. There is no
                    need to be concerned about loops in any of the browsers, including very old ones. All modern browsers, including
                    Internet Explorer 9 and later, support Array.prototype.forEach() in Array.prototype.forEach() in
                    Array.prototype.forEach() in Array.prototype.for Because this method does not behave as well as a traditional for loop
                    in all cases, it should be used with caution. Furthermore, utility libraries may have their own variation of the
                    variation. You can loop over an array in JavaScript in a variety of ways. There are three approaches to doing it: for,
                    while, and while. As you may be aware, functional programming has been making waves in the development world of late.
                    This makes it easier to write declarative code that is simpler to understand for you. JavaScript includes several
                    methods for loop through an array. When using the Array prototype, the traditional for() method is the fastest.
                    Underscore.js has a library for storing array and collection Image

                    <Typography>Page Under Construction</Typography>
                    <Typography>we are currently working on this feature and will launch soon!</Typography>
                    <Typography>site nearly ready</Typography>
                </h2>
            </article>
        </>
    );
}

import { List, ListItem, Stack } from '@mui/material';

function Sitemap() {
    const [type, setType] = React.useState('disc');
    return (
        <Stack >
            <h1> The Lord of the Rings: The Two Tower</h1>
            <h1> The Lord of the Rings: The Two Tower</h1>
            <h1> Site map</h1>
            <List sx={{ listStyleType: 'disc' }}>
                <ListItem>The Shawshank Redemption</ListItem>
                <ListItem nested>
                    <ListItem sx={{ display: 'list-item' }} >Star Wars
                        <ListItem sx={{ display: 'list-item', listStyleType: 'circle' }}>1
                            <List sx={{ display: 'list-item', listStyleType: 'square' }}>a</List>
                            <List sx={{ display: 'list-item', listStyleType: 'square' }}>b</List>
                        </ListItem>
                        <List sx={{ display: 'list-item', listStyleType: 'circle' }}>2</List>
                    </ListItem>

                    <ListItem sx={{ display: 'list-item' }}>Episode I – The Phantom Menace
                        <List sx={{ display: 'list-item', listStyleType: 'circle' }}>1</List>
                        <List sx={{ display: 'list-item', listStyleType: 'circle' }}>2</List>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Episode II – Attack of the Clones
                        <ListItem sx={{ display: 'list-item', listStyleType: 'circle' }}>1
                            <List sx={{ display: 'list-item', listStyleType: 'square' }}>a</List>
                            <List sx={{ display: 'list-item', listStyleType: 'square' }}>b</List>
                        </ListItem>
                        <List sx={{ display: 'list-item', listStyleType: 'circle' }}>2</List>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}> Episode III – Revenge of the Sith
                        <List sx={{ display: 'list-item', listStyleType: 'circle' }}>1</List>
                        <List sx={{ display: 'list-item', listStyleType: 'circle' }}>2</List>
                    </ListItem>

                </ListItem>
                <ListItem>The Lord of the Rings: The Two Towers</ListItem>
            </List>

        </Stack>
    );
}
// ==============================|| APP ||============================== //

function App(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    let location = useLocation();
    const customization = useSelector((state) => state.customization);
    const theme = createTheme(customization);
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>{/* <ThemeRoutes /> */}</NavigationScroll>
                <Box>
                    <HeaderLayout />
                    <Outlet />
                </Box>

                <Routes>
                    <Route path="/" element={<LayoutPage params={'/'} />} />
                    <Route path={'products'} element={<LayoutPage params={'/products'} />}></Route>
                    {/* <Route path="services" element={ <Services/>} >
                        <Route path="text" element={ <Text /> } />
                        <Route path="image" element={ <Image /> } />
                    </Route> */}

                    <Route path="explore" element={<MainLayout args={'This is props'} location={location} />}>
                        <Route index element={<NavigationDashboard location={location} />} />
                        {isAuthenticated && (
                            <Route
                                path=":category/:subcategory"
                                element={
                                    <TopicsNavigationMenu
                                        params={location.pathname}
                                        {...props}
                                        customization={customization}
                                        location={location.pathname}
                                    />
                                }
                            />
                        )}
                        <Route
                            path=":category/:subcategory/:topic"
                            element={<Article {...props} customization={customization} location={location} />}
                        />
                        <Route path="util-typography" element={<UtilsTypography location={location} />} />
                        <Route path="util-color" element={<UtilsTablerIcons />} />
                        <Route path="util-shadow" element={<UtilsShadow />} />
                    </Route>

                    <Route path="contact" element={<LayoutPage params={'/contact'} />}></Route>
                    <Route path="pricing" element={<LayoutPage params={'/pricing'} />}></Route>
                    <Route path="sitemap" element={<Sitemap />}></Route>
                    <Route path="login" element={<LoginLayout params={'/login'} />}></Route>
                    <Route path="services/audio-to-text" element={<UploadAudioFileFormLayout />} />

                    <Route path="services/text-to-image" element={<TextUploadFormLayout />} />
                    <Route path="services/image-to-text" element={<Image />} />
                    <Route path="services/web-scraping" element={<WebScrapingLayout />} />

                    <Route path="*" element={<Navigate to="/" replace={true} />} />
                </Routes>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;
