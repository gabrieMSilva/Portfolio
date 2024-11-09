import { Container, ResumeBtn, Subtext, Text, Title } from "./style";

import resume from '../../assets/resume.pdf'


export function Banner(){
    return(
        <Container>
            <Title>
               <h2>
                    Hello, my name is Gabriel
                </h2> 
            </Title>
            <Text>
                <h1>I make websites.</h1>
                
            </Text>
            <Subtext>
                <p>
                    I’m a front-end developer, 
                    I also write about the web on my blog and elsewhere.
                </p>
                
            </Subtext>
            <ResumeBtn>
            <a href={resume} download="Resume">
                    <button>Resume</button>

                </a>

            </ResumeBtn>
        </Container>
    )
}