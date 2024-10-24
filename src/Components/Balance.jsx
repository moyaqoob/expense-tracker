import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const Balance = () => {
    const {transaction} = useContext(GlobalContext)
    const amounts = transaction
    .map((trans) => parseFloat(trans.amount)) // Ensure they are numbers
    .filter((amount) => !isNaN(amount)); // Filter out non-numeric values
  
    const total = amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2)
    console.log(amounts)
    console.log(transaction)
  return (
    <div className='border-none'>
        <h1>
        Your Balance
    </h1>
    <h3>${total} </h3>
    </div>
   
  )
}

export default Balance