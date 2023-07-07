import React from 'react';
import styled from 'styled-components';

const Winner=()=>{
    return(
        <Wrapper>
            <h1>Congratulations!!!</h1>
            <h1>You are the winner!!!</h1>
        </Wrapper>
    )
}

const Wrapper=styled.div`
    background-color:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:red;
    padding:5px;
`
export default Winner;