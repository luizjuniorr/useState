import { Calculadora } from "./components/Calculadora.jsx"
import { MostrarEsconder } from "./components/MostrarEsconder.jsx"

export function App() {

  return(
    <div className="bg-slate-100 p-18 rounded-2xl flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-8 uppercase">Atividade Legal</h1>
      <Calculadora />
      <MostrarEsconder />
    </div>
  )
}