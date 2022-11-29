import React from 'react';
import Dave from '/DaveJornales/Documents/test/project-hci-test/src/assets/developers-pictures/dave.jpg'
import Jeanne from '/DaveJornales/Documents/test/project-hci-test/src/assets/developers-pictures/jeanne.jpg'
import Shew from '/DaveJornales/Documents/test/project-hci-test/src/assets/developers-pictures/sherwin.jpg'
import Nenic from '/DaveJornales/Documents/test/project-hci-test/src/assets/developers-pictures/arsenic.jpg'
import Pat from '/DaveJornales/Documents/test/project-hci-test/src/assets/developers-pictures/pat.jpg'

function About()
{
    return(
        <div id='about' className='about-container'>
            <div className='about-header'>
                <h1>About Us</h1>
                <hr/>
            </div>
            <div className='aboutUs-p'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. 
                </p>
            </div>
            <div className='about-developer'>
                <h2>Developers</h2>
                <div className='about-developer-pic'>
                    <div className='member1'>
                        <img src={Dave} alt="Dave"/>
                        <p>Dave Jornales</p>
                    </div>
                    <div className='member2'>
                        <img src={Shew} alt="Sherwin"/>
                        <p>Sherwin Mendez</p>
                    </div>
                    <div className='member3'>
                        <img src={Jeanne} alt="Jeanne"/>
                        <p>Jeanne Caballes</p>
                    </div>
                    <div className='member4'>
                        <img src={Nenic} alt="Arsenic"/>
                        <p>Arsenic Salangsang</p>
                    </div>
                    <div className='member5'>
                        <img src={Pat} alt="Patrick"/>
                        <p>Patrick Castro</p>
                    </div> 
                </div>
            </div>
        </div>
    );
}
export default About;