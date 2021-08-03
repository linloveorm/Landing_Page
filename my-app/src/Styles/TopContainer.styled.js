import styled from 'styled-components';
// import { GroupLeft } from './Header.styled';

export const TopContainerStyle = styled.div`
    background: linear-gradient(130deg,#6151F9,#F75F9E);
    width: 100%;
    height: 950px;
    border-bottom-right-radius: 270px;
`

export const BannerGroup = styled.div`
    width: 100%;
    height: 80%;
    background: transparent;
    display: flex;   
    justify-content: space-between;

`

export const TextHeader1 = styled.h1`
    font-size: 70px;
    color: #FFFFFF;
`

export const TextDetail1 = styled.h2`
    font-size: 24px;
    color: #FFFFFF;
`

export const ReadMoreButton = styled.button`
    background-color: white;
    font-size: 18px;
    color: #000000;
    border: transparent;
    border-radius: 20px;
    display: flex;
    height: 40px;
    width: 150px;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    display: flex;
    font-style: bold;
    font-size: 14px;


`
export const Image = styled.img`
    height: 100px;
    width: 100%;
`

export const GroupLeft = styled.div`
    margin-left: 3%;
    width: 50%;
    height: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    font-style: bold;

`

export const GroupRight = styled.div`
    margin-left: 2%;
    width: 50%;
    height: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    font-style: bold;
`