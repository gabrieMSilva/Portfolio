import styled from 'styled-components'



export const Container = styled.div`
     padding:  6rem 300px ;
     margin-bottom: 2rem;
     

     h1{
        font-size: 48px;
        font-weight: 700;
        color: var(--white);
        font-family: serif;
        border-bottom: 2px solid var(--secondary);
        max-width: 170px;
        
     }
`
export const InputsContainer = styled.div`
    form{
        max-width: 600px;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 4rem;
        
        input{
            margin-bottom: 14px;
            background-color: transparent;
            height: 34px;
            border-radius: 4px;
            outline: none;
            border: 1px solid var(--gray);
            padding: 0 8px;
            color: var(--white);
            
            
        }

        textarea{
            margin-bottom: 14px;
            border-radius: 4px;
            border: 1px solid var(--gray);
            color: var(--white);
            outline: none;
            padding: 8px;
            height: 94px;
            resize: none;
            background-color: transparent;
            
        }
        .btn{
            background-color: var(--secondary);
            color: var(--white);
            font-size: 18px;
            font-weight: 700;
            cursor: pointer;
        }
        .btn:hover{
            background-color: var(--white);
            color: #000;
            transition: 1s;
        }
    }
    
   
`
