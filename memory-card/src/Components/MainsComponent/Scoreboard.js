import React from 'react';
import styled from 'styled-components'

const Scoreboard=({currentscore,bestscore})=>{
    return(
        <Board>
            <p>Current Score:{currentscore}</p>
            <p>Best Score:{bestscore}</p>
        </Board>
    )
}

const Board=styled.div`
    background-color:lightgreen;
`

export default Scoreboard;