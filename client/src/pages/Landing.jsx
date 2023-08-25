import React from 'react'
import styled from 'styled-components'
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom';
import sideimg from '../assets/images/sideimg.jpg'




const Landing = () => {
  return (
    <Wrapper>
   
    <div className='container page'> 
    <div className='info'>  
      <h1> Lawyer  <span> Finding </span> app </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eos magni aliquam eligendi doloribus.
        Perferendis qui, officia, alias laudantium quasi ipsa,
        rovident atque animi fugiat illum expedita.
        Voluptatum esse soluta ipsum.
      </p>
      <Link to ="lawyers" className='btn register-link'>
         Explore Lawyer </Link>
      

     </div>
     <img src={main} alt='job hunt' className='img main-img'/>
     </div>
    </Wrapper>
    
  );
};




export default Landing;