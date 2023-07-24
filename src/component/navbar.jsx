import { Link } from "react-router-dom";

export const Navbar = () =>{
    return (
        <header className="cabeza">
           <div className="container">
               <div className="logo">
                  <h1>LOGO</h1>
               </div>
               <div className="listas">
                 <ul>
                    <li>
                      <Link className="L">Inicio</Link>
                    </li>

                    <li>
                       <Link className="L">Lenguajes</Link>
                    </li>

                       
                    <li>
                       <Link className="L">Proyectos</Link>
                    </li>
                    <li>
                       <Link className="L">contactos</Link>
                    </li>
                 </ul>

               </div>

           </div>
        </header>
    );
}