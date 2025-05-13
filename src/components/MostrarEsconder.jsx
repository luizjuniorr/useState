import { useState } from "react"
import { Button } from "./button"



export function MostrarEsconder() {
    const [mostrar, setMostrar] = useState(true)

    function mostrarEsconder() {  
        setMostrar(!mostrar)
    }
    
    return(
        <div>
            {
                mostrar ? (
                <div className="flex flex-col items-center justify-center">
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