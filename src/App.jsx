import './App.css'
import AddTrasactions from './Components/AddTransaction'
import Header from './Components/Header'
import { TransactionList } from './Components/TransactionList'
import { GlobalState } from './Context/GlobalState'
import IncomeExpenses from './Components/IncomeExpenses'

function App() {
  return (
    <>
      <div className='bg-slate-500 flex flex-col items-center gap-7 h-[700px] border w-full  justify-center'> 
      <GlobalState >
              <Header/>
              <TransactionList/>
              <AddTrasactions/>
      </GlobalState>
        </div>
    </>
  )
}

export default App
