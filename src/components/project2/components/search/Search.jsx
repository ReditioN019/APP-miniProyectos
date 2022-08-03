import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { CITIES_API_URL, getCitiesOptions } from '../../../../hooks/useFetchCities'

export const Search = ({ onSearchChange }) => {

    const [searchCity, setSearchCity] = useState(null);
    
    //Aqui lo que hago es llamar a la api para buscar las ciudades //! Cambiar a async await
    const loadOptions = (inputValue) => {
        return fetch(
            `${CITIES_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}&languageCode=es`, 
            getCitiesOptions
        )
            .then(response => response.json())
            .then(response => {
                return{
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name} ${city.countryCode} ${city.country}`,
                        }
                    })
                }
            })
            .catch(err => console.error(err));
    }

    const handleOnChange = (searchData) => {
        setSearchCity(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate 
            placeholder="Busca una Ciudad"
            debounceTimeout={600}
            value={searchCity}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}
