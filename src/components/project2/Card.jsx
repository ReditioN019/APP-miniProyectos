import BeatLoader from "react-spinners/BeatLoader";
import { useFetch } from "../../hooks/useFetch";
import { FiMapPin } from 'react-icons/fi';






export const Card = ({ city = 'Santiago' }) => {

    const { data, loading } = useFetch(city);

    return (
        <div className="d-flex justify-content-center mt-5">
            
            {
                loading ? <BeatLoader />
                    :
                    <div className="card">
                        <div className="card-header">
                            <FiMapPin /> {city} - {data.country}
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">{JSON.stringify(data)}</p>
                                </div>
                                <div className="col-6">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">{JSON.stringify(data)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
            }

        </div>
    )
}
