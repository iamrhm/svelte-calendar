import React from 'react'

import './profit.css'

const Profit = ({ maxProfitDetails }) => {
  let { profit } = maxProfitDetails
  profit = profit !== null ? profit.toFixed(2) : 'Insufficient Stock Price'
  return (
    <div className='profit-container'>
      <span className='profit-label'>Max Profit</span>
      <span className='profit-value-wrapper'>
        <span className='profit-value'>
          {profit}M Rs.
      </span>
      </span>
    </div>
  )
}
export default Profit