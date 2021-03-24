import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'


const Balance = () => {

  const {transactions} = useContext(GlobalContext)

  
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((total, value) => total += value).toFixed(2);
  
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  )
}

export default Balance
