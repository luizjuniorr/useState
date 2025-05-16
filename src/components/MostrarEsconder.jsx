import { useState } from "react"
import { Button } from "./Button"
import Marcinho from "../assets/marcinho.png"

export function MostrarEsconder() {
    const [mostrar, setMostrar] = useState(true)

    function mostrarEsconder() {  
        if(mostrar === true) {
            setMostrar(false)
            return
        }

        setMostrar(true)
    }
    
    return(
        <div>
            {
                mostrar ? (
                <div className="flex flex-col items-center justify-center">
                    <img src={Marcinho} alt="marcinho" />
                    <p className="mb-2">Marcinho é legal</p>
                    <Button text="Esconder" onClick={mostrarEsconder} color="red"/>
                </div>
                ) : (
                <div className="flex flex-col items-center justify-center">
                    <Button text="Mostrar" onClick={mostrarEsconder} color="green"/>
                </div>
                )
            }
        </div>
    )
}