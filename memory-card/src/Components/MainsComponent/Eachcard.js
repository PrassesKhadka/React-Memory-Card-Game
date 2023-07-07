import React from 'react';
import styled from 'styled-components';

const Eachcard=({superhero,handleChange})=>{
    return(
        <Wrapper onClick={()=>handleChange(superhero)}>
            <Image src={superhero.image}></Image>
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
    border:1px solid white;
    box-shadow: 20px 20px 14px rgba(0,0,0,0.1);
`;

const Name=styled.p`
    padding:5px;
`;

export default Eachcard;