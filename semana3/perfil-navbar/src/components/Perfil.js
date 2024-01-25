import React, { useState } from 'react';
import Nota from './Nota';
import '../style/Perfil.css';

function Perfil() {
    const [notas, setNotas] = useState([]);
    const [nuevaNota, setNuevaNota] = useState('');

    const agregarNota = () => {
        if (nuevaNota.trim() === '') return;
        setNotas([...notas, { id: Date.now(), texto: nuevaNota }]);
        setNuevaNota('');
    };

    return (
        <div className='contenedor-principal'>
            <label id='a'>Nombre</label>
            <input id='b' type='text'></input>
            <label id='a'>Apellido</label>
            <input id='b' type='text'></input>
            <label id='a'>Contraseña</label>
            <input id='b' type='password'></input>
            <button className='boton' onClick={agregarNota}>Editar</button>
            {/*<button funClick={()=> click("Editar")} text="Editar"/>*/}
            {notas.map((nota) => (
                <Nota
                    key={nota.id}
                    nota={nota}
                />
            ))}
        </div>
    );
}

export default Perfil;