

export const App = () => {
    return (
        <>
            <h1 className="flex justify-content-center ">Proyectos</h1>
            <div className="shadow-lg p-3 mb-5 bg-body rounded-3 border border-success">
                <p>Mi objetivo en este proyecto demostrar mis conocimientos en ReactJS y tener un registros de mis avances. Mi intención es que a medida que voy aprendiendo y mejorando en los conocimientos de esta librería, iré optimizando el código y aplicando mejores prácticas.</p>
            </div>
            <hr />

            
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Proyecto 1: Calculadora
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            En este proyecto desarrollé una calculadora con el fin de poner a prueba mis conocimientos básicos de ReactJS. 
                            Le añadí todas las validaciones posibles para que no se puedan realizar operaciones incorrectas.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Proyecto 2: Ver el tiempo
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            En este proyecto desarrollé una mini aplicación para consultar el clima según la ciudad escogida.
                            En esta app consulté a dos APIs:
                            <ul>
                                <li>Una de ellas es: <code>https://rapidapi.com/hub</code> la cual me sirvió para obtener las ciudades del mundo, junto al pais y su código.</li>
                                <li>La otra api es la que me permite ver el tiempo de la ciudad escogida, la cual es <code>https://openweathermap.org/api</code>, donde además obtuve los datos del pronóstico del tiempo para los próximos 7 días    </li>
                            </ul>  
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
