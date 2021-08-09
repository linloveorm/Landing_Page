import styled from 'styled-components';
import BackgroundImage from '../image/BG_R_L.png'


export const ClientContainerStyle = styled.div`
    background-image:url(${BackgroundImage});
    display: flex;
    /* justify-content: space-around; */
    align-items: center;
    flex-direction: column;
    background-position: center;
    background-repeat: repeat-x;
    @media only screen and (max-width: 479px){
        /* padding-left: 30px; */
        height: 770px;
        width: 100%;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        /* padding-left: 30px; */
        height: 812px;
        width: 100%;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        /* padding-left: 30px; */
        height: 800px;
        width: 100%;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        /* padding-left: 30px; */
        height: 800px;
        width: 100%;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        /* padding-left: 30px; */
        height: 800px;
        width: 100%;
    }
    @media only screen and (min-width: 1440px){
        /* padding-left: 30px; */
        height: 900px;
        width: 100%;
    }   
    
`


export const TopGroup = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: row;
    align-items: center;
    width: 90%;
    height: 20%;
    /* margin-left: 100px; */
`
export const TopGroupCard = styled.div`
    display: flex;
    /* margin-left:200px; */
    justify-content: left;    
    align-items: center;
    width: 70%;
    height: 100%;
    
`

export const TextHeader = styled.h1`
    @media only screen and (max-width: 479px){
        font-size: 22px;
        color: #000000;
        text-align: left;
        margin-right: 10px;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        font-size: 30px;
        color: #000000;
        text-align: left;
        margin-right: 10px;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        font-size: 36px;
        color: #000000;
        text-align: left;
        margin-right: 10px;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        font-size: 40px;
        color: #000000;
        text-align: left;
        margin-right: 10px;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        font-size: 50px;
        color: #000000;
        text-align: left;
        margin-right: 10px;
    }
    @media only screen and (min-width: 1440px){        
        font-size: 60px;
        color: #000000;
        text-align: left;
        margin-right: 20px;
    } 
    
`
export const TextDetail = styled.div`
    
    @media only screen and (max-width: 479px){
        margin-top: 20px;
        font-size: 14px;
        color: #000000;
        text-align: left;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        margin-top: 20px;
        font-size: 14px;
        color: #000000;
        text-align: left;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        margin-top: 20px;
        font-size: 14px;
        color: #000000;
        text-align: left;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        margin-top: 30px;
        font-size: 18px;
        color: #000000;
        text-align: left;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        margin-top: 30px;
        font-size: 18px;
        color: #000000;
        text-align: left;
    }
    @media only screen and (min-width: 1440px){        
        margin-top: 30px;
        font-size: 22px;
        color: #000000;
        text-align: left;
    } 

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
    /* margin-left:200px; */
    display: flex; 

    
    
    @media only screen and (max-width: 479px){
        width: 100%;
        height: 70%;   
        /* justify-content: space-around; */
        flex-direction: column;
        align-items: center;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        width: 100%;
        height: 70%;   
        /* justify-content: space-around; */
        flex-direction: column;
        align-items: center;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        width: 100%;
        height: 780%;    
        /* justify-content: space-around; */
        flex-direction: column;
        align-items: center;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        width: 100%;
        height: 70%;    
        justify-content: space-around;
        flex-direction: row;
        align-items: center;
        /* margin-left: 100px; */
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        width: 100%;
        height: 70%;    
        justify-content: space-around;
        flex-direction: row;
        align-items: center;
        /* margin-left: 100px; */
    }
    @media only screen and (min-width: 1440px){    
        width: 100%;
        height: 70%;    
        justify-content: space-around;
        flex-direction: row;
        align-items: center;
        /* margin-left: 100px; */
        
    } 
`

export const Card = styled.div`
    display: flex;
    /* justify-content: space-between; */
    
    align-items: center;
    text-align: center;
    /* margin-left: 30px; */
    @media only screen and (max-width: 479px){
        /* margin-top: 150px ; */
        flex-direction: column;
        width: 60%;
        height: 80%;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        /* margin-top: 150px ; */
        flex-direction: column;
        width: 60%;
        height: 80%;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        /* margin-top: 150px ; */
        flex-direction: column;
        width: 60%;
        height: 80%;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        margin-top: 80px ;
        flex-direction: column;
        width: 60%;
        height: 80%;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        margin-top: 80px ;
        flex-direction: column;
        width: 60%;
        height: 80%;
    }
    @media only screen and (min-width: 1440px){    
        margin-top: 80px ;
        flex-direction: column;
        width: 60%;
        height: 80%;
    } 
    
    
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
    @media only screen and (max-width: 479px){
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        /* height: 200px; */
        width: 50%;
        border-radius: 15px;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        /* height: 200px; */
        width: 50%;
        border-radius: 15px;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        /* height: 200px; */
        width: 50%;
        border-radius: 15px;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        /* height: 200px; */
        width: 80%;
        border-radius: 15px;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        /* height: 200px; */
        width: 80%;
        border-radius: 15px;
    }
    @media only screen and (min-width: 1440px){        
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        /* height: 200px; */
        width: 80%;
        border-radius: 15px;
    } 
    
`

export const ImageCard = styled.div`
    display: flex;
    align-items: top;
    flex-direction: column;
    /* justify-content: space-around; */
    @media only screen and (max-width: 479px){
        margin-left: 30px;
        height: 60%;
        justify-items: center;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        margin-left: 30px;
        height: 60%;
        justify-items: center;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        margin-left: 30px;
        height: 60%;
        justify-items: center;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        margin-left: 30px;
        height: 80%;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        margin-left: 50px;
        height: 80%;
    }
    @media only screen and (min-width: 1440px){        
        /* width: 40%; */
        margin-left: 50px;
        height: 80%;
    } 
    
`
export const CardQuote = styled.div`
    display: flex;
    /* justify-content: space-between; */
    /* flex-direction: column; */
    align-items: top;
    text-align: right;
    /* margin-left: 30px; */
    width: 20%;
    height: 100%;
`

export const TextGroup = styled.div`
    @media only screen and (max-width: 479px){
        width: 100%;
        display: flex;
        /* margin-left: 80px; */
        flex-direction: row;
        justify-content: space-around;

    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        width: 100%;
        display: flex;
        /* margin-left: 80px; */
        flex-direction: row;
        justify-content: space-around;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        width: 100%;
        display: flex;
        /* margin-left: 80px; */
        flex-direction: row;
        justify-content: space-around;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        /* margin-top: 150px ; */
        display: flex;
        width: 60%;
        height: 100%;
        flex-direction: row;
        justify-content: space-around;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        /* margin-top: 80px ; */
        display: flex;
        width: 60%;
        height: 100%;
        flex-direction: row;
        justify-content: space-around;
    }
    @media only screen and (min-width: 1440px){
        justify-content: space-around;
        flex-direction: row;        
        display: flex;
        /* margin-top: 80px ; */
        width: 60%;
        height: 100%;
    } 
`