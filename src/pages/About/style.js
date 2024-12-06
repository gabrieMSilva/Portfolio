import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    height: 100vh;
    margin-top: 10rem;
    justify-content: center;
    transform: translateX(-700px);
    opacity: 0;

    h1 {
        font-size: 64px;
        color: var(--white);
        font-weight: 700;
        font-family: serif;
        border-bottom: 2px solid var(--secondary);
        max-width: 340px;
    }

    /* Responsividade */
    @media (max-width: 1024px) {
        transform: translateX(-300px);
        h1 {
            font-size: 48px;
            max-width: 300px;
        }
    }

    @media (max-width: 768px) {
        transform: translateX(0);
        margin-top: 5rem;
        flex-direction: column;
        align-items: center;
        h1 {
            font-size: 36px;
            text-align: center;
        }
    }

    @media (max-width: 480px) {
        margin-top: 2rem;
        h1 {
            font-size: 28px;
        }
    }
`;

export const Text = styled.div`
    max-width: 1200px;

    h3 {
        margin-top: 4rem;
        font-size: 32px;
        font-weight: 600;
        color: var(--white);
        margin-bottom: 1rem;
    }

    p {
        color: var(--white);
        font-weight: 200;
    }

    /* Responsividade */
    @media (max-width: 1024px) {
        max-width: 900px;

        h3 {
            font-size: 28px;
        }

        p {
            font-size: 16px;
        }
    }

    @media (max-width: 768px) {
        max-width: 600px;

        h3 {
            font-size: 24px;
            text-align: center;
        }

        p {
            text-align: center;
        }
    }

    @media (max-width: 480px) {
        max-width: 90%;
        
        h3 {
            font-size: 20px;
        }

        p {
            font-size: 14px;
        }
    }
`;
