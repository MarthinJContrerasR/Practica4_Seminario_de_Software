import { useEffect, useState } from "react"
import "./StyleTiempo.css" // Importa el CSS

export function Tiempo(){

    const [datosTiempo, setDatosTiempo] = useState(null);
    const [error, setError] = useState ("");
    const [buscar, datoBuscar] = useState("La Ceiba");

    const controladorInput = (e) => {
        if(e.key === "Enter"){
            datoBuscar(e.target.value);
        }
    }
    
    useEffect(()=>{
        const miTiempo = async () => {
            try {
                const responder = await fetch (`http://api.weatherapi.com/v1/current.json?key=833ef9b76f004ca384f232620252210&q=${buscar}&aqi=no`);
                const datosJson = await responder.json();
                setDatosTiempo(datosJson);
                console.log(datosJson);
            } catch (error) {
                setError(error.message)
            }
        }
        miTiempo();
    },[buscar]);

    return(
        <>
            <div className="weather-card mx auto" style={{ width: "320px"}}>
                
                <input 
                    style={{ width: "200px", marginTop:'5px', textAlign:'center'}}
                    className="weather-input mx-auto my-2"
                    type="text"
                    placeholder="Ingrese Ciudad"
                    onKeyDown={(e)=>controladorInput(e)} 
                />

                <div className="weather-card-body">
                    <h5 className="weather-card-title">{datosTiempo?.location?.name ?? 'Cargando Ubicacion...'} </h5>

                    {datosTiempo ? (
                        <div className="weather-info">
                            <div className="weather-temperature">{datosTiempo.current.temp_c} °C</div>
                            <div className="weather-condition">{datosTiempo.current.condition.text}</div>
                            <img src={datosTiempo.current.condition.icon} alt={datosTiempo.current.condition.text} />
                        </div>
                    ) : (
                        <p className="weather-loading-text">Cargando datos del tiempo...</p>
                    )}
                </div>
            </div>
        </>
    )
}