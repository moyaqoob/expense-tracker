import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext); // Only get deleteTransaction from context
    const sign = transaction.amount < 0 ? "-" : "+"; // Calculate sign for the current transaction

    return (
        <div className="py-3 relative flex flex-col items-start w-full right-8 ">
            <li key={transaction.id} className="list-none ">
                <button
                    className="px-1 py-0 opacity-0 hover:opacity-100 border bg-red-600 text-black text-md mx-2"
                    onClick={() => deleteTransaction(transaction.id)}
                >
                    x
                </button>
                {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            </li>
        </div>
    );
};
