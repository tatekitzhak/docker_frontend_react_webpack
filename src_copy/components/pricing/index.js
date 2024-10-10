import * as React from 'react';

import Pricing from './Pricing';

import ServicesLayout from '@/components/pricing/Services';

import PricingLayout from '@/components/pricing/Pricing';


export default function MainLayout(props) {
  return (
    <>
      <ServicesLayout>
        {console.log(props)}
      </ServicesLayout>
    </>
  );
}