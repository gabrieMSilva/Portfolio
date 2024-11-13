import styled from 'styled-components'



export const Container = styled.div`
    display: flex;
    height: 100vh;
    margin-top: 10rem;
    justify-content: center;
    transform: translateX(-700px);
    opacity: 0;
    h1{
        font-size: 64px;
        color: var(--white);
        font-weight: 700;
        font-family: serif;
        border-bottom: 2px solid var(--secondary);
        max-width: 340px;
    }
   
`
export const Text = styled.div`
     max-width: 1200px ;
     
     h3{
        margin-top: 4rem;
        font-size: 32px;
        font-weight: 600;
        color: var(--white);
        margin-bottom: 1rem;
     }
     p{
        color: var(--white);
        font-weight: 200;
     }

`