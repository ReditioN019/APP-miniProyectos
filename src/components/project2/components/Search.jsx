import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { CITIES_API_URL, getCitiesOptions } from '../helpers/useFetchCities'

export const Search = ({ onSearchChange }) => {

    const [searchCity, setSearchCity] = useState(null);

    //Se llama a la api para buscar las ciudades 
    const loadOptions = async (inputValue) => {
        const url = `${CITIES_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}&languageCode=es`
        const resp = await fetch(url, getCitiesOptions);
        const response = await resp.json();

        return {
            options: response.data.map((city) => {
                return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name} - ${city.country} (${city.countryCode})`,
                }
            })
        }
    }

    const handleOnChange = (searchData) => {
        setSearchCity(searchData);
        onSearchChange(searchData);
    }

    return (
        <div style={{ width: "60%", margin: '0 auto' }}>
            <AsyncPaginate
                placeholder="Busca una Ciudad"
                debounceTimeout={900}
                value={searchCity}
                onChange={handleOnChange}
                loadOptions={loadOptions}
            />
        </div>

    )
}
