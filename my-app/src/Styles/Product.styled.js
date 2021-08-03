import styled from 'styled-components';
import BackgroundImage from '../image/Group 1995.png'


export const ProductContainerStyle = styled.div`
    background-image:url('../image/Group 1995.png') ;
    width: 100%;
    height: 950px;
    border-bottom-right-radius: 270px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const TopGroup = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 70%;
    height: 50%;
`

export const TextHeader = styled.h1`
    font-size: 70px;
    color: #000000;
    text-align: center;
`
export const TextDetail = styled.div`
    font-size: 14px;
    color: #000000;
    text-align: center;
`
export const TextDetail2 = styled.div`
    font-size: 18px;
    color: #000000;
    text-align: center;
`

export const BottomGroup = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 70%;
    height: 50%;
`

export const CardProduct = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-left: 20px;
    
`

export const TextHeader2 = styled.h3`
    font-size: 18px;
    color: #000000;
    text-align: center;
`

export const MoreButton = styled.button`
    background-color: transparent;
    border: none;
    margin-top: 20px;
    font-weight: bold;
`

export const ImgCard = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
`