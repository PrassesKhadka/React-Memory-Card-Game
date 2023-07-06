import React from 'react';
import styled from 'styled-components';

const Eachcard=({superhero})=>{
    return(
        <Wrapper>
            <Image src={superhero.image} ></Image>
            <Name>{superhero.name}</Name>
        </Wrapper>
    )
}

const Wrapper=styled.div`
    display:flex;
    flex-direction:column
    align-items:center;
    flex-wrap:wrap;
`
const Image=styled.img`
`;

const Name=styled.h1`
    
`;

export default Eachcard;