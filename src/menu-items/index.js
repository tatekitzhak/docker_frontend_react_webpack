import dashboard from './dashboard';
import pages from './pages';
import CategoriesMenuItems from './categories';
import other from './other';
// ==============================|| MENU ITEMS ||============================== //
function menuItems() {
    const menuItemTypes = {
        items: [dashboard, pages, CategoriesMenuItems(), other]
    };

    return menuItemTypes;
}

export default menuItems;
