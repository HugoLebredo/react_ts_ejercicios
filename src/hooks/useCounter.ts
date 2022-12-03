import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import {gsap} from "gsap"

export default function useCounter({maxCount = 15}) {

    const [counter, setCounter] = useState(5)
    const element2Animate = useRef<HTMLHeadingElement>(null)

    const tl = useRef(gsap.timeline())

    const handleClick = () => setCounter( prev => Math.min(prev + 1, maxCount))

    useLayoutEffect(() => {

        if (!element2Animate.current) return

        tl.current.to( element2Animate.current, {y:-10, duration: 0.2, ease: 'ease.out'})
                    .to( element2Animate.current, {y:0, duration: 1, ease: 'bounce.out'})
                    .pause()
    }, [])

    useEffect(() => {
/*
       if (counter < MAXIMUN_COUNT) return

        console.log("%cSe llegó al valor máximo","background-color:black; color:red;")
*/
        tl.current.play(0)

    },[counter])

    return {
        handleClick,
        element2Animate,
        counter
    }
}
