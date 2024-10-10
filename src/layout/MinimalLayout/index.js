import { Outlet } from 'react-router-dom';

// project imports
import Feedback from '../Feedback';

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => (
    <>
        <Outlet />
        <Feedback />
    </>
);

export default MinimalLayout;
