import React from 'react';

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
                        <img src="pic_trulli.jpg" alt="Italian Trulli"/>
                        <p>Test</p>
                    </div>
                    <div className='member2'>
                        <p>Test</p>
                    </div>
                    <div className='member3'>
                        <p>Test</p>
                    </div>
                    <div className='member4'>
                        <p>Test</p>
                    </div>
                    <div className='member5'>
                        <p>Test</p>
                    </div> 
                </div>
            </div>
        </div>
    );
}
export default About;