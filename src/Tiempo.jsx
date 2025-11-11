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
            <div className="tarjeta-tiempo mx auto" style={{ width: "320px"}}>
                
                <input 
                    style={{ width: "200px", marginTop:'5px', textAlign:'center'}}
                    className="entrada-ciudad mx-auto my-2"
                    type="text"
                    placeholder="Ingrese Ciudad"
                    onKeyDown={(e)=>controladorInput(e)} 
                />

                <div className="contenido-tarjeta">
                    <h5 className="titulo-tarjeta">{datosTiempo?.location?.name ?? 'Cargando Ubicacion...'} </h5>

                    {datosTiempo ? (
                        <div className="info-clima">
                            <div className="temperatura-actual">{datosTiempo.current.temp_c} °C</div>
                            <div className="condicion-clima">{datosTiempo.current.condition.text}</div>
                            <img src={datosTiempo.current.condition.icon} alt={datosTiempo.current.condition.text} />
                        </div>
                    ) : (
                        <p className="texto-cargando">Cargando datos del tiempo...</p>
                    )}
                </div>
            </div>
        </>
    )
}