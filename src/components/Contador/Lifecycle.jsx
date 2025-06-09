import { useState, useEffect } from 'react';
import './Contador.css';

function Lifecycle() {
    const [cantidad, setCantidad] = useState(1);
    const [otroState, setOtroState] = useState(false)
    
    console.log("Fui renderizado!")
 
    useEffect( () => {
        console.log("Tarea de montaje del componente")
    } , []) // Array de dependencias
    // [ ] => solo se ejecuta en el montaje del componente

    useEffect( ()=> {
        console.log("Tarea de update del OtroState")
    }, [otroState])
    // [otroState ] => solo se ejecuta en el montaje y updates del otroState

   /*  useEffect( () => {
        console.log("Me ejecuto en cada render... MAL ❌)
    }) */

    function restarCantidad() {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        };
    };

    function sumarCantidad() {
        if (cantidad < 10) {
            setCantidad(cantidad + 1)
        };
    };


    return (
        <div style={{ display: "flex", gap: "1rem", margin: "1rem 0" }}>
            <button className="btn btn-secondary" onClick={restarCantidad}>-</button>
            <p>{cantidad}</p>
            <button className="btn btn-secondary" onClick={sumarCantidad}>+</button>
            <button onClick={ () => setOtroState(true)}>Tarea compleja</button>
        </div>
    );
};

export default Lifecycle;