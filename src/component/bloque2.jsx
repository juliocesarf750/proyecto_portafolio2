import imagen1 from '../img/codigo.png';
export const Bloque2 = () => {
    return(
        <div className="bloque2">
            <div className="bloque2_parrafo">
                 <div className="bloque2_parrafo_experiensia">
                    <h1>05</h1>
                 </div>
                 <div className="bloque2_parrafo_contenido">
                    <h1>Years Experience In Field</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>

                 </div>
            </div>
            <div className="bloque2_cards">
                <div className="bloque2_card">
                    <img src={imagen1} alt="" />
                    <h3>Coding y programming</h3>
                </div>

                <div className="bloque2_card">
                    <img src={imagen1} alt="" />
                    <h3>Product y brand designer</h3>
                </div>
            </div>
        </div>
    );
}