import styled from 'styled-components';
import BackgroundImage from '../image/BG_R_L.png'


export const ClientContainerStyle = styled.div`
    background-image:url(${BackgroundImage});
    width: 100%;
    height: 950px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background-position: center;
    background-repeat: repeat-x;
    
`


export const TopGroup = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: row;
    align-items: center;
    width: 80%;
    height: 40%;
`
export const TopGroupCard = styled.div`
    display: flex;
    margin-left:200px;
    justify-content: left;    
    align-items: center;
    width: 70%;
    height: 100%;
`

export const TextHeader = styled.h1`
    
    font-size: 50px;
    color: #000000;
    text-align: left;
    margin-right: 20px;
`
export const TextDetail = styled.div`
    margin-top: 30px;
    font-size: 22px;
    color: #000000;
    text-align: left;

`

export const TextName = styled.div`
    margin-bottom: 5px;
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
    margin-left:200px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    width: 80%;
    height: 50%;
`

export const Card = styled.div`
    display: flex;
    /* justify-content: space-between; */
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-left: 30px;
    width: 60%;
    height: 100%;
    
`
export const ButtonCard = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    justify-content: flex-end;
    width: 100%;

`
export const Button = styled.button`
    background-color: transparent;
    border: none;
    margin-top: 20px;
    font-weight: bold;
    width: 100px;
`

export const Image = styled.img`
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 200px;
    border-radius: 15px;
`

export const ImageCard = styled.div`
    display: flex;
    align-items: top;
    flex-direction: column;
    /* justify-content: space-around; */
    width: 20%;
    height: 100%;
`
export const CardQuote = styled.div`
    display: flex;
    /* justify-content: space-between; */
    flex-direction: column;
    align-items: top;
    text-align: right;
    margin-left: 30px;
    width: 20%;
    height: 100%;
`
