import React, { useContext } from "react";
import { GlobalContext } from '../Context/GlobalState';
import { Transaction } from "./Transaction";

export const TransactionList = () => {
    const { transaction } = useContext(GlobalContext);

    return (
        <div className="">
            <h1>History</h1>
            <hr />
            <ul className="border px-10 bg-white shadow-slate-50">
                {transaction.map((trans) => (
                    <Transaction key={trans.id} transaction={trans} />
                ))}
            </ul>
        </div>
    );
};
