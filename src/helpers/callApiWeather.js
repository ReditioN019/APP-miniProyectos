import Swal from 'sweetalert2';

export const getCity = async( city ) => {
    try {
        const apiKey = '83a80abfd62f22e0172152d1335aef32'
        const url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&lang=es&q=${city}&units=metric`

        const resp = await fetch(url);
        
        if(!resp.ok){
            Swal.fire({
                title: 'Error!',
                text: `No se encontraron resultados con: ${city.toUpperCase()}`,
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return false;
        }
       
        const {weather, main, wind, sys, name} = await resp.json();

        let resultObj = new Object();
        resultObj.temp = Math.round(main.temp);
        resultObj.temp_max = Math.round(main.temp_max);
        resultObj.temp_min = Math.round(main.temp_min);
        resultObj.humidity = main.humidity;  //! porcent
        resultObj.country = sys.country;
        resultObj.name = name;
        resultObj.wind = Math.round(wind.speed); //! km/h
  
        weather.forEach(item => {
            resultObj.icon =  item.icon;
            resultObj.description = item.description
        })
  
        return resultObj

    } catch (error) {
        return Swal.fire({
            title: "Error!",
            text: `Error de servidor`,
            icon: "error",
        });
    }
}