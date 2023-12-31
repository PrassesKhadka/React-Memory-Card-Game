import React from 'react';
import {useState,useEffect} from 'react';
import Cardflex from './MainsComponent/Cardflex';
import Scoreboard from './MainsComponent/Scoreboard';
import Winner from './MainsComponent/Winner';

//The main chunk of this application here:defining states(useState)
//passing props and using useEffect hook and other fetching and all 
//logic of this application will be embedded here
const Main=()=>{
    const [superheroes,setSuperheroes]=useState([]);//total superheroes
    const [clickedsuperheroes,setClickedsuperheroes]=useState([]); //clicked superheroes array
    const [currentscore,setCurrentscore]=useState(0);
    const [bestscore,setBestscore]=useState(0);
    const [winner,setWinner]=useState(false);
    
    //using ComponentMounts to fetch data
    //shuffle array after each ComponentMounts
    useEffect(()=>{
        const total=12;
        const setArray=async()=>{
            setSuperheroes(shuffle(await fetchAPI(total)))
        }
        setArray()
    },[])

    useEffect(()=>{
        if(currentscore===12)
        {
            setWinner(true)
        }
    },[currentscore])
    
    //shuffle function
    const shuffle=(superheroes)=>{
        return [...superheroes].sort(()=>Math.floor(Math.random()-0.5))
    }    

    //To fetch data from marvel API
    async function fetchAPI(total)
    {
        //From Marvel Developers portal
        try{
            //from the authentication section of marvel api 
            //http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150
            const publicKey='3565d5cff23f9871c22be17c205e977f'
            const privateKey='ec8d72e9889dd128cf773aec1337deeec9df4a06'
            const baseUrl='https://gateway.marvel.com:443/v1/public/'
            const endpoint='characters'
            const url=`${baseUrl}${endpoint}?ts=1&apikey=${publicKey}&hash=4720e5c7d96f2d070382c1b8aedb6200`;
            const response=await fetch(url,{
                mode:'cors'
            });
            const json=await response.json()
            //this data is an array of objects with each id and name
            const data=json.data.results.slice(0,12).map((item)=>{
                let id=item.id;
                let name=item.name;
                let image=`${item.thumbnail.path}/portrait_fantastic.${item.thumbnail.extension}`
                return {id,name,image}
            });
            return data;
        }
        catch(error){
            console.log(error)
        }
    }

    //handleChange when clicked on each cards
    //superhero=each object which is clicked i.e {id,name,image}
    const handleChange=(superhero)=>{
        console.log(superhero.name)
        if(clickedsuperheroes.includes(superhero.name))
        {
            reset()
        }
        else
        {
            setClickedsuperheroes((prevState)=>[...prevState,superhero.name])
            console.log(clickedsuperheroes)
            const newscore=currentscore+1
            if(newscore>=bestscore)
                setBestscore(newscore)
            setCurrentscore(newscore)
            setSuperheroes(shuffle(superheroes))
        }

    }

    //reset all states and unmount eventListener using useEffect
    const reset=()=>{
        setCurrentscore(0);
        setClickedsuperheroes([]);
    }

    return(
        <div>
            {/* Conditional rendering the win */}
            {winner ? <Winner></Winner>:<Scoreboard currentscore={currentscore} bestscore={bestscore}></Scoreboard>}
            <Cardflex handleChange={handleChange} superheroes={superheroes}></Cardflex>
        </div>
    )
}

export default Main;