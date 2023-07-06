import React from 'react';
import styled from 'styled-components'
import Eachcard from './Eachcard.js';

const Cardflex=({superheroes,handleChange})=>{
    //run through the array to display
    const wholeCards=superheroes.map((superhero)=>(
        <Eachcard key={superhero.id} handleChange={handleChange} superhero={superhero}></Eachcard> 
    ))
    return(
        <Wrapper>{wholeCards}</Wrapper>
    )
}


const Wrapper=styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-wrap:wrap;
    background-color:lightblue;
`;
export default Cardflex;