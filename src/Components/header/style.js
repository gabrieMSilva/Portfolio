import styled from "styled-components";


export const Container = styled.div`
    
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding:  6rem 300px  ;
    height: 96px;

`
export const Text = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    

    img{
        width: 58px;
        height: 58px;
        border-radius:50%;
    }
    h1{
        color: var(--white);
        font-size: 32px;
        font-weight: 400;
    }
`
export const Menu = styled.div`
    padding: 0 150px;
    
    ul{
        display: flex;
        gap: 4rem;
        align-items: center;
    }
    li{
        cursor: pointer;
        text-decoration: underline wavy;
        font-size: 24px;
        font-weight: bold;
      
        
    }
    a{
        color: var(--white);
        text-decoration: none;
    }
   

`