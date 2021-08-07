import React from 'react'
import {
    HowContainerStyle,
    TopGroup,
    TextHeader,
    TextDetail,
    BottomGroup,
    CardProduct,
    TextHeader2,
    MoreButton,
    ImgCard,
    TextDetail2,
    textGroup
} from '../../Styles/HowItWork.styled'
import FirstImg from '../../image/First_2.png'
import SecondImg from '../../image/Second_2.png'
import ThirdImg from '../../image/Third.png'
import { BsArrowRight } from 'react-icons/bs';

const HowItWork = () => {
    return (
        <HowContainerStyle>
            <TopGroup>
                <TextHeader>How it Works</TextHeader>
                <TextDetail>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem  Ipsum has been the industry's standard dummy text ever since the 1500s.</TextDetail>
            </TopGroup>
            <BottomGroup>
                <CardProduct>
                    <ImgCard src={FirstImg} />
                    <textGroup>
                        <TextHeader2>
                            Visual Site Builder
                        </TextHeader2>
                        <TextDetail2>
                            Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem
                            Ipsum the standard dummy.
                        </TextDetail2>
                        <MoreButton>More <BsArrowRight /></MoreButton>
                    </textGroup>
                    
                </CardProduct>
                <CardProduct>
                    <ImgCard src={SecondImg} />
                    <textGroup>
                        <TextHeader2>
                            Visual Site Builder
                        </TextHeader2>
                        <TextDetail2>
                            Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem
                            Ipsum the standard dummy.
                        </TextDetail2>
                        <MoreButton>More <BsArrowRight /></MoreButton>
                    </textGroup>
                    
                </CardProduct>
                <CardProduct>
                    <ImgCard src={ThirdImg} />
                    <textGroup>
                        <TextHeader2>
                            Visual Site Builder
                        </TextHeader2>
                        <TextDetail2>
                            Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem
                            Ipsum the standard dummy.
                        </TextDetail2>
                        <MoreButton>More <BsArrowRight /></MoreButton>
                    </textGroup>
                    
                </CardProduct>
            </BottomGroup>
        </HowContainerStyle>
    )
}

export default HowItWork