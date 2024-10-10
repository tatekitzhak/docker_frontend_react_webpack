import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// project imports
import App from 'App';
import ReduxStoreWrapper from '@/store/index';

// style + assets
//import '@/assets/scss/style.scss';
import config from './config';

// ==============================|| REACT DOM RENDER  ||============================== //
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <>
        <ReduxStoreWrapper>
            <BrowserRouter basename={config.basename}>
                <App />
            </BrowserRouter>
        </ReduxStoreWrapper>
    </>
);
