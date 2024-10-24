import Balance from "./Balance"
import IncomeExpenses from "./IncomeExpenses"

export const Header = () => {

return(
   <>
 
    <div className='font-mono text-3xl shadow-[-4px_0_6px_rgba(0,0,0,2)]'>
        <strong>Expense Tracker</strong>
        </div>
        <div className='w-1/2 text-2xl font-mono '>
            <Balance/>
        </div>
        <div className='flex gap-2'>
        <div className='flex flex-col items-center '>
            <IncomeExpenses/>
        </div>
        
    </div>
    
   </>
)
    
}

export default Header