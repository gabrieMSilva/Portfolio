import styled from 'styled-components'



export const Container = styled.div`
    max-width: 255px;
    padding: 8px 10px;
    background-color: var(--secondary);
    border-radius: 8px;
    
    &:hover{
        scale: 1.1;
        transition: ease-in-out 1s;
    }
`

export const Cardscontent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`

export const Title = styled.div`
    font-size: 28px;
    font-weight: 700;
    color: var(--white);
`




