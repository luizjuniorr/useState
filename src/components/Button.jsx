const colors = {
    red: "bg-red-600",
    green: "bg-green-600",
}

export function Button({ text, onClick, color}) {
    return (
      <button className={`${colors[color]} p-2 rounded-2xl uppercase text-white cursor-pointer`} onClick={onClick}>{text}</button>
    )
  }
  