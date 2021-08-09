import styled from 'styled-components';
import BackgroundImage from '../image/Group_1995.png'


export const ProductContainerStyle = styled.div`
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
        width: 80%;
        height: 30%;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        /* justify-content: center; */
        margin-top: 20px;
        flex-direction: column;
        width: 80%;
        height: 30%;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        margin-top: 20px;
        flex-direction: column;
        width: 80%;
        height: 30%;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 60%;
        height: 40%;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 60%;
        height: 40%;
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
        font-size: 22px;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        font-size: 34px;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        font-size: 34px;
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
        font-size: 10px;
        text-align: left;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        font-size: 12px;
        text-align: left;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        font-size: 12px;
        text-align: left;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        font-size: 14px;
        text-align: center;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        font-size: 16px;
        text-align: center;
    }
    @media only screen and (min-width: 1440px){        
        font-size: 16px;
        text-align: center;
    } 
`
export const TextDetail2 = styled.div`
    /* font-size: 18px; */
    color: #000000;
    text-align: center;
    @media only screen and (max-width: 479px){
        font-size: 12px;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        font-size: 14px;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        font-size: 14px;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        font-size: 16px;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        font-size: 20px;
    }
    @media only screen and (min-width: 1440px){        
        font-size: 20px;
    } 
`

export const BottomGroup = styled.div`
    display: flex;
    /* justify-content: space-between;
    flex-direction: row;
    align-items: center; */
    
    @media only screen and (max-width: 479px){
        justify-content: space-between;
        flex-direction: column;
        width: 80%;
        height: 50%;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        justify-content: space-between;
        flex-direction: column;
        width: 80%;
        height: 50%;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        justify-content: space-between;
        flex-direction: column;
        width: 80%;
        height: 50%;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        width: 80%;
        height: 50%;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        width: 80%;
        height: 50%;
    }
    @media only screen and (min-width: 1440px){        
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        width: 80%;
        height: 50%;
    } 
`
export const TextGroup = styled.div`
    display: flex;
    /* text-align: center; */
    @media only screen and (max-width: 479px){
        justify-content: space-between;
        flex-direction: column;
        /* align-items: center; */
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        justify-content: space-between;
        flex-direction: column;
        /* align-items: center; */
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        justify-content: space-between;
        flex-direction: column;
        /* align-items: center; */
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
    }
    @media only screen and (min-width: 1440px){        
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
    } 
`

export const CardProduct = styled.div`
    display: flex;
    
    text-align: center;
    /* padding-left: 20px; */
    @media only screen and (max-width: 479px){
        /* justify-content: space-between; */
        width: 90%;
        flex-direction: row;
        align-items: center;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        /* justify-content: space-between; */
        width: 90%;
        flex-direction: row;
        align-items: center;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        /* justify-content: space-between; */
        width: 90%;
        flex-direction: row;
        align-items: center;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        /* justify-content: space-between; */
        width: 90%;
        flex-direction: column;
        align-items: center;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        /* justify-content: space-between; */
        width: 90%;
        flex-direction: column;
        align-items: center;
    }
    @media only screen and (min-width: 1440px){        
        /* justify-content: space-between; */
        width: 90%;
        flex-direction: column;
        align-items: center;
    } 
    
`

export const TextHeader2 = styled.h3`
    @media only screen and (max-width: 479px){
        font-size: 18px;
        color: #000000;
        text-align: left;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        font-size: 18px;
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
        text-align: center;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        font-size: 18px;
        color: #000000;
        text-align: center;
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
        margin-top: 12px;
        font-size: 10px;
        font-weight: bold;
        text-align: left;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        width: 100%;
        background-color: transparent;
        border: none;
        font-size: 12px;
        margin-top: 14px;
        font-weight: bold;
        text-align: left;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        width: 100%;
        background-color: transparent;
        font-size: 14px;
        border: none;
        margin-top: 14px;
        font-weight: bold;
        text-align: left;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        background-color: transparent;
        border: none;
        margin-top: 18px;
        font-size: 16px;
        font-weight: bold;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        background-color: transparent;
        border: none;
        margin-top: 20px;
        font-size: 16px;
        font-weight: bold;
    }
    @media only screen and (min-width: 1440px){        
        background-color: transparent;
        border: none;
        margin-top: 20px;
        font-size: 18px;
        font-weight: bold;
    } 
`

export const ImgCard = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media only screen and (max-width: 479px){
        width: 90px;
        height: 90px;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        width: 90px;
        height: 90px;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        width: 90px;
        height: 90px;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        width: 110px;
        height: 110px;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        width: 110px;
        height: 110px;
    }
    @media only screen and (min-width: 1440px){        
        width: 110px;
        height: 110px;
    } 
`