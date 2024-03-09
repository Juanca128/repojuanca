import React from 'react';
import "../styles/pages/Contacto.css"
import { Link, NavLink } from "react-router-dom";

const Contacto = (props) => {


    return (

        <div className="contactos">

            <div className="contacto01">

                <h2 className="nav3">

                    Contáctanos:

                </h2>

                <form action="" method="" className="formulario">

                    <p className="p_textos">

                        <label for="Nombre"> Nombre</label>
                        <input type="text" name=""></input>



                    </p>
                    <p className="p_textos">

                        <label for="Nombre"> E-Mail</label>
                        <input type="text" name=""></input>



                    </p>
                    <p className="p_textos">

                        <label for="Nombre"> Teléfono</label>
                        <input type="text" name=""></input>



                    </p>
                    <p className="p_textos">

                        <label for="Nombre"> Mensaje</label>
                        <textarea name=""></textarea>

                    </p>
                    <p className="envio">
                        <input type="submit" value="Enviar" />

                    </p>

                </form>
            </div>



            <div className="contacto02">

                <h2 className="nav3">

                    Nuestros vías alternativas de contacto:

                </h2>

                <div className='datos'>
                    <ul>
                        <li>Teléfono: 123456789</li>
                        <li>E-Mail: lunaviolacea@hotmail.com</li>
                        <li>Instagram:</li>
                        <li>Facebook: </li>

                    </ul>

                </div>

            </div>
        </div>
    );
}

export default Contacto;