import React, { useState } from "react";
import axios from "axios";

 function About() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [state,setState]=useState("")
  // <mongodb+srv://DianaJesse:<password>@cluster0.ioiqv.mongodb.net/<dbname>?retryWrites=true&w=majority>

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleWeather = () => {
    if (country && city) {
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=e0e75c30cd100898dc0df8c12c78b4f4&query=${country},${city}`
        )
        .then((res) => {
          console.log(res);
          setWeather(res.data);
        });
    }
  };

 const handleReset=()=>{
   (document.querySelectorAll('input')).forEach(
      input => (input.value= "") )
    setState({itemvalues:[{}]
  })
 }
 {/* let arr1=[1,2,3]
  let arr2=[...arr1,4,5]
  console.log(arr2)

  let arr3=[1,2,3]
  let arr4=[4,5]
  arr3=[...arr3,...arr4]
 console.log(arr3)*/}


  return (
    <div className="App">
      <input type="text" placeholder="Ghana" onChange={handleCountry} />

      <input type="text" placeholder="Accra" onChange={handleCity} />

      <input type="button" value="Search" onClick={handleWeather} />
      <button onClick={handleReset}>Reset</button>
   {
     weather &&(
      <div>
      <h1>{weather.location.country}</h1>
      <h2>{weather.location.name}</h2>
      <img src={weather.current.weather_icons} alt=""/>
      <p>{weather.current.weather_descriptions}</p>
      <p>{weather.current.temperature}</p>
      </div>
      )
   }
    </div>

     


  );
}
export default About