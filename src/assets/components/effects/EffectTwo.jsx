import { useState, useEffect } from "react";
import { fetchWeatherApi } from 'openmeteo';

function WeatherUpdate() {


    const [coords, setCoords] = useState({ lat: 32.8167, long: 73.8667 }); // kharian
    const [weather, setWeather] = useState(null);
    const [currentCity, setCurrentCity] = useState("Kharian");
    useEffect(() => {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.long}&current_weather=true`;

        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error("Network error");
                return res.json();
            })
            .then((data) => {
                if (!data.current_weather) throw new Error("No current weather found");
                setWeather(data.current_weather);
            })
            .catch((err) => {
                console.error("Weather API error:", err);
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [coords]);



    return (


        <>
            <button onClick={() => {
                setCoords({ lat: 32.8167, long: 73.8667 });
                setCurrentCity("Kharian");
            }}>Kharian</button>
            <button
                onClick={() => {
                    setCoords({ lat: 51.5072, long: -0.1276 });
                    setCurrentCity("London");
                }}
            >London</button>
            <button onClick={() => {
                setCoords({ lat: 24.4667, long: 54.3667 });
                setCurrentCity("Abudhabi");
            }}>Abudhabi</button>
            <button onClick={() => {
                setCoords({ lat: -37.8136, long: 144.9631 });
                setCurrentCity("Melbourne");
            }}> Melbourne</button>
            <p>{currentCity}</p>
            {weather ? (
                <div>
                    <p>Temperature: {weather.temperature}°C</p>
                    <p>Wind Speed: {weather.windspeed} km/h</p>
                    <p>Weather Code: {weather.weathercode}</p>
                </div>
            ) : (
                <p>Loading weather...</p>
            )}
        </>
    )

}

export default WeatherUpdate;