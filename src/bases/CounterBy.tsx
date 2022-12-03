import { useState } from "react"

interface Props {
    initialValue?: number
}

interface CounterState {
    clicks: number,
    counter: number
}

export default function CounterBy({initialValue = 0}:Props) {

    const [counterState, setCounterState] = useState<CounterState>({
        counter: initialValue,
        clicks: 0
    })

    const handleClick = (value:number) => setCounterState(({clicks, counter}) => (
         {
            counter: counter + value,
            clicks: clicks + 1
        })
    )

    const {counter, clicks} = counterState

    return (
    <>
        <h1>Valor CounterBy {counter}</h1>
        <h1>Valor clicks {clicks}</h1>
        <button onClick={() => handleClick(1)}>+ 1</button> 
        <button onClick={() => handleClick(5)}>+ 5</button> 
    </>
  )
}