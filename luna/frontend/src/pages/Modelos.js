import React from 'react';
import "../styles/pages/Modelos.css"

const Modelos = (props) => {


    return (
        <div className='modelos_w'>

            <div>
                <section className="parrafo3">
                    <h3>
                        Nuestra colección
                    </h3>
                    <p>
                        Aquí podrás conocer la amplia colección de accesorios que ofrecemos, que te diviertas en el recorrido!

                    </p>

                </section>

            </div>

            <div className="colecciones">
                <div className="coleccion">
                    <div>
                        <h3 className="titcol">
                            Pulseras
                        </h3>
                        <p className="navp">
                            Aquí encontraras diversidad de pulseras de colores alegres, livianas, ideales para usar
                            durante
                            todo el año.
                        </p>
                    </div>
                    <img src={'Luna post.png'} className="imgcolecc"  alt=""/>

                </div>
                <div className="coleccion">
                    <img src={'IMG_1476.jpg'} className="imgcolecc"  alt=""/>
                        <div>
                            <h3 className="titcol">
                                Aritos
                            </h3>
                            <p className="navp">
                                En esta sección descubrirás nuestra gran variedad de aritos, algunos con diseños abstractos,
                                otros temáticos, incluso pares de aritos diferentes entre sí pero complementarios en diseño.
                            </p>
                        </div>
                </div>

                <div className="coleccion">
                    <div>
                        <h3 className="titcol">
                            Personalizados
                        </h3>
                        <p className="navp">
                            Diseños únicos realizados a pedido del cliente. Se puede partir de un diseño existente en la
                            colección al cual se le hacen modificaciones, tanto en forma como en color.
                        </p>
                    </div>
                    <img src ={'person.jpg'} className="imgcolecc" alt=""/>

                </div>

            </div>
        </div>

    );
}

export default Modelos;