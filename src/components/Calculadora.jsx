import { Button } from "./Button"
import { useState } from "react"

export function Calculadora() {
    const [somar, setSomar] = useState(100)

    function aumentar() {
        setSomar(somar+100)
      }
      
      function diminuir() {
        setSomar(somar-100)
      }
      
    return(
        <div className="flex flex-col items-center justify-center mb-2">
            <p className="text-3xl mb-2">Valor: {somar}</p>
                
            <div className="display flex gap-2">
                <Button text="+100" onClick={aumentar} color="green"/>
                <Button text="-100" onClick={diminuir} color="red"/>
            </div>
                
        </div>
    )
}