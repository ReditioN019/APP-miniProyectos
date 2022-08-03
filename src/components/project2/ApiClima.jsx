import { useState } from 'react';
import { WEATHER_API_URL, API_KEY } from './helpers/useFetchCities';
import { TodayWeather } from './components/TodayWeather';
import { Forecast } from './components/Forecast';
import {Search} from './components/Search'

export const ApiClima = () => {

    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    //Se obtiene y setea el tiempo segun la ciudad escogida (searchData)
    const handleOnSearchChange = async(searchData) => {
        const [lat, lon] = searchData.value.split(" "); 
        const currentWeatherFetch = await fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=es&units=metric`)
        const forecastFetch = await fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=es&units=metric`)
    
        const weatherToday = await currentWeatherFetch.json();
        const weatherWeek = await forecastFetch.json();
        
        setCurrentWeather({city: searchData.label, weatherToday});
        setForecast({city: searchData.label, ...weatherWeek});
    }


    return (
        <>
            <h1>Api Clima</h1>
            <hr />

            <div className="container">
                <Search 
                    onSearchChange={handleOnSearchChange}
                />

                { currentWeather && <TodayWeather data={currentWeather}/> }

                { forecast && <Forecast data={forecast}/> }
            </div>
        </>
    )
}






