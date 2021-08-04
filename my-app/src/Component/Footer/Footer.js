import React from 'react';
import {
    FooterContainerStyle,
    TopGroup,
    BottomGroup,
    TextHeader,
    TextButton,
    TextCopyRight,
    Email,
    SubButton,
    Card,
    TextDetail

} from '../../Styles/Footer.style'
import { CgCopyright } from "react-icons/cg";



const Footer = () =>{
    return(
        <FooterContainerStyle>
            <TopGroup>
                <Card>
                    <TextHeader>LOGO.CO</TextHeader>
                    <TextDetail>Adress: 135 Barnard St. Brooklyn, NY 10036, United States</TextDetail>
                    <TextDetail>Phone: 1-400-123-1234</TextDetail>
                    <TextDetail>Email: example@creativelab.com</TextDetail>
                </Card>
                <Card>
                    <TextHeader>Services</TextHeader>
                    <TextButton>Apps Developer</TextButton>
                    <TextButton>Graphic Design</TextButton>
                    <TextButton>Web Developer</TextButton>
                    <TextButton>Marketing</TextButton>
                    <TextButton>IOS Developer</TextButton>
                </Card>
                <Card>
                    <TextHeader>Links</TextHeader>
                    <TextButton>About</TextButton>
                    <TextButton>Blog</TextButton>
                    <TextButton>Team</TextButton>
                    <TextButton>Portfolio</TextButton>
                    <TextButton>Sing In</TextButton>                    
                </Card>
                <Card>
                    <TextHeader>Get In Touch</TextHeader>
                    <TextDetail>Enter your email and we'll send you more information.</TextDetail>
                    <Email placeholder="Your Email"></Email>
                    <SubButton>Subscribe</SubButton>
                </Card>
            </TopGroup>
            <BottomGroup>
                <TextCopyRight><CgCopyright/>Copyright 2020 Creative . X Design by Sumon</TextCopyRight>
            </BottomGroup>
        
        </FooterContainerStyle>
    )

}

export default Footer