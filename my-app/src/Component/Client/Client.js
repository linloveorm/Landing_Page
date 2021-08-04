import React from 'react';
import {
    ClientContainerStyle,
    TopGroup,
    BottomGroup,
    TextHeader,
    TextDetail,
    TextName,
    TextPosition,
    Card,
    Button,
    ImageCard,
    Image,
    TopGroupCard,
    ButtonCard,
    CardQuote
} from '../../Styles/Client.styled'
import PersonImage from '../../image/Person_1.png'
import { HiOutlineArrowRight, HiOutlineArrowLeft } from 'react-icons/hi';
import { ImQuotesRight } from "react-icons/im";

const Client = () => {
    return (
        <ClientContainerStyle>
            <TopGroup>
                <TopGroupCard>
                    <TextHeader>Check testimonials for our satisfied clients</TextHeader>
                </TopGroupCard>
                {/* <TopGroupCard></TopGroupCard> */}
            </TopGroup>
            <BottomGroup>
                <ImageCard>
                    <Image src={PersonImage} />
                    <TextName>Sd Jon</TextName>
                    <TextPosition>UX Designer</TextPosition>
                </ImageCard>
                <Card>
                    <TextDetail>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s.Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.
                    </TextDetail>
                    <ButtonCard>
                        <Button><HiOutlineArrowLeft size={20} /></Button>
                        <Button><HiOutlineArrowRight size={20} /></Button>
                    </ButtonCard>
                </Card>
                <CardQuote>
                    <ImQuotesRight size={60}/>
                </CardQuote>
            </BottomGroup>
        </ClientContainerStyle>
    )

}

export default Client