import {createGlobalStyle} from 'styled-components'



export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        --primary: #0E141B;
        --secondary: #FF5277;
        --gray: #d9d9d9;
        --white: #fff;
    }

    body{
        background-color: var(--primary);
        color: var(--secondary);
        font-size: 1.2rem;
        font-weight: 400;
        font-family: 'Dosis',sans-serif;
    }
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }

`