import React, { useState, useEffect } from 'react'
import './etiqueta.css'

const Etiqueta = () => {

  const [dados, SetDados] = useState([])

  useEffect(() => {
    var data = localStorage.getItem('dados')
    data = JSON.parse(data)
    SetDados(data)
  }, [])

   console.log(dados)

  return(
    <div>
      {dados.map(dados => {
        return(
          <div key={dados.codInt} className="container">
            <p className="inte">{dados.codInt}</p>
            <p className="inte">{dados.bitola}</p>
            <p className="inte">{dados.tonalidade}</p>
            <p className="inte">{dados.quantidade}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Etiqueta