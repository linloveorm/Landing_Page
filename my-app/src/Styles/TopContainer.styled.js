import styled from 'styled-components';
import { Device } from './DeviceSize.style';

export const TopContainerStyle = styled.div`
    background: linear-gradient(130deg,#6151F9,#F75F9E);
    @media only screen and (max-width: 479px){
        height: 770px;
        border-bottom-right-radius: 150px;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        height: 812px;
        border-bottom-right-radius: 170px;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        height: 800px;
        border-bottom-right-radius: 180px;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        height: 800px;
        border-bottom-right-radius: 180px;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        height: 800px;
        border-bottom-right-radius: 200px;
    }
    @media only screen and (min-width: 1440px){
        height: 900px;
        border-bottom-right-radius: 220px;
    }   

`

export const BannerGroup = styled.div`
    width: 100%;
    /* margin-top: 10px; */
    background: transparent;
    display: flex;   
    /* justify-content: space-between; */
    @media only screen and (max-width: 479px){
        flex-direction: column;
        height: 100%;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        flex-direction: column;
        height: 100%;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        flex-direction: column;
        height: 100%;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        flex-direction: row-reverse;
        height: 80%;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        flex-direction: row-reverse;
        height: 80%;
    }
    @media only screen and (min-width: 1440px){        
        flex-direction: row-reverse;
        height: 80%;
    } 
    

`

export const TextHeader1 = styled.h1`
    color: #FFFFFF;
    @media only screen and (max-width: 479px){
        font-size: 28px;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        font-size: 36px;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        font-size: 40px;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        font-size: 60px;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        font-size: 70px;
    }
    @media only screen and (min-width: 1440px){        
        font-size: 70px;
    } 
    
`

export const TextDetail1 = styled.h2`
    
    color: #FFFFFF;
    @media only screen and (max-width: 479px){
        font-size: 16px;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        font-size: 18px;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        font-size: 18px;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        font-size: 20px;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        font-size: 24px;
    }
    @media only screen and (min-width: 1440px){        
        font-size: 24px;
    } 
`

export const ReadMoreButton = styled.button`
    background-color: #FFFFFF;
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
    @media only screen and (max-width: 479px){
        height: 30px;
        width: 110px;
        border-radius: 20px;
        font-size: 14px;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        height: 40px;
        width: 120px;
        border-radius: 20px;
        font-size: 14px;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        height: 40px;
        width: 150px;
        border-radius: 20px;
        font-size: 14px;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        height: 40px;
        width: 150px;
        border-radius: 20px;
        font-size: 14px;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        height: 40px;
        width: 150px;
        border-radius: 20px;
        font-size: 14px;
    }
    @media only screen and (min-width: 1440px){        
        height: 50px;
        width: 150px;
        border-radius: 30px;
        font-size: 18px;
    } 


`
export const Image = styled.img`
    width:100%;
    
`

export const GroupLeft = styled.div`
    margin-left: 3%;
    
    display: flex;
    align-self: center;
    flex-direction: column;
    font-style: bold;
    @media only screen and (max-width: 479px){
        margin-top: 30px;
        width: 100%;
        height: 50%;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        margin-top: 30px;
        width: 100%;
        height: 50%;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        justify-content: center;
        margin-top: 30px;
        width: 100%;
        height: 50%;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        width: 50%;
        height: 100%;
        justify-content: center;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        width: 50%;
        height: 100%;
        justify-content: center;
    }
    @media only screen and (min-width: 1440px){        
        width: 50%;
        height: 100%;
        justify-content: center;
    } 

`

export const GroupRight = styled.div`
    margin-left: 2%;
    /* justify-content: center; */
    align-self: center;
    display: flex;
    flex-direction: column;
    font-style: bold;

    @media only screen and (max-width: 479px){
        margin-top: 30px;        
        width: 100%; 
        height: 40%;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        margin-top: 30px;        
        width: 100%; 
        height: 40%;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        /* margin-top: 30px;         */
        width: 90%; 
        height: 40%;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        width: 50%;
        height: 100%;
        justify-content: center;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        width: 50%;
        height: 100%;
        justify-content: center;
    }
    @media only screen and (min-width: 1440px){        
        width: 50%;
        height: 100%;
        justify-content: center;
    } 
`