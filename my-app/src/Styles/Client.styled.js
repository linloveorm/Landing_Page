import styled from 'styled-components';
import BackgroundImage from '../image/Group_1995.png'


export const ClientContainerStyle = styled.div`
    background-image:url(${BackgroundImage});
    width: 100%;
    height: 950px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-position: inherit;
    background-repeat: no-repeat;
`

export const TopGroup = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 60%;
    height: 20%;
`

export const TextHeader = styled.h1`
    font-size: 70px;
    color: #000000;
    text-align: left;
`
export const TextDetail = styled.div`
    font-size: 24px;
    color: #000000;
    text-align: left;
`

export const TextName = styled.div`
    font-size: 18px;
    color: #000000;
    text-align: left;
`
export const TextPosition = styled.div`
    font-size: 14px;
    color: #000000;
    text-align: left;
`


export const BottomGroup = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 60%;
    height: 20%;
`

export const CardProduct = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-left: 30px;
    
`

export const Button = styled.button`
    background-color: transparent;
    border: none;
    margin-top: 20px;
    font-weight: bold;
    width: 100px;
`

export const ImgCard = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 150px;
`