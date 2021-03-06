import React from 'react';
import {TopContainerStyle,BannerGroup,ReadMoreButton,TextHeader1,TextDetail1,GroupLeft,GroupRight} from '../../Styles/TopContainer.styled';
import Header from '../Header/Header';
import {BsArrowRight} from 'react-icons/bs';
import PageImage from '../../image/Group_1948@2x.png'



const TopContainer = () =>{
    return(
        <TopContainerStyle>
            <Header></Header>
            <BannerGroup>                
                <GroupRight>
                    <img src={PageImage} alt="img"></img>
                </GroupRight>
                <GroupLeft>
                    <TextHeader1>Best Design agency for your business</TextHeader1>
                    <TextDetail1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</TextDetail1>
                    <ReadMoreButton>Read more <BsArrowRight/></ReadMoreButton>
                </GroupLeft>
            </BannerGroup>
        </TopContainerStyle>
    )
}

export default TopContainer
