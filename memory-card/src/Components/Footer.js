import React from 'react';
import styled from 'styled-components';

//Just to showcast footer no functionality or else
const Footer=()=>{
    return(
        <Wrapper>
            <a href='https://github.com/PrassesKhadka/React-Memory-Card-Game/'>
                <Image src='Github_Logo.png'></Image>
            </a>
            <p>Prasses Khadka</p>
        </Wrapper>
    )
}

const Wrapper=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    background-color:white;
    color:black;
    font-size:small;
    font-weight:bold;
`
const Image=styled.img`
    height:35px;
    border-radius:999px;

`
export default Footer;