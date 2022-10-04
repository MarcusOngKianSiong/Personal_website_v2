import React from "react";
import { Routes, Route, Link, BrowserRouter} from "react-router-dom";
import Home from '../webpages/home'
import About from '../webpages/about'
import Projects from '../webpages/projects'

export default function Body(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
            </Routes>
        </BrowserRouter>
    )
}
