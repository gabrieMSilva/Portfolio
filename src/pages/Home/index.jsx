import { Banner } from "../../Components/banner";
import { Contact } from "../../Components/contact";
import { Footer } from "../../Components/footer";
import { Header } from "../../Components/header";
import { Skills } from "../../Components/Skills";






export function Home(){
    return(
        <>
            <Header/>
            <Banner/>
            <Skills/>
            <Contact/>
            <Footer/>
        </>
        
   
    )
}