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
    flex-direction:column;
    flex-wrap:wrap;
    padding:20px;
`
const Image=styled.img`
    height:150px;
    width:150px;
`;

const Name=styled.p`
    
`;

export default Eachcard;