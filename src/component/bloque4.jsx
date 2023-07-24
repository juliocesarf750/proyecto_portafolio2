import imagen1 from '../img/bloque4.png';
import imagen2 from '../img/imagen5.png';
export const Bloque4 = () =>{
    return(
        <div className="bloque4">
            <div className="bloque4_container">
               <div className="bloque_container_titulo">
                   
                <img src={imagen2} alt="" /> <h1>What People Are Saying <br/> About My Work</h1>
               </div> 
               <div className="bloque_container_parrafo_imagen">
                               <div className="bloque_container_parrafo">
                                      <p>Learn UX Design is a video course. This means you’re watching my screen as I do design work on dozens of real-world projects. Some are based on my actual client work.</p>
                            
                               </div>
                               <div className="bloque_container_imagen">
                                <img src={imagen1} alt="" />
                               </div>
               </div>   
            </div>
            
        </div>
    );
}