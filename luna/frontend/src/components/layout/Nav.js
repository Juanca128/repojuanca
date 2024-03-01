import './Nav.css';

const Nav = (props) => {

    return (
        <div className="navi">
            <a
                className="navi_link"
                href="nosotros.html"
                target="_blank"
                rel="noopener noreferrer"
            >
                Nosotros:</a>
                <a
                className="navi_link"
                href="coleccion.html"
                target="_blank"
                rel="noopener noreferrer"
            >
                Colección:</a>
                <a
                className="navi_link"
                href="compras.html"
                target="_blank"
                rel="noopener noreferrer"
            >
                Compras:</a>
                <a
                className="navi_link"
                href="contacto.html"
                target="_blank"
                rel="noopener noreferrer"
            >
                Contacto:</a>


        </div>
    );
}

export default Nav;