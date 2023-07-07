import React from 'react';
import styled from 'styled-components';

//Just to showcast header no functionality or else
const Header=()=>{
    return(
        <Navbar>
            <Image src='Marvel_Logo.png'></Image>
        </Navbar>
    )
}

const Navbar=styled.div`
    background-color:red;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-wrap:wrap;

` 
const Image=styled.img`
    height:70px;
`
export default Header;