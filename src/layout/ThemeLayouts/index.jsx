import React, { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

import HomePageLayout from './HomePage';
import ContactLayout from './contact';
import Label from './LabelDemo';
import PricingLayout from './Pricing';
import OurPartnersLayout from './OurPartners';
import ServicesLayout from './Services';

export default function LayoutPage({ params }) {
    const [element, setElement] = useState('');
    const { pathname } = useLocation();
    console.log('pathname:', params, pathname);
    const possibleMatch = matchPath(params, pathname);
    useEffect(() => {
        setElement('/' + params);
    }, []);

    return (
        <>
            {
                possibleMatch.pathname == '/services' ? (
                <ServicesLayout />
            ) : possibleMatch.pathname == '/pricing' ? (
                <PricingLayout />
            ) : possibleMatch.pathname == '/contact' ? (
                <ContactLayout />
            ) : possibleMatch.pathname == '/products' ? (
                <OurPartnersLayout />
            ) : possibleMatch.pathname == '/sitemap' ? (
                <PricingLayout />
            ) :(
                <HomePageLayout />
            )
            }
        </>
    );
}
