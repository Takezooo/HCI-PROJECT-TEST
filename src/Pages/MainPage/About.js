import React, {useState} from 'react';
import Dave from '/DaveJornales/Documents/test/project-hci-test/src/assets/developers-pictures/dave.jpg'
import Jeanne from '/DaveJornales/Documents/test/project-hci-test/src/assets/developers-pictures/jeanne.jpg'
import Shew from '/DaveJornales/Documents/test/project-hci-test/src/assets/developers-pictures/sherwin.jpg'
import Nenic from '/DaveJornales/Documents/test/project-hci-test/src/assets/developers-pictures/arsenic.jpg'
import Pat from '/DaveJornales/Documents/test/project-hci-test/src/assets/developers-pictures/pat.jpg'

function About()
{
    const [show1,setShow1]=useState(true);
    const [show2,setShow2]=useState(false);
    const [show3,setShow3]=useState(false);
    const [show4,setShow4]=useState(false);
    const [show5,setShow5]=useState(false);
    const daveQuote = () =>
    {
        setShow1(true);
        setShow2(false);
        setShow3(false);
        setShow4(false);
        setShow5(false);
    }
    const shewQuote = () =>
    {
        setShow2(true);
        setShow1(false);
        setShow3(false);
        setShow4(false);
        setShow5(false);
    }
    const jinanQuote = () =>
    {
        setShow3(true);
        setShow1(false);
        setShow2(false);
        setShow4(false);
        setShow5(false);
    }
    const nenicQuote = () =>
    {
        setShow4(true);
        setShow1(false);
        setShow2(false);
        setShow3(false);
        setShow5(false);
    }
    const patQuote = () =>
    {
        setShow5(true);
        setShow1(false);
        setShow2(false);
        setShow3(false);
        setShow4(false);
    }
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
                        <img onMouseOver={daveQuote} src={Dave} alt="Dave"/>
                        <p>Dave Jornales</p>
                    </div>
                    <div className='member2'>
                        <img onMouseOver={shewQuote} src={Shew} alt="Sherwin"/>
                        <p>Sherwin Mendez</p>
                    </div>
                    <div className='member3'>
                        <img onMouseOver={jinanQuote} src={Jeanne} alt="Jeanne"/>
                        <p>Jeanne Caballes</p>
                    </div>
                    <div className='member4'>
                        <img onMouseOver={nenicQuote} src={Nenic} alt="Arsenic"/>
                        <p>Arsenic Salangsang</p>
                    </div>
                    <div className='member5'>
                        <img onMouseOver={patQuote} src={Pat} alt="Patrick"/>
                        <p>Patrick Castro</p>
                    </div> 
                </div>
                <div className='quotes'>
                        {show1?<div className='dave-quote'>
                            <p className='dave-quoteContent'> “When everything seems to be going against you, 
                            remember that the airplane takes off against the wind, not with it” </p>
                            <p className='dave-quoteAuthor'>- Henry Ford</p>
                        </div>:null}
                        {show2?<h1>Testing2</h1>:null}
                        {show3?<h1>Testing3</h1>:null}
                        {show4?<h1>Testing4</h1>:null}
                        {show5?<h1>Testing5</h1>:null}
                </div>
            </div>
        </div>
    );
}
export default About;