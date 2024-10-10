// material-ui
import { Typography } from '@mui/material';

// project imports
import NavGroup from './NavGroup';
import menuItems from '@/menu-items';

// ==============================|| SIDEBAR MENU LIST ||============================== //
function timerControl () {
    console.log(" Timer control !");
  }

  

const MenuList = () => {
    console.log('MenuList:', menuItems())
    const navItems = menuItems().items.map((item, i) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id + i} item={item} />;
            default:
                return (
                    <Typography key={item.id + i} variant="h6" color="error" align="center">
                        {/* Menu Items Error (Do a Loader spinning circle) */}
                        {console.count('MenuList:')}
                        Loading ...
                        {setTimeout(timerControl, 60000)}
                    </Typography>
                );
        }
    });

    return <>{navItems}</>;
};

export default MenuList;
