import React, { Component } from 'react';
import StockList from './StockList';
import UserList from './UserList';

import withStockList from '@/hoc/stockListing/StockList';

const StocksData = [
    {
        id: 1,
        name: 'TCS'
          
    },
    {
        id: 2,
        name: 'Infosys'
    },
    {
        id: 3,
        name: 'Reliance'
    }
  ];

const UsersData = [
    {
        id: 1,
        name: 'Krunal'
          
    },
    {
        id: 2,
        name: 'Ankit'
    },
    {
        id: 3,
        name: 'Rushabh'
    }
  ];
  
const Stocks = withStockList( StockList, StocksData );
  
const Users = withStockList( UserList, UsersData );
  
function StockApp(props){
    console.log("AppHoc1:",props)
        return(
            <div>
                <Users usre="user"></Users>
                <Stocks></Stocks>
            </div>
        );
}

export default withStockList(StockApp);
