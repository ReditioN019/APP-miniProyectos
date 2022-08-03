import { CurrentWeather } from './components/current-weather/CurrentWeather';
import {Search} from './components/search/Search'


export const ApiClima = () => {

    const handleOnSearchChange = (searchData) => {
        console.log("SEARCHDATA: ",searchData);
    }

    return (
        <>
            <h1>Api Clima</h1>
            <hr />

            <div className="container">
                <Search 
                    onSearchChange={handleOnSearchChange}
                />
                <CurrentWeather />
            </div>
        </>
    )
}






