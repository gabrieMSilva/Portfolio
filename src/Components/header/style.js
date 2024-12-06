import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 6rem 300px;
    height: 96px;

    @media (max-width: 768px) {
        padding: 2rem 20px;
    }
`;

export const Text = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 1rem;

    img {
        width: 58px;
        height: 58px;
        border-radius: 50%;

        @media (max-width: 768px) {
            width: 48px;
            height: 48px;
        }
    }

    h1 {
        color: var(--white);
        font-size: 32px;
        font-weight: 400;

        @media (max-width: 768px) {
            font-size: 24px;
        }
    }
`;

export const HamburgerButton = styled.div`
    display: none;
    cursor: pointer;
    flex-direction: column;
    gap: 5px;

    div {
        width: 30px;
        height: 3px;
        background: var(--white);
        border-radius: 2px;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;

export const Menu = styled.div`
    display: flex;
    padding: 0 150px;

    @media (max-width: 768px) {
        display: ${({ open }) => (open ? "flex" : "none")};
        position: absolute;
        top: 80px;
        left: 0;
        width: 100%;
        background: var(--primary);
        flex-direction: column;
        align-items: center;
        padding: 1rem 0;
        z-index: 100; /* Certifique-se de que o menu está acima de outros elementos */
    }
`;


export const MenuItems = styled.ul`
    display: flex;
    gap: 4rem;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1.5rem;
    }

    li {
        cursor: pointer;
        font-size: 24px;
        font-weight: bold;

        @media (max-width: 768px) {
            font-size: 16px;
        }
    }
    li{
        cursor: pointer;
        border-bottom: 1px solid var(--secondary);
        font-size: 24px;
        font-weight: bold;
      
        
    }

    a {
        color: var(--white);
        text-decoration: none;
    }

    li:hover{
       scale: 1.1;
       transition: 0.5s;
    }
`;
