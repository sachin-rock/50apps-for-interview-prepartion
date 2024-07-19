import React from 'react'
import './Counter.css'

const Counter = ({incriment,deciment,count,maxLimit,minLimit}) => {
  return (
    <div>
    <div className='Container'>

        <button className='btn' onClick={incriment} disabled={count === maxLimit}> + </button>
        <span className='count'>{count}</span>
        <button className='btn' onClick={deciment} disabled={count === minLimit}> - </button>
     
    </div>
    {count === maxLimit && <span className='warning'>Max limit reached!</span>}
    {count === minLimit && <span className='warning'>Min limit reached!</span>}
    </div>

  )
}

export default Counter