import styled from 'styled-components';

export const Container = styled.div`
    padding: 6rem 300px;
    margin-bottom: 2rem;

    h1 {
        font-size: 48px;
        font-weight: 700;
        color: var(--white);
        font-family: serif;
        border-bottom: 2px solid var(--secondary);
        max-width: 170px;

        @media (max-width: 768px) {
            font-size: 32px;
            max-width: 140px;
        }
    }

    @media (max-width: 1024px) {
        padding: 4rem 100px;
    }

    @media (max-width: 768px) {
        padding: 2rem 20px;
    }
`;

export const InputsContainer = styled.div`
    form {
        max-width: 600px;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 4rem;

        @media (max-width: 768px) {
            margin-top: 2rem;
        }

        input {
            margin-bottom: 14px;
            background-color: transparent;
            height: 34px;
            border-radius: 4px;
            outline: none;
            border: 1px solid var(--gray);
            padding: 0 8px;
            color: var(--white);

            @media (max-width: 768px) {
                height: 30px;
                font-size: 14px;
            }
        }

        textarea {
            margin-bottom: 14px;
            border-radius: 4px;
            border: 1px solid var(--gray);
            color: var(--white);
            outline: none;
            padding: 8px;
            height: 94px;
            resize: none;
            background-color: transparent;

            @media (max-width: 768px) {
                height: 70px;
                font-size: 14px;
            }
        }

        .btn {
            background-color: var(--secondary);
            color: var(--white);
            font-size: 18px;
            font-weight: 700;
            cursor: pointer;

            @media (max-width: 768px) {
                font-size: 16px;
                padding: 0.5rem 2rem;
            }
        }

        .btn:hover {
            background-color: var(--white);
            color: #000;
            transition: 1s;
        }
    }
`;
