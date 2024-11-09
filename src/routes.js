import React from "react";

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/contact";
import { Projects } from "./pages/Projects";



export function Rotas(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/projects" element={<Projects/>}/>
        </Routes>
    </BrowserRouter>
    )
}