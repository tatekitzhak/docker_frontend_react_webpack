import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

import withAddMyData from '@/hoc/displayFruitsList/withAddMyData';




const fruits = ['Bananas', 'Chiku', 'Orange', 'Pear', 'Grapes', 'Peach', 'Apple', 'WaterMelon']

function DisplayFruitsListWise(props) {
  // const [fruitsList, setFruitsList] = useState([])
  console.log('DisplayFruitsList0:', props)
  const { enhance_fruits } = props;
  // useEffect(() => {

  //   setFruitsList(fruits)

  // }, []);
  return (
    <>

      <Container
        maxWidth="md"
        component="footer"
        sx={{
          background: '#f2f6fc',
          color: '#000',
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">

          <Grid align="left" item xs={6} sm={3} >
            <ul>
              {enhance_fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
              ))}
            </ul>
          </Grid>

        </Grid>

      </Container>
    </>
  );
}


const DisplayFruitsListWiseWithMyData = withAddMyData(DisplayFruitsListWise, fruits, (data)=>{return data.sort()} );

export default function DisplayFruitsList(props) {
  // const [fruitsList, setFruitsList] = useState([])
  // useEffect(() => {

  //   setFruitsList(fruits)

  // }, []);
  return (
    <>

      <Container
        maxWidth="md"
        component="footer"
        sx={{
          background: '#f2f6fc',
          color: '#000',
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <DisplayFruitsListWiseWithMyData>
        </DisplayFruitsListWiseWithMyData>
      </Container>
    </>
  );
}