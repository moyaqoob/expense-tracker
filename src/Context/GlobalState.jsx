import React, { Children, createContext, useReducer } from "react";
import AppReducer from './AppReducer'


const initialState={
    transaction:[
       
    ]
}

//create context
export const GlobalContext = createContext(initialState);

export const GlobalState =({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initialState)
    const deleteTransaction=(id)=>{
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        })
    }
    const addTransaction=(transaction)=>{
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transaction
        }
        )
    }

    return(
        <GlobalContext.Provider value={
            {transaction:state.transaction,
                deleteTransaction,addTransaction
            }}>
                {children}
        </GlobalContext.Provider>
    )
}