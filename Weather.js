import Fetch from "./Weather-fetch";
import React from "react"; 
import { useState } from "react";
function App(){

    const[query,setQuery]=useState("")
    const[weather,setWeather]=useState({})

    const handleChange=(e)=>{
        setQuery(e.target.value)
    }

    const search=  async(e)=>{
            if(e.code==="Enter"){
                const data= await Fetch(query)
                setWeather(data)
            }

    } 
    return(
        <div>
            <input type="text" value={query} onChange={handleChange} onKeyPress={search} />
            {weather.main &&
        <div>
            <h3>{weather.name}</h3>
            <p>{weather.sys.country}</p>    
            <div>
                <span>{weather.main.temp}</span>
                <p>&deg;C</p>
            </div>
            <div>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`weather.weather[0].description`} /> 
                <p>{weather.weather[0].description}</p>
            </div>      
        </div>
}
        </div>
    )
}                                                           // sys --> to get the country code 
export default App;