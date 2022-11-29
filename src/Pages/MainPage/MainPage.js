import React from 'react';
import Home from './Home';
import About from './About';

const MainPage = () => {
return (
    <div className='mainpage-container'>
        <div className='header'>
            <div className='logo'>
                <h1>LOGO</h1>
            </div>
            <div className='nav'>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#about'>About Us</a></li>
                    <li><a href='#'>FAQ</a></li>
                    <li><a href='#'>Contact Us</a></li>
                </ul>
            </div>
        </div>
        <Home/>
        <hr/>
        <About/>
        <hr/>
    </div>
    );
    
};

export default MainPage;