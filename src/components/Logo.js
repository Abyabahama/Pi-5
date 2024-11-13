import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import  logo from './images/Logo.png'

const Logo = () => {
    return(
        <div className='pt-5 justify-content-center d-flex'>
            <img src={logo} alt="" />
        </div>
    )
}

export default Logo;