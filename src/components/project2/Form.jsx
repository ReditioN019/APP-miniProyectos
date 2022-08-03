import { useForm } from "../../hooks/useForm";


export const Form = ({ setCity }) => {

    const {city, handleChange, onResetForm} = useForm({
        city: ''
    });

    const handleSubmit = e => {
        e.preventDefault();
        setCity(city)
        onResetForm();
    }

    return (
        <form className="d-flex justify-content-center container row" onSubmit={handleSubmit}>

            <div className="col-5">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Ciudad"
                    value={city}
                    name='city'
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-primary col-1">Buscar</button>
        </form>
    )
}
