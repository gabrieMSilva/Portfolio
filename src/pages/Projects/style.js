import styled from "styled-components";



export const Container = styled.div`
    padding: 6rem 300px;
    transform: translateX(-700px);
    opacity: 0;
    h1{
        font-size: 64px;
        font-weight: 700;
        color: var(--white);
        font-family: serif;
        border-bottom: 1px solid var(--secondary);
        max-width: 230px;
        
    }
    @media (max-width: 768px) {
        padding: 5rem 2rem;
    }

`
export const CardsContainer = styled.div`
    margin-top: 2rem;
    height: 300px;
    width: 300px;
    background-color: var(--white);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0,0,0.05);
    
`
export const CardsContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h2{
        font-size: 18px;
        font-weight: 400;
        color: var(--white);
    }

   img{
        max-width: 100%;
   }
   a{
    color: var(--white);
   }
   button{
    background-color: var(--primary);
    
    margin-top: 24px;
    padding: 15px 2rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    box-shadow: rgba(0,0,0,0.5);
   }
`

export const Title = styled.div`
    margin-top: 4rem;
    font-size: 24px;
    font-weight: 500;
    color: var(--white);
`
