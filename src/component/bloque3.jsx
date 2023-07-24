import image1 from '../img/targeta1.png'
import image2 from '../img/targeta2.png'

export const Bloque3 = () =>{
    return(
        <div className="bloque3">
            <div className="bloque3_container">
              <div className="bloque3_container_targetas">
                  <div style={{width:'400px',margin:'40px auto 70px auto',paddingTop:'80px'}}>
                  <h1 style={{textAlign:'center',marginBottom:'10px',color:'white'}}>Our Creative Work</h1>
                   <p style={{textAlign:'center',color:'white'}}>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do 
eiusmod tempor incididunt ut labore</p>
                  </div>
                   
                   <div className="bloque3_containar_targetas_targeta">
               

                      <div className="bloque3_targeta_imagen">
                           <img src={image1} alt="" />
                      </div>
                      <div className="bloque3_targeta_parrafo">
                        <h2>Crytop Trading page</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore</p>
                        <button>Read Case Study</button>

                      </div>
                      
                   </div>
                   <div className="bloque3_containar_targetas_targeta" style={{flexDirection:'row-reverse'}}>
                     

                      <div className="bloque3_targeta_imagen">
                           <img src={image2} alt="" />
                      </div>
                      <div className="bloque3_targeta_parrafo">
                        <h2>Crytop Trading page</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore</p>
                        <button>Read Case Study</button>

                      </div>
                      
                   </div>
                   <div className="bloque3_containar_targetas_targeta" >
                     

                      <div className="bloque3_targeta_imagen">
                           <img src={image1} alt="" />
                      </div>
                      <div className="bloque3_targeta_parrafo">
                        <h2>Crytop Trading page</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore</p>
                        <button>Read Case Study</button>

                      </div>
                   </div>
                   <div className='bloque3_boton_contacto'>
                     <a href="https://wa.link/gv9dg9"><button>contactame</button></a>
                   </div>
                   
              </div>
            </div>
        </div>
    )
}