import React from 'react'
import TopContainer from './Component/TopContainer/TopContainer';
import {MainContainer} from '../src/Styles/Body.styled'
import Product from './Component/Product/Product'
import Reason from './Component/Reason/Reason'

function Body() {
  return (
    <MainContainer>
      <TopContainer></TopContainer>
      <Product></Product>
      <Reason></Reason>
    </MainContainer>
    
  );
}

export default Body;
