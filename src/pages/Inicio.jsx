import { Tiempo } from "../Tiempo";
import "./Inicio.css"; // Importamos el CSS

export function Inicio(){
    return(
        <div className="pagina-inicio">
            <h1 className="titulo-principal">PAGINA PRINCIPAL</h1> 
            
            <div className="contenedor-secciones">                
                <div className="container text-center contenedor-tarjetas">
                    <div className="row">
                        <div className="col tarjeta-info">
                            <h3 className="titulo-tarjeta">Conversión de Divisas</h3>
                            <p className="texto-tarjeta">Las divisas son importantes porque facilitan el comercio y las inversiones internacionales, permiten la conversión de monedas para transacciones transfronterizas, actúan como indicadores de la salud económica de un país y ofrecen oportunidades para la diversificación de inversiones y la protección contra riesgos. Su función principal es actuar como un medio de pago global y permitir el funcionamiento fluido de la economía mundial.</p>
                        </div>
                        <div className="col tarjeta-info">
                            <h3 className="titulo-tarjeta">Climatologia</h3>
                            <p className="texto-tarjeta">El clima afecta casi todos los aspectos de nuestras vidas, desde nuestras fuentes de alimentos hasta nuestra infraestructura de transporte, desde la ropa que usamos hasta los lugares a los que vamos de vacaciones. Tiene un efecto enorme en nuestros medios de vida, nuestra salud y nuestro futuro. Clima es el patrón a largo plazo de las condiciones climáticas en cualquier lugar en particular.</p>
                        </div>
                        <div className="col tarjeta-info">
                            <h3 className="titulo-tarjeta">Clientes</h3>
                            <p className="texto-tarjeta">Los clientes son cruciales para una empresa porque son la fuente de sus ingresos, el motor de su crecimiento y una guía para la innovación y la mejora del negocio. Su importancia radica en que sin ellos una empresa no existiría, ya que satisfacen sus necesidades y resuelven problemas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}