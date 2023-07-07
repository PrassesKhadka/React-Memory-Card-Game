import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Wrapper from '../src/Components/Wrapper'
import Header from '../src/Components/Header';
import Main from '../src/Components/Main';
import Footer from '../src/Components/Footer';
import styles from './App.css';

function App() {
  const [showcomponent,setShowcomponent]=useState(true)
  const handleChange=()=>{
    setShowcomponent(false)
  }    

  return(
    <div>
      {/* Conditional rendering in react */}
      {showcomponent &&<Wrapper handleChange={handleChange}></Wrapper>}
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default App;
