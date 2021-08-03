import React from 'react'
import TopContainer from './Component/TopContainer/TopContainer';
import {MainContainer} from '../src/Styles/Body.styled'
import Product from './Component/Product/Product'

function Body() {
  return (
    <MainContainer>
      <TopContainer></TopContainer>
      <Product></Product>
    </MainContainer>
    
  );
}

export default Body;
