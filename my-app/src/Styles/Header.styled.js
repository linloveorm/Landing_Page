import styled from 'styled-components';

export const HeaderContainer = styled.div`
    background-color: transparent;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`

export const GroupButton = styled.button`
    height: 100%;
    background-color: transparent;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 16px;
    width: 70px;
    text-align: center  

`



export const GroupLeft = styled.div`
    background: transparent;
    /* margin-left: 3%; */
    height: 100%;
    display: flex;
    align-items: center;
    width: 40%;
    @media only screen and (max-width: 479px){
        button{
            background: transparent;
            color: #FFFFFF;
            font-size: 16px;
            display: inline-block;
            border: none;
            /* width: 30%; */
            /* margin-left: 10px; */
            /* text-align: center      */
        }
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        button{
            background: transparent;
            color: #FFFFFF;
            font-size: 18px;
            display: inline-block;
            border: none;
            /* width: 30%; */
            /* margin-left: 10px; */
            /* text-align: center      */
        }
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        button{
            background: transparent;
            color: #FFFFFF;
            font-size: 24px;
            display: inline-block;
            border: none;
            /* width: 30%; */
            /* margin-left: 10px; */
            /* text-align: center      */
        }
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        button{
            background: transparent;
            color: #FFFFFF;
            font-size: 24px;
            display: inline-block;
            border: none;
            /* width: 30%; */
            /* margin-left: 10px; */
            /* text-align: center      */
        }
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        button{
            background: transparent;
            color: #FFFFFF;
            font-size: 24px;
            display: inline-block;
            border: none;
            /* width: 30%; */
            margin-left: 10px;
            /* text-align: center      */
        }
    }
    @media only screen and (min-width: 1440px){        
        button{
            background: transparent;
            color: #FFFFFF;
            font-size: 28px;
            display: inline-block;
            border: none;
            /* width: 30%; */
            margin-left: 10px;
            /* text-align: center      */
        }
    }   
    
    

`

export const GroupRight = styled.div`
    /* padding-right: 3%; */
    background: transparent;
    display: flex;
    width: 45%;
    height: 100%;
    align-items: center;
    justify-content: center;
    
`

export const ButtonTransparent = styled.button`
    height: 100%;
    background-color: transparent;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    text-align: center;
    @media only screen and (max-width: 479px){
        font-size: 14px;
        width: 70px;        
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        font-size: 14px;
        width: 70px;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        font-size: 16px;
        width: 70px;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        font-size: 16px;
        width: 70px;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        font-size: 18px;
        width: 70px;
    }
    @media only screen and (min-width: 1440px){        
        font-size: 22px;
        width: 100px;
    }     
` 
export const ButtonWhite = styled.button`
    background-color: #FFFFFF;
    color:#000000;
    border: transparent;
    width: 100px;
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
    font-style: bold;

    @media only screen and (max-width: 479px){
        height: 30px;
        font-size: 14px;
        border-radius: 10px;
    }
    @media only screen and (min-width: 480px) and (max-width: 576px){
        height: 30px;
        font-size: 14px;
        border-radius: 10px;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px){
        height: 40px;
        font-size: 14px;
        border-radius: 10px;
    }
    @media only screen and (min-width: 769px) and (max-width: 992px){
        height: 40px;
        font-size: 16px;
        border-radius: 20px;
    }
    @media only screen and (min-width: 993px) and (max-width: 1439px){
        height: 40px;
        font-size: 16px;
        border-radius: 30px;
    }
    @media only screen and (min-width: 1440px){        
        height: 45px;
        font-size: 18px;
        border-radius: 30px;
    } 
`

export const DropdownBtn = styled.select`
    height: 50px;
    background: transparent;
    color: #FFFFFF;
    align-items: center;
    justify-content: center;
    border: none;
    text-align: center;
    width: 90px;
    outline: none;   
    font-size: 16px;
    box-shadow: none;
    /* -webkit-appearance: none; */
    /* -moz-appearance: none; */
    
`






