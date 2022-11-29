import React from 'react';
import {useNavigate} from 'react-router-dom';

function Home()
{
    const navigate = useNavigate();
    const navigateNextPage = () => {
        navigate('/nextpage');
      };

    return(
        <div id='home' className='home-container'>
            <h1>LOGO</h1>
            <button className='start-button' onClick={navigateNextPage}>START</button>
        </div>
    );
}
export default Home;