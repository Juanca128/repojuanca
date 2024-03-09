import React from 'react';
import "../styles/pages/Nosotros.css"

const Nosotros = (props) => {


    return (
        <div className='nosotros_w'>
            <div>
                <section className="parrafo1">
                    <h3>
                        Luna Violácea - breve historia
                    </h3>
                    <p> Somos un pequeño equipo ubicado en Argentina que se dedica a la creación y fabricación
                        de accesorios de distinto tipo. Desde hace tiempo confecciono diversas artesanías que
                        vendía localmente, pero desde el 2023 queremos aumentar el alcance de nuestros productos
                        y desarrollar una mayor cantidad de modelos, con nuevas técnicas y materiales modernos.
                        Participamos en ferias locales, y estamos fortaleciendo nuestra presencia en las redes
                        sociales y construyendo un nuevo sitio para darnos a conocer.
                    </p>

                </section>

            </div>

            <div className="ilustraciones">
                <div className="ilustrado01">
                    <h3 className="nav3">
                        Pulseras
                    </h3>
                    <img src={'intro_1.jpg'} className="claseimground" alt="" />
                    <p className="navp">
                        Descripción pendiente
                    </p>

                </div>
                <div className="ilustrado01">
                    <h3 className="nav3">
                        Esotéricos
                    </h3>

                    <img src={'intro_2.jpg'} className="claseimground" alt="" />
                    <p className="navp">
                        Descripción pendiente
                    </p>
                </div>

                <div className="ilustrado01">
                    <h3 className="nav3">
                        Astro
                    </h3>

                    <img src={'intro_3.jpg'} className="claseimground" alt="" />
                    <p className="navp">
                        Descripción pendiente
                    </p>
                </div>

                <div className="ilustrado01">
                    <h3 className="nav3">
                        Random
                    </h3>

                    <img src={'intro_4.jpg'} className="claseimground" alt="" />
                    <p className="navp">
                        Descripción pendiente
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Nosotros;