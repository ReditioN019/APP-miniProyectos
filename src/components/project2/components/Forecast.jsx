
const WEEK_DAYS = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

export const Forecast = ({ data }) => {

    const dayInAWeek = new Date().getDay(); //Obtengo el numero del día que nos encontramos
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));


    return (
        <>
            <label className="title fs-1 fw-bold">Pronóstico:</label>

            <div className="row row-cols-1 row-cols-sm-3 row-cols-xl-4 d-flex justify-content-center ">
                {data.list.splice(0, 7).map((item, idx) => (
                    <div className="card text-center p-0 my-1 mx-1" key={idx}
                        style={{ maxWidth: "100%", backgroundImage: "radial-gradient( circle farthest-corner at 1.3% 2.8%,  rgba(239,249,249,1) 0%, rgba(182,199,226,1) 100.2% )" }}
                    >
                        <div className="bg-secondary">
                            <label className="fw-bold text-white">{forecastDays[idx]}</label>
                        </div>
                        <div className="card-body row">
                            <div className="col-6">
                                <img src={`icons/${item.weather[0].icon}.png`} alt="weather" />
                                <label className="fw-bold text-capitalize">{item.weather[0].description}</label>
                            </div>
                            <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                                <label><span className="fw-bold">Temp: </span> {Math.round(item.main.temp)}°C</label>
                                <label><span className="fw-bold">Humedad: </span> {Math.round(item.main.humidity)}%</label>
                                <label><span className="fw-bold">Viento: </span> {Math.round(item.wind.speed)}km/h</label>
                            </div>

                        </div>
                    </div>

                ))}
            </div>


        </>
    )
}
