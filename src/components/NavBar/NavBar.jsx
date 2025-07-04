import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function NavBar() {
    return (
        <nav style={{ display: "flex", justifyContent: "space-around", backgroundColor: "bisque" }}>
            <p>Logo</p>
            <ul style={{ display: "flex",  gap: "1rem", listStyle: "none" }}>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
            <CartWidget cantidad={2} />
        </nav>
    );
};

export default NavBar;