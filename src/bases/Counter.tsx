import { useState } from "react"

interface Props {
    initialValue?: number
}

export default function Counter({initialValue = 0}:Props) {

    const [counter, setCounter] = useState(initialValue)

    const handleClick = () => setCounter(prev => prev + 1)

  return (
    <>
        <h1>Valor contador {counter}</h1>
        <button onClick={handleClick}>+ 1</button> 
    </>
  )
}