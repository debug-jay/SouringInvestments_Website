import {BrowserRouter, Routes, Route } from 'react-router-dom';

// Nav Component
import { NAVBAR } from '../components/NavigationComponent';

// Pages
import { HomePage } from './HomePage';
import { SignUpPage } from './SignUpPage';
import { LoginPage } from './LoginPage';

export const RoutesPages = () => {
    return(
        <BrowserRouter>

            <NAVBAR/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}