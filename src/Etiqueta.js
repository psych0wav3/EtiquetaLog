import React, { useEffect, useState } from 'react'
import './etiqueta.css'


const Etiqueta  = () => {

    const [data, setData] = useState([])

    useEffect(() => {
       async function getData() {
        var dados = await localStorage.getItem('dados')
        dados =  await JSON.parse(dados)
       setData(dados)
       }
       getData()
    }, [])

    console.log(data)

    return(
        <div>
            <div className="container">
                
                        <div className="card">
                            <p className="inte">{data[0]}</p>
                            <p className="inte">{data[1]}</p>
                            <p className="inte">{data[2]}</p>
                            <p className="inte">{data[3]}</p>
                        </div>
            </div>
        </div>
    )
}

export default Etiqueta