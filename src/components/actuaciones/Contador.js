import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Contador() {

    const contador = useSelector(state => state.numero)
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <h3>{contador}</h3>
                <button onClick={() => dispatch({ type: 'INCREMENTAR' })}>+</button>
                <button onClick={() => dispatch({ type: 'DECREMENTAR' })}>-</button>
                <button onClick={() => dispatch({ type: 'RESET' })}>Volver a 0</button>
                <button onClick={() => dispatch({ type: 'SUMAR10' })}>Sumar 10</button>
            </div>
        </div>
    )
}

export default Contador
