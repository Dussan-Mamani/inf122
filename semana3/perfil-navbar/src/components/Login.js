import React, { useState } from 'react';
import Nota from './Nota';

function Login() {
    const [notas, setNotas] = useState([]);
    const [nuevaNota, setNuevaNota] = useState('');

    const agregarNota = () => {
        if (nuevaNota.trim() === '') return;
        setNotas([...notas, { id: Date.now(), texto: nuevaNota }]);
        setNuevaNota('');
    };

    return (
        <div className='contenedor-principal'>
            <label id='a'>Usuario</label>
            <input id='b' type='email'></input>
            <label id='a'>Contraseña</label>
            <input id='b' type='password'></input>
            <button className='boton' onClick={agregarNota}>Registro</button>
            <button className='boton' onClick={agregarNota}>Ingresar</button>
            {notas.map((nota) => (
                <Nota
                    key={nota.id}
                    nota={nota}
                />
            ))}
        </div>
    );
}

export default Login;