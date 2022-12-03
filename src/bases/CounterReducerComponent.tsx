import { useReducer } from "react"

interface counterProps {
  previous: number
  changes: number
  counter: number
}

type counterAction = 
    |{type:"increaseBy", payload:{value: number}}
    |{type:"reset"}

const INITIAL_STATE: counterProps = {
  previous: 10,
  changes: 15,
  counter: 20
}

const counterReducer = (state:counterProps, reducer:counterAction ):counterProps => {
  switch (reducer.type) {
    case 'reset':
       return {
        previous: 0,
        changes: 0,
        counter: 0
      }

    case 'increaseBy':
      return {
        previous: state.counter,
        changes: state.changes + 1,
        counter: state.counter + reducer.payload.value
      }
  }

}

export default function CounterReducerComponent() {

    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleReset = () => dispatch({type: "reset"})
    const increaseBy = (value:number) => dispatch({type: "increaseBy",payload:{value} })

  return (
    <>
        <h1>Valor contador {counterState.counter}</h1>
        <pre>
          { JSON.stringify(counterState)}
        </pre>
        <button onClick={handleReset}>Reset</button> 
        <button onClick={() => increaseBy(1)}>+ 1</button>
        <button onClick={() => increaseBy(5)}>+ 5</button>
        <button onClick={() => increaseBy(10)}>+ 10</button>

    </>
  )
}