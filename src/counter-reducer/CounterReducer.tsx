import { useReducer } from "react"

import { counterProps } from "./interfaces/interfaces"
import { counterReducer } from "./state/counterReducer"
import * as actions from './actions/actions';

const INITIAL_STATE: counterProps = {
  previous: 10,
  changes: 15,
  counter: 20
}

export default function CounterReducerComponent() {

    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleReset = () => dispatch(actions.doReset())
    const increaseBy =  (value:number) => dispatch(actions.doIncreaseBy(value))

  return (
    <>
        <h1>Valor contador {counterState.counter}</h1>
        <pre>
          { JSON.stringify(counterState) }
        </pre>
        <button onClick={handleReset}>Reset</button> 
        <button onClick={() => increaseBy(1)}>+ 1</button>
        <button onClick={() => increaseBy(5)}>+ 5</button>
        <button onClick={() => increaseBy(10)}>+ 10</button>
    </>
  )
}