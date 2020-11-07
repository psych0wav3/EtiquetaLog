import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import './Main.css'



const Main = () => {

  const [interno, setInterno] = useState()
  const [bitola, setBitola] = useState()
  const [tonalidade, setTonalidade] = useState()
  const [quantidade, setQuantidade] = useState()

  const history = useHistory()

  function handleData() {
    var data = [interno, bitola, tonalidade, quantidade]
    data = JSON.stringify(data)
    localStorage.setItem('dados', data)
    history.push('/etiqueta')
  }

  return (
    <div className="container">
      <div className="form-cotent">
        <input type="text" onChange={(e) => setInterno(e.target.value)} className="form int" placeholder="Digite o codigo interno" />
        <input type="text" onChange={(e) => setBitola(e.target.value)} className="form bit" placeholder="Digite a  bitola" />
        <input type="text" onChange={(e) => setTonalidade(e.target.value)} className="form tol" placeholder="Digite a  tonalidade" />
        <input type="text" onChange={(e) => setQuantidade(e.target.value)} className="form quant" placeholder="Digite a  quantidade" />
        <button className="form btn" onClick={handleData} >Gerar Etiqueta</button>
      </div>    
    </div>
  );
}

export default Main;
