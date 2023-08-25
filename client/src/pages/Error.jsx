import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage';
import img from "../assets/images/not-found.svg";

const Error = () => {
  const error = useRouteError();
  if(error.status === 404){
    return <Wrapper>
      <div>
        <img src={img} alt="not found" />
        <h1>ohh! page not found </h1>
        <p> we can't sem to find the page you are looking for</p>
        <Link to ='/dashboard'>return to home </Link>
      </div>
    </Wrapper>
  }
  return (
    <Wrapper>
    <div>
     <h1>Something went wrong</h1>
    </div>
    </Wrapper>
  );
};

export default Error;