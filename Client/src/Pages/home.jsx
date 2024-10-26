// import React from 'react'
import styled from 'styled-components';
import Hero from '../Components/hero';
import About from '../Components/about';
import Registration from '../Components/registration';

// For CSS styling, follow format below to prevent mergin conflict.
// Make sure you only code on your designated page. Don't Change any other file.*
// delete below when done
const Example_div = styled.div`
  color: red;
`


function Home() {
  return (
    // Import Hero Section First test
    // Import About Section Second
    // Import Registration Section Here
    // In this order
    <div >
      <Hero/>
      <About/>
      <Registration/>
    </div>
  )
}

export default Home
