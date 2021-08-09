import React, { useEffect, useState } from "react";
import { 
    HeaderContainer, 
    GroupLeft, 
    GroupRight, 
    ButtonTransparent, 
    ButtonWhite, 
    DropdownBtn } from '../../Styles/Header.styled';
import { BiSearch } from 'react-icons/bi';

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [width]);


    return (
        <HeaderContainer>
            <GroupLeft>
                <button>LOGO.co</button>
            </GroupLeft>
            {width < 769  ?
                <GroupRight>
                    <DropdownBtn>
                        <option value="" hidden>Menu</option>
                        <option value="Home">Home</option>
                        <option value="Pages">Pages</option>
                        <option value="Portfolio">Portfolio</option>
                        <option value="Blog">Blog</option>
                        <option value="Shop">Shop</option>
                        <option value="Elements">Elements</option>
                    </DropdownBtn>
                    <ButtonTransparent><BiSearch /></ButtonTransparent>
                        <ButtonWhite>Sign Up</ButtonWhite>                    
                </GroupRight> : <GroupRight>
                    <ButtonTransparent>Home</ButtonTransparent>
                    <ButtonTransparent>Pages</ButtonTransparent>
                    <ButtonTransparent>Portfolio</ButtonTransparent>
                    <ButtonTransparent>Blog</ButtonTransparent>
                    <ButtonTransparent>Shop</ButtonTransparent>
                    <ButtonTransparent>Elements</ButtonTransparent>
                    <ButtonTransparent><BiSearch /></ButtonTransparent>
                    <ButtonWhite>Sign Up</ButtonWhite>
                </GroupRight>}


        </HeaderContainer>

    )
}


export default Header