import { Calculadora } from "./components/Calculadora.jsx"
import { MostrarEsconder } from "./components/MostrarEsconder.jsx"

export function App() {

  return(
    <div className="bg-slate-100 p-18 rounded-2xl flex flex-col items-center justify-center">
      <Calculadora />
      <MostrarEsconder />
    </div>
  )
}