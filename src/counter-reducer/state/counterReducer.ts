import { CounterAction } from "../actions/actions"
import { counterProps } from "../interfaces/interfaces"

export const counterReducer = (state:counterProps, reducer:CounterAction ):counterProps => {
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