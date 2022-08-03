
export const TodayWeather = ({ data }) => {

    const { main, wind, weather } = data.weatherToday
    
    return (
        <div className="mt-4 d-flex justify-content-center">
            <div className="card mb-3" 
                style={{ maxWidth: "100%", backgroundImage: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(97,186,255,1) 0%, rgba(166,239,253,1) 90.1% )' }}
            >
                <div className="card-header fs-5 fw-bold">{data.city}</div>
                <div className="card-body row">
                    <div className="d-flex flex-column justify-content-center col-6">
                        <span className="display-1 fw-bold d-flex flex-column align-items-start justify-content-center">{Math.trunc(main.temp)}°C</span>
                        <span className="fw-bold p-2 fs-6">{weather[0].description}</span>
                    </div>
                    <img alt="clima" src={`icons/${weather[0].icon}.png`}  className="w-50" />
                </div>
                <div className="card-body row d-flex justify-content-center">
                    <div className="col-12">
                        <div>
                            <span className="h4 fw-bold">Detalles:</span>
                        </div>

                        <div className="d-flex justify-content-between">
                            <span>Máxima</span>
                            <span>{Math.trunc(main.temp_max)}°C</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span>Mínima</span>
                            <span>{Math.trunc(main.temp_min)}°C</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span>Viento</span>
                            <span>{Math.round(wind.speed)} Km/h</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span>Humedad</span>
                            <span>{main.humidity}%</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
