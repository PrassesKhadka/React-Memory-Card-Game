import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Header from '../src/Components/Header';
import Main from '../src/Components/Main';
import Footer from '../src/Components/Footer';
import styles from './App.css';

function App() {
  return(
    <Wrapper>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </Wrapper>
  )
}

const Wrapper=styled.div`
   
`

export default App;
