// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'sitemap',
            title: 'Site map',
            type: 'item',
            url: '/Sitemap',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
        {
            id: 'faq',
            title: 'FAQs',
            type: 'item',
            url: 'http://localhost:3000',
            icon: icons.IconHelp,
            external: true,
            target: true
        }
    ]
};

export default other;
