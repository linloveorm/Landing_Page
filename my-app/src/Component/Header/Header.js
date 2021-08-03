import React from 'react';
import ReactDOM from 'react-dom';
import {HeaderContainer,GroupLeft,GroupRight,ButtonTransparent,ButtonWhite} from '../../Styles/Header.styled';
import {BiSearch} from 'react-icons/bi';

const Header = () =>{
   return(
       <HeaderContainer>
           <GroupLeft>
               <button>LOGO.co</button>
           </GroupLeft>
           <GroupRight>
               <ButtonTransparent>Home</ButtonTransparent>
               <ButtonTransparent>Pages</ButtonTransparent>
               <ButtonTransparent>Portfolio</ButtonTransparent>
               <ButtonTransparent>Blog</ButtonTransparent>
               <ButtonTransparent>Shop</ButtonTransparent>
               <ButtonTransparent>Elements</ButtonTransparent>
               <ButtonTransparent><BiSearch /></ButtonTransparent>
               <ButtonWhite>Sign Up</ButtonWhite>
           </GroupRight>

       </HeaderContainer>

    )
}


export default Header