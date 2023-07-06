import React from 'react';
import styled from 'styled-components'
import Eachcard from './Eachcard.js';

const Cardflex=({superheroes})=>{
    //run through the array to display
    const wholeCards=superheroes.map((superhero)=>(
        <Eachcard key={superhero.id} superhero={superhero}></Eachcard> 
    ))
    return(
        <div>
            <Wrapper>{wholeCards}</Wrapper>
        </div>
    )
}


const Wrapper=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
`;
export default Cardflex;