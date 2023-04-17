import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {decrement, increment} from './counterSlice'

export function Counter() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <>
            </>
            <div>
                <button
                    aria-label="+"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                {"  " + count + "  "}
                <button
                    aria-label="-"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
            </div>
        </div>
    )
}