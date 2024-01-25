import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlice'

function Counter() {
    const count = useSelector(state => state.counter.value)

    const dispatch =useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <br />
        <div>
            {count}
        </div>
        <br />
        <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default Counter