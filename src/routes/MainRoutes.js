import { lazy } from 'react';

// project imports
import MainLayout from '@/layout/MainLayout/index';
import Loadable from 'ui-component/Loadable';

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('@/views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('@/views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('@/views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('@/views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('@/views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <UtilsColor />
        },
        {
            path: '/',
            children: [
                {
                    path: 'dashboard',
                    element: <UtilsColor />
                }
            ]
        },
        {
            path: '/',
            children: [
                {
                    path: 'util-color',
                    element: <UtilsColor />
                }
            ]
        },
        {
            path: '/',
            children: [
                {
                    path: 'util-shadow',
                    element: <UtilsShadow />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'tabler-icons',
                    element: <UtilsTablerIcons />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'material-icons',
                    element: <UtilsColor />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
