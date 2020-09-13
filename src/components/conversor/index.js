import React from 'react'

function Converter() {
    
}

export default function Conversor(props) {
    const [moedaA_valor, setMoedaA_valor] = React.useState()
    const [moedaB_valor, setMoedaB_valor] = React.useState(false)

    return (
        <div className="conversor">
            <h2>{props.moedaA} para {props.moedaB}</h2>
            <input type="text" onChange={(e) => setMoedaA_valor()}></input>
            <input type="button" value="Converter" onClick={Converter}></input>
            <h2>Valor Convertido</h2>
        </div>
    )
}