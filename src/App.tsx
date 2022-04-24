import React from "react";
import {ThemeProvider} from 'styled-components';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Index";
import CatsDetails from "./components/Details/CatsDetails";
import { ModalProvider} from "styled-react-modal";

const theme = {
    breakpoints: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 994,
        xl: 1200
    }
};

const App = () => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <ModalProvider>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/details/:id" element={<CatsDetails/>}/>
                    </Routes>
                </ModalProvider>
            </ThemeProvider>
        </Router>
    )
}

export default App;