import { useRoutes } from 'react-router-dom';
import { lazy } from 'react';

// project imports
import Loadable from '@/ui-component/Loadable';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([MainRoutes, AuthenticationRoutes]);
}
