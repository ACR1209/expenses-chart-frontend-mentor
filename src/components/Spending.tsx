import React from 'react'
import SpendingChart from './SpendingChart'
import TotalThisMonth from './TotalThisMonth'

function Spending() {
  return (
    <div className='w-full bg-veryPaleOrange p-[30px] rounded-2xl'>
        <div className='flex flex-col'>
            <h1 className='text-darkBrown font-bold text-lg md:text-3xl'>Spending - Last 7 days</h1>
            <SpendingChart/>
            <hr className='my-[30px] md:my-[40px] border-cream border-[1px] bg-cream'/>
            <TotalThisMonth/>
        </div>
    </div>
  )
}

export default Spending