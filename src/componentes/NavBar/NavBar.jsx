import CardWidget from '../CardWidget/CardWidget';
import './NavBar.css';

function NavBar() {
  return (
    <nav style={{display: "flex", justifyContent:"space-around"}}>
        <p>Entrega N°1 React</p>
        <ul style={{display: "flex", listStyle:"none", gap:"20px"}}>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Contactos</li>
        </ul>
        <CardWidget cantidad={0} />
    </nav>
  );
}

export default NavBar;