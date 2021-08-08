import React from 'react'
import {
    ProductContainerStyle,
    TopGroup,
    TextHeader,
    TextDetail,
    BottomGroup,
    CardProduct,
    TextHeader2,
    MoreButton,
    ImgCard,
    TextDetail2,
    TextGroup
} from '../../Styles/Product.styled'
import { BsArrowRight } from 'react-icons/bs';
import Expand from '../../image/expand.png'
import Higher from '../../image/Higher.png'
import Book from '../../image/Book.png'
import Secure from '../../image/secure.png'


const Product = () => {
    return (
        <ProductContainerStyle>
            <TopGroup>
                <TextHeader>Our Software is a Quick Spending Solution for Generic</TextHeader>
                <TextDetail2>Lorem Ipsum is simply dummy text of the printing and typesetting industry</TextDetail2>
            </TopGroup>
            <BottomGroup>
                <CardProduct>
                    <ImgCard src={Expand} />
                    <TextGroup>
                        <TextHeader2>
                            Expand Your Reach
                        </TextHeader2>
                        <TextDetail>Lorem Ipsum is simply dummy the printing and typesetting and Lorem Ipsum has been the.</TextDetail>
                        <MoreButton>More <BsArrowRight /></MoreButton>
                    </TextGroup>                    
                </CardProduct>
                <CardProduct>
                    <ImgCard src={Higher} />
                    <TextGroup>
                        <TextHeader2>
                            Higher Annualized Growth
                        </TextHeader2>
                        <TextDetail>Lorem Ipsum is simply dummy the printing and typesetting and Lorem Ipsum has been the.</TextDetail>
                        <MoreButton>More <BsArrowRight /></MoreButton>
                    </TextGroup>
                    
                </CardProduct>
                <CardProduct>
                    <ImgCard src={Book} />
                    <TextGroup>
                        <TextHeader2>
                            Book Your Provider
                        </TextHeader2>
                        <TextDetail>Lorem Ipsum is simply dummy the printing and typesetting and Lorem Ipsum has been the.</TextDetail>
                        <MoreButton>More <BsArrowRight /></MoreButton>
                    </TextGroup>
                    
                </CardProduct>
                <CardProduct>
                    <ImgCard src={Secure} />
                    <TextGroup>
                        <TextHeader2>
                            Secure multi-usable
                        </TextHeader2>
                        <TextDetail>Lorem Ipsum is simply dummy the printing and typesetting and Lorem Ipsum has been the.</TextDetail>
                        <MoreButton>More <BsArrowRight /></MoreButton>
                    </TextGroup>
                    
                </CardProduct>
            </BottomGroup>
        </ProductContainerStyle>
    )
}

export default Product;
