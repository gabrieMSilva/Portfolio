import { Cardscontent, Container, Title } from "./style";




export function Cards(props){
    return(
        <Container>
            <Cardscontent>
                <span>{props.icon}</span>
                <Title>{props.name}</Title>       
            </Cardscontent>
        </Container>
    )
}