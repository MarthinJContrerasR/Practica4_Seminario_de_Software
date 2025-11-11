import { useState, useEffect, use, useEffectEvent } from "react"
import "./ListaUsuarios.css";
import { Tarjeta } from "../components/Card";

export function Usuarios(){
    const [usuarios, setUsuarios]=useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(()=>{

        const mostrarUsuario = async () => {
           try{
               const usuarios = await fetch("https://jsonplaceholder.typicode.com/users");
               const datosJson = await usuarios.json();
               // console.log(datosJson);
               setUsuarios(datosJson);                           
               setCargando(false);
            } 
            catch(err){
                setError("Hubo un problema con fetch");   
                // console.log(err.message); 
            }
            finally{
                // setCargando(false);
            }
        } 

        mostrarUsuario();

    },[]);

    if(cargando){
        return(<span className="loader"></span>)
    }

    if(error){
        return(<h2>{error}</h2>);
    }

    return( 
        (<div style={{display:"flex", flexWrap:"wrap", gap:"10px"}}>            
                {
                    usuarios.map((user)=>{
                        // return <li key={user.id}>{user.name} - {user.address.city}</li>
                        return <Tarjeta key={user.id} usuario={user}></Tarjeta>
                    })
                }            
        </div>
        )
    );
}


