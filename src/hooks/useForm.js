import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
    
    const [formState, setFormState] = useState( initialForm );

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setFormState( state => ({
            ...state,
            [name]: value
        }));
    }

    //Reset del formState
    const onResetForm = () => setFormState(initialForm)
    
    return {
        ...formState, //*desestructuro los valores que tiene el objeto de formState (username, email, password)
        formState,
        handleChange, 
        onResetForm
    }
}
