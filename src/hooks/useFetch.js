import { useState, useEffect } from "react";
import { getCity } from '../helpers/callApiWeather'

export const useFetch = ( city ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null,
    })

    const getCities = async () => {     
        
        setState({ ...state, isLoading: true });
        
        const newData = await getCity( city );

        if(!newData){
            return setState({
                ...state,
                isLoading: false, 
                error: true
            })      
        } 

        setState({
            data: newData,
            isLoading: false,
            error: null,
        });

    }

    useEffect(() => {
        getCities();
    }, [city]);

    return { 
        data: state.data, 
        loading: state.isLoading, 
        errorSearch: state.error 
    }
}


