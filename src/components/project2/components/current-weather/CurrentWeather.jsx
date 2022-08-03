
export const CurrentWeather = () => {
    return (
        <div className="mt-4 d-flex justify-content-center">
            <div className="card mb-3" 
                style={{ maxWidth: "100%", backgroundImage: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(97,186,255,1) 0%, rgba(166,239,253,1) 90.1% )' }}
            >
                <div className="card-header fw-bold">Nueva York -  Estados Unidos (USA)</div>
                <div className="card-body row">
                    <div className="d-flex flex-column justify-content-center col-6">
                        <span className="display-1 fw-bold d-flex flex-column align-items-start justify-content-center">18°C</span>
                    </div>
                    <img alt="clima" src="icons/03d.png" className="w-50" />
                </div>
                <div className="card-body row d-flex justify-content-center">
                    <div className="col-12">
                        <div>
                            <span className="h4 fw-bold">Detalles:</span>
                        </div>

                        <div className="d-flex justify-content-between">
                            <span>Máxima</span>
                            <span>19°</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span>Mínima</span>
                            <span>2°</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span>Viento</span>
                            <span>10 Km/H</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span>Humedad</span>
                            <span>19%</span>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
