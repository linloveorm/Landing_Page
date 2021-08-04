import React from 'react'
import TopContainer from './Component/TopContainer/TopContainer';
import {MainContainer} from '../src/Styles/Body.styled';
import Product from './Component/Product/Product';
import Reason from './Component/Reason/Reason';
import HowItWork from './Component/HowItWork/HowItWork';
import Client from './Component/Client/Client';
import Footer from './Component/Footer/Footer';

function Body() {
  return (
    <MainContainer>
      <TopContainer></TopContainer>
      <Product></Product>
      <Reason></Reason>
      <HowItWork></HowItWork>
      <Client></Client>
      <Footer></Footer>
    </MainContainer>
    
  );
}

export default Body;
