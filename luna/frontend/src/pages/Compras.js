import React from 'react';
import "../styles/pages/Compras.css"

const Compras = (props) =>{
    

    return(
        
        <div className="principal">

                <div>
                    <section className="parrafo1">
                        <h3>
                            Tienda virtual - Compras
                        </h3>
                        <p> En esta sección puedes realizar el encargo de los modelos que quieras comprar. Una vez
                            realizado el encargo,
                            nos comunicaremos contigo vía e-mail para definir los detalles del pago y la entrega de los
                            artículos.
                        </p>

                    </section>

                </div>

                <div className="ilustraciones">
                    <div className="ilustrado">
                        <h3 className="nav3">
                            Serpiente luminosa A
                        </h3>
                        <img src={'IMG_1272.jpg'} className="claseimgrounded" alt=""/>

                        <form action="" method="" className="formulario_compra">

                            <p class="p_textos">

                                <label for="E-Mail"> E-mail</label>
                                <textarea name="email"></textarea>

                            </p>
                            <p className="envio">
                            <input type="submit" value="Comprar"/>                                
                            </p>
                        </form>


                    </div>

                    <div className="ilustrado">
                        <h3 className="nav3">
                            Perlas de fuego
                        </h3>

                        <img  src={'col_01.jpg'} className="claseimgrounded" alt=""/>

                        <form action="" method="" className="formulario_compra">

                            <p className="p_textos">

                                <label for="E-Mail"> E-mail</label>
                                <textarea name="email"></textarea>

                            </p>
                            <p className="envio">
                            <input type="submit" value="Comprar"/>  
                            </p>

                        </form>
                    </div>

                    <div className="ilustrado">
                        <h3 className="nav3">
                            Fases lunares
                        </h3>

                        <img  src={'IMG_1291.jpg'} className="claseimgrounded" alt=""/>
                        <form action="" method="" className="formulario_compra">

                            <p className="p_textos">

                                <label for="E-Mail"> E-mail</label>
                                <textarea name="email"></textarea>

                            </p>
                            <p className="envio">
                            <input type="submit" value="Comprar"/>    
                            </p>

                        </form>
                    </div>

                </div>

            </div>
    );
}

export default Compras;