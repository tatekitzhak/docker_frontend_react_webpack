import { Avatar, Card, Grid, Typography } from '@mui/material';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
export const service_items = [
    {
        title: 'Convert an Audio to Text',
        link: 'audio-to-text',
        description: 'Convert your audio and video files to text with AI.',
        image: () => <Avatar sx={{ bgcolor: 'Orange', height: '70px', width: '70px' }}>
            <VideoSettingsIcon />
        </Avatar>
    },
    {
        title: 'Text to Image',
        link: 'text-to-image',
        description: 'AI Image Generator (Text to Image)',
        image: () => <Avatar sx={{ bgcolor: 'Orange', height: '70px', width: '70px' }}>
            <AutoAwesomeIcon />
        </Avatar>
    },
    {
        title: 'Image to Text',
        link: 'image-to-text',
        description: 'Convert image to text (Extract text from images, photos, and other pictures)',
        image: () => <Avatar sx={{ bgcolor: 'Orange', height: '70px', width: '70px' }}>
            <WallpaperIcon />
        </Avatar>
    },
     {
        title: 'Web Scraping',
        link: 'web-scraping',
        description: 'Scraping a web page and fetching it and extracting from it.',
        image: () => <Avatar sx={{ bgcolor: 'Orange', height: '70px', width: '70px' }}>
            <WallpaperIcon />
        </Avatar>
    },
    {
        title: 'Convert YouTube Video to Text',
        link: 'youtube-to-text ',
        description: 'Youtube to Text: transcribe any youtube video to text, that allows you to convert youtube videos to text format.',
        image: () => <Avatar sx={{ bgcolor: 'Orange', height: '70px', width: '70px' }}>
            <WallpaperIcon />
        </Avatar>
    },
];

export function serviceItems(prams){

    return [];
}