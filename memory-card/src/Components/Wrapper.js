import React from 'react';
import {useState,useEffect} from 'react';
import styled from 'styled-components';
import styles from '../../src/App.css';

//Popup appear
const Wrapper=({handleChange})=>{
    return(
        <Instruction>
            <MessageBox>
                <h2>How to play:</h2>
                <Message>Don't click on the same card twice.</Message>
                <Ok onClick={handleChange}>Ok</Ok>
                <h1>Prasses Khadka</h1>
            </MessageBox>
        </Instruction>
    )
}

const Instruction=styled.div`
    position:fixed;
    height:100%;
    width:100%;
    background-color:rgba(255,2255,255,0.3);
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
`
    
const MessageBox=styled.div`
    border:1px solid black;
    border-radius:5px;
    height:300px;
    padding:25px;
    background-color:#fff;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
`

const Message=styled.p`
    margin:25px;
    font-weight:bold;
    color:red;
`

const Ok=styled.button`
    border:1px solid black;
    border-radius:25px;
    height:40px;
    width:60px;
    margin-bottom:25px;
    background-color:black;
    color:white;
`

export default Wrapper;