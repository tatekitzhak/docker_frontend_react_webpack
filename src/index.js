import React from 'react';
import { createRoot } from 'react-dom/client';

import StockApp from '@/components/stockListingTable';

/**
 * 
 */
import Person from '@/components/person/personApp';

/**
 * 
 */
import Counter from '@/components/counter/Couter';

/**
 * 
 */
import Layout from '@/components/pages/Layout';

/**
 * Pricing
 */
import Pricing from '@/components/pricing';

/**
 * 
 */

import DisplayFruitsList from '@/components/displayFruitsList';

// Test import of styles
import '@/styles/index.scss'


const container = document.getElementById('root');
const root = createRoot(container);


root.render(
    <>
        <Pricing />
    </>);
