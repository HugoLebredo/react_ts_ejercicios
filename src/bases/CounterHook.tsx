import useCounter from '../hooks/useCounter';


export const CounterHook = () => {

  const {counter,element2Animate, handleClick } = useCounter({maxCount: 20})

  return (
    <>
        <h1 >Valor Counter Hook</h1>
        <h2 ref = {element2Animate}>{counter}</h2>
        <button onClick={handleClick}>+ 1</button> 
    </>
  )
}