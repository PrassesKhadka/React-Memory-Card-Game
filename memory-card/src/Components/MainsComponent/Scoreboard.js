import React from 'react';
import styled from 'styled-components'

const Scoreboard=({currentscore,bestscore})=>{
    return(
        <Board>
            <Current>Current Score:{currentscore}</Current>
            <Best>Best Score:{bestscore}</Best>
        </Board>
    )
}

const Board=styled.div`
    background-color:red;
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-wrap:wrap;
    padding:10px;
`

const Current=styled.p`
    border:1px solid black;
    border-radius:25px;
    padding:15px;
    background-color:white;
    color:blue;
`
const Best=styled.p`
    border:1px solid black;
    border-radius:25px;
    padding:15px;
    background-color:white;
    color:red;
`

export default Scoreboard;