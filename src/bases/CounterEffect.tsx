import {gsap} from "gsap"
import { useEffect, useRef, useState } from "react"

const MAXIMUN_COUNT = 10

export default function CounterEffect() {

    const [counter, setCounter] = useState(5)
    const counterElement = useRef<HTMLHeadingElement>(null)

    const handleClick = () => setCounter( prev => Math.min(prev + 1, MAXIMUN_COUNT))

    useEffect(() => {

       if (counter < MAXIMUN_COUNT) return

        console.log("%cSe llegó al valor máximo ","background-color:black; color:red;")

        const tl = gsap.timeline()

        tl.to( counterElement.current, {y:-10, duration: 0.2, ease: 'ease.out'} )
          .to( counterElement.current, {y:0, duration: 1, ease: 'bounce.out'})


    },[counter])

  return (
    <>
        <h1 >Valor Counter Effect</h1>
        <h2 ref = {counterElement}>{counter}</h2>
        <button onClick={handleClick}>+ 1</button> 
    </>
  )
}