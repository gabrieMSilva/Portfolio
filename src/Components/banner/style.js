import styled from 'styled-components'



export const Container = styled.div`
    margin-top: 3rem;
    padding:  6rem 300px ;
    transform: translateX(-700px);
    @media (max-width: 1024px) {
        padding: 6rem 150px;
        transform: translateX(-400px);
    }

    @media (max-width: 768px) {
        padding: 4rem 50px;
        transform: translateX(0);
    }
`
export const Title = styled.h2`
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 1rem;
`
export const Text = styled.h1`
    font-size: 55px;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 1rem;
    font-family: serif;
`
export const Subtext = styled.p`
    font-size: 32px;
    font-weight: 200;
    color: var(--white);
`

export const ResumeBtn = styled.div`
    button{
        padding: 1rem 3rem;
        background-color: var(--secondary);
        border-radius: 8px;
        border: none;
        color: var(--white);
        font-size: 16px;
        margin-top: 2rem;
        font-weight: 700;
        cursor: pointer;
    }
    button:hover{
        background-color: var(--white);
        color: #000;
        transition: 1s;
    }
`