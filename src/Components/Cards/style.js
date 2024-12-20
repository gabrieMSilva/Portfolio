import styled from 'styled-components'



export const Container = styled.div`
    max-width: 255px;
    padding: 5px 8px;
    background-color: var(--white);
    border-radius: 8px;
    cursor: pointer;
    
    
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
    color: #000;
`




