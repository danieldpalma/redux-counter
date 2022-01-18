import React from 'react';
import { useSelector } from 'react-redux';

function Cabecalho() {
  const contador = useSelector((state) => { return state.counter })
  return (
    <div className='cabecalho'>
      <h3>Contador</h3>
      <div>{contador}</div>
    </div>
  )
}

export default Cabecalho;
