    import React,{useState} from 'react';
    import axios from 'axios'
    

    function Home() {
        const [Ghana, setCountry] = useState("");
        const [Accra, setCity] = useState("");
        const [weather, setWeather] = useState(null);

        
      const handleCountry = (e) => {
       setCountry(e.target.value);
    };

      const handleCity = (e) => {
      setCity(e.target.value);
     };
        
        const handleWeather = () => {
            if (Ghana && Accra) {
              axios
                .get(
                  `http://api.weatherstack.com/current?access_key=e0e75c30cd100898dc0df8c12c78b4f4&query=${Ghana},${Accra}`
                )
                .then((res) => {
                  console.log(res);
                  setWeather(res.data);
                });
            }
          };

        return (
    <div>
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
    )
        }

    export default Home
