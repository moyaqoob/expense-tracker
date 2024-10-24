import { useContext, useState } from "react"
import { GlobalContext } from "../Context/GlobalState"

const AddTransactions = () => {
  const {addTransaction}  = useContext(GlobalContext);
  const [text,setText] = useState();
  const [amount,setamount] = useState();

  const onSubmit = e => {
    e.preventDefault();

    
    const newTransaction={
        id:Math.floor(Math.random()*1000),
        text,
        amount:+amount
    }
    addTransaction(newTransaction)
  }

  return (
    <>
    <div className="p-2 items-center">
    <h3>Add new transaction</h3>
    <form onSubmit={onSubmit} >
        <label htmlFor="text"></label>
        <input type="text" placeholder='Enter text' className='font-bold text-black' onChange={(e)=>setText(e.target.value)}/>
    
  
        <p>Amount</p>
        <p className="font-light">(negative- expense, positive-income) </p>
        <input type="text" lang='fr' placeholder="Enter Amount" onChange={(e)=>setamount(e.target.value)}/>
    
    <button className='bg-blue-900 relative left-[3em] w-2/3 flex items-center justify-center m-2 text-black hover:text-white'>Add Transaction</button>
    </form>
    </div>
    </>
  )
}

export default AddTransactions