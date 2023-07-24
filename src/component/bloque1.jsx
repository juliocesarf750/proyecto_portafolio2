import perfil from '../img/perfil3.png';
export const Bloque1 = () => {
    
    return(
        <div className="bloque1">
            <div className="bloque1_parrafo">
              <h6>Hello! world</h6>
              <h1>I am julio cesar fuentes</h1>
              <h2>{'<Developer>'}</h2>
              <p>estudiante de ing informatica en la UAGRM 6to semestre estudiante de ingles en natural English</p>
              <div className="bloque1_parrafo_botones">
                 <button style={{background:'black',color:'white',width:'100px',height:'50px'}}>Hire Me</button>
                 <button style={{background:'white',color:'black',width:'180px',height:'50px'}}>Download Resume</button>
              </div>
            </div>
            <div className="bloque1_perfil">
                <img src={perfil} alt="" />
            </div>
        </div>
    );
}