import React from 'react';
import {
    ReasonContainer,
    GroupLeft,
    GroupRight,
    TextDetail,
    TextHeader1,
    TextHeader2,
    TextBox,
    LeftTop,
    LeftBottom,
    Image, MainContainer
} from '../../Styles/Reason.styled'
import PageImage from '../../image/Group_2012.png'

const Reason = () => {
    return (
        <ReasonContainer>
            <MainContainer>
                <GroupLeft>
                    <LeftTop>
                        <TextHeader1>Why Choose Us</TextHeader1>
                        <TextDetail>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</TextDetail>
                        <TextDetail>Lorem Ipsum has been the industry's standard dummy</TextDetail>
                    </LeftTop>
                    <LeftBottom>
                        <TextBox>
                            <TextHeader2>1. Best Performace</TextHeader2>
                            <TextDetail>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</TextDetail>
                        </TextBox>
                        <TextBox>
                            <TextHeader2>2. Easy Settings</TextHeader2>
                            <TextDetail>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</TextDetail>
                        </TextBox>
                        <TextBox>
                            <TextHeader2>3. Secure Multi Usable</TextHeader2>
                            <TextDetail>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</TextDetail>
                        </TextBox>
                    </LeftBottom>
                </GroupLeft>
                <GroupRight>
                    <Image src={PageImage} />
                </GroupRight>
            </MainContainer>

        </ReasonContainer>
    )
}

export default Reason