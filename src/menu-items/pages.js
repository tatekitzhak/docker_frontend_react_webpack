// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Services',
    caption: 'Services Caption',
    type: 'group',
    children: [
        {
            id: 'all-services',
            title: 'All Services',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'audio-to-tex',
                    title: 'Convert audio to text',
                    type: 'item',
                    url: '/services/audio-to-text',
                    target: true
                },
                {
                    id: 'text-to-image',
                    title: 'Text to image',
                    type: 'item',
                    url: '/services/text-to-image',
                    target: true
                }
            ]
        },
        {
            id: 'ai-tools',
            title: 'AI Tools',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'ai-tools',
                    title: 'Ask chat GPT',
                    type: 'item',
                    url: '/services/ask-chatgpt',
                    target: true
                },
                {
                    id: 'ask-dall-e-2',
                    title: 'Ask DALL·E 2',
                    type: 'item',
                    url: '/services/ask-dall-e-2',
                    target: true
                }
            ]
        }
    ]
};

export default pages;
