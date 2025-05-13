import { useState } from "react"

export function App() {
  const [somar, setSomar] = useState(100)

  const [mostrar, setMostrar] = useState(Boolean(true))

  function aumentar() {
    setSomar(somar+100)
  }

  function mostrarEsconder() {
    botao = document.querySelector(".botao")
    
    if (mostrar == "True") {
      botao.innerText = `Mostrar`
    } else (
      botao.innerText = `Esconder`
    )
  }

  return(
    <div className="bg-slate-100 p-18 rounded-2xl flex flex-col items-center justify-center">

      <div className="flex flex-col items-center justify-center mb-2">
        <p className="text-3xl mb-2">Valor: {somar}</p>
        <button className="bg-green-600 p-2 rounded-2xl uppercase text-white" onClick={aumentar}>Somar 100</button>
      </div>

      <div className="flex flex-col items-center justify-center">
        <p>Marcinho é legal</p>
        <button className="botao bg-green-600 p-2 rounded-2xl uppercase text-white" onClick={mostrarEsconder}>Esconder</button>
      </div>
    </div>
  )
}