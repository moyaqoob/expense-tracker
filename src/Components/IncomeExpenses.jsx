import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const IncomeExpenses = () => {
    const {transaction} = useContext(GlobalContext);
    const amounts = transaction
    .map((trans) => parseFloat(trans.amount)) 
    .filter((amount) => !isNaN(amount));

    const income = amounts
    .filter(item=> item>0).
    reduce((acc,item)=>(acc+=item),0).toFixed(2)

    const expense = (
    amounts
    .filter(item=>item<0)
    .reduce((acc,item)=>(acc-=item),0) *-1
);

    

  return (
    <div className='border border-white flex gap-0 items-center bg-white px-12 w-full max-w-4xl'> 
    <div className='border relative right-5 px-3 flex-1'> 
        <h4 className='font-serif text-2xl'>Income</h4>  
        <p className='font-serif text-green-400 text-xl'>${income}</p> 
    </div> 

    <div className='border relative right-5 px-3 border-collapse flex-1'> 
        <h4 className='font-serif text-2xl'>Expenses</h4> 
        <p className='font-serif text-red-500 text-xl'>{expense}</p> 
    </div> 
</div>
  )
}

export default IncomeExpenses