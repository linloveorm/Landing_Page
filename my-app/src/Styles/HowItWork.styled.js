import styled from 'styled-components';
import BackgroundImage from '../image/Group_1995.png'


export const HowContainerStyle = styled.div`
    background-image:url(${BackgroundImage});
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    background-position: center;
    background-repeat: no-repeat;
    @media only screen and (max-width: 479px){
        height: 770px;
        width: 100%;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        height: 812px;
        width: 100%;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        height: 800px;
        width: 100%;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        height: 800px;
        width: 100%;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        height: 800px;
        width: 100%;
    }
    @media only screen and (min-width: 1440px){
        height: 900px;
        width: 100%;
    }   
`

export const TopGroup = styled.div`
    display: flex;
    /* justify-content: center;
    flex-direction: column;
    align-items: center; */
    
    @media only screen and (max-width: 479px){
        margin-top: 20px;
        flex-direction: column;
        width: 60%;
        height: 20%;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        /* justify-content: center; */
        margin-top: 20px;
        flex-direction: column;
        width: 60%;
        height: 20%;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        margin-top: 20px;
        flex-direction: column;
        width: 60%;
        height: 30%;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        /* justify-content: center; */
        flex-direction: column;
        /* align-items: center; */
        width: 60%;
        height: 30%;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 60%;
        height: 30%;
    }
    @media only screen and (min-width: 1440px){ 
        justify-content: center;
        flex-direction: column;
        align-items: center;
            
        width: 60%;
        height: 40%;
    } 
`

export const TextHeader = styled.h1`
    
    color: #000000;
    text-align: center;
    @media only screen and (max-width: 479px){
        font-size: 18px;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        font-size: 34px;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        font-size: 40px;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        font-size: 50px;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        font-size: 60px;
    }
    @media only screen and (min-width: 1440px){        
        font-size: 70px;
    } 
    
`
export const TextDetail = styled.div`
    color: #000000;
    @media only screen and (max-width: 479px){
        font-size: 11px;
        text-align: center;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        font-size: 14px;
        text-align: center;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        font-size: 16px;
        text-align: center;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        font-size: 16px;
        text-align: center;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        font-size: 18px;
        text-align: center;
    }
    @media only screen and (min-width: 1440px){        
        font-size: 18px;
        text-align: center;
    } 
`
export const TextDetail2 = styled.div`
    /* font-size: 18px; */
    color: #000000;
    
    @media only screen and (max-width: 479px){
        font-size: 10px;
        text-align: left;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        font-size: 12px;
        text-align: left;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        font-size: 14px;
        text-align: left;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        font-size: 14px;
        text-align: left;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        text-align: center;
        font-size: 16px;
    }
    @media only screen and (min-width: 1440px){     
        text-align: center;   
        font-size: 16px;
    } 
`

export const BottomGroup = styled.div`
    display: flex;
    /* justify-content: space-between;
    flex-direction: row;
    align-items: center; */
    
    @media only screen and (max-width: 479px){
        /* justify-content: space-between; */
        flex-direction: column;
        width: 100%;
        height: 60%;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        /* justify-content: space-between; */
        flex-direction: column;
        width: 100%;
        height: 60%;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        /* justify-content: space-between; */
        flex-direction: column;
        width: 100%;
        height: 60%;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        /* justify-content: space-between; */
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 60%;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        /* justify-content: space-between; */
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 60%;
    }
    @media only screen and (min-width: 1440px){        
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 50%;
    } 
`
export const TextGroup = styled.div`
    display: flex;
    /* text-align: center; */
    
    @media only screen and (max-width: 479px){
        /* justify-content: space-between; */
        /* margin-left: 20px; */
        flex-direction: column;
        width: 50%;
        text-align: left;
        /* align-items: center; */
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        /* justify-content: space-between; */
        flex-direction: column;
        width: 50%;
        text-align: left;
        /* align-items: center; */
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        /* justify-content: space-between; */
        flex-direction: column;
        width: 50%;
        text-align: left;
        /* align-items: center; */
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        justify-content: space-between;
        flex-direction: column;
        width: 30%;
        text-align: left;
        /* align-items: center; */
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        justify-content: space-between;
        flex-direction: column;
        width: 30%;
        text-align: left;
        /* align-items: center; */
    }
    @media only screen and (min-width: 1440px){        
        /* justify-content: space-between; */
        flex-direction: column;
        /* align-items: center; */
    } 
`

export const CardProduct = styled.div`
    display: flex;
    
    @media only screen and (max-width: 479px){
        justify-content: space-around;
        flex-direction: row;
        width: 100%;
        /* align-items: center; */
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        justify-content: space-around;
        flex-direction: row;
        width: 100%;
        /* align-items: center; */
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        justify-content: space-around;
        flex-direction: row;
        width: 100%;
        /* align-items: center; */
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        justify-content: space-around;
        flex-direction: row;
        width: 100%;
        /* align-items: center; */
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        justify-content: space-around;
        /* margin-left: 30px; */
        flex-direction: column;
        align-items: center;
        width: 70%;
    }
    @media only screen and (min-width: 1440px){        
        justify-content: space-between;
        /* margin-left: 30px; */
        flex-direction: column;
        align-items: center;
        width: 70%;
    } 
    
`

export const TextHeader2 = styled.h3`
    @media only screen and (max-width: 479px){
        font-size: 14px;
        color: #000000;
        text-align: left;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        font-size: 16px;
        color: #000000;
        text-align: left;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        font-size: 18px;
        color: #000000;
        text-align: left;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        font-size: 18px;
        color: #000000;
        text-align: left;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        font-size: 18px;
        color: #000000;
        text-align: left;
    }
    @media only screen and (min-width: 1440px){        
        font-size: 18px;
        color: #000000;
        text-align: center;
    } 
`

export const MoreButton = styled.button`   
    @media only screen and (max-width: 479px){
        width: 100%;
        background-color: transparent;
        border: none;
        font-size: 10px;
        margin-top: 12px;
        font-weight: bold;
        text-align: left;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        width: 100%;
        background-color: transparent;
        border: none;
        font-size: 10px;
        margin-top: 14px;
        font-weight: bold;
        text-align: left;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        width: 100%;
        background-color: transparent;
        border: none;
        font-size: 14px;
        margin-top: 14px;
        font-weight: bold;
        text-align: left;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        background-color: transparent;
        border: none;
        font-size: 16px;
        margin-top: 18px;
        font-weight: bold;
        text-align: left;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        background-color: transparent;
        border: none;
        font-size: 18px;
        margin-top: 18px;
        font-weight: bold;
        text-align: left;
    }
    @media only screen and (min-width: 1440px){        
        background-color: transparent;
        font-size: 20px;
        border: none;
        margin-top: 20px;
        font-weight: bold;
    } 
`

export const ImgCard = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 479px){
        width: 80%;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        width: 80%;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        width: 80%;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        width: 80%;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        width: auto;
        height: 100px;
    }
    @media only screen and (min-width: 1440px){        
        width: auto;
        height: 150px;
    } 
    
`

export const ImgGroupCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 479px){
        width: 40%;
        height: auto;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        width: 40%;
        height: auto;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        width: 30%;
        height: auto;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        width: 30%;
        height: auto;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        width: 30%;
        height: auto;
    }
    @media only screen and (min-width: 1440px){        
        width: 30%;
        height: auto;
    } 
    
`