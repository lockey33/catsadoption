import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Index";
import {ThemeProvider} from 'styled-components';

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
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </ThemeProvider>
        </Router>
    )
}

export default App;