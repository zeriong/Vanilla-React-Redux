import React from "react";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

export function App() {
    return (
            <Router basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/:id" element={<Detail/>}/>
                </Routes>
            </Router>
    )
}