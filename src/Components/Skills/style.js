import styled from "styled-components";



export const  Container = styled.div`
    padding:  6rem 300px ;
    @media (max-width: 1024px) {
        padding: 6rem 150px;
        transform: translateX(-400px);
    }

    @media (max-width: 768px) {
        padding: 4rem 50px;
        transform: translateX(0);
    }
    

    h1{
        font-size: 48px;
        font-weight: 700;
        color: var(--white);
        font-family: serif;
        border-bottom: 2px solid var(--secondary);
        max-width: 110px;
    }
`
export const  ContainerCards = styled.div`
    
    margin-top: 4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
`
