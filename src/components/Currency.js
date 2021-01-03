import React from 'react'

export default function Currency(currency) {
    
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = currency;
    console.log(amount);
    return (
        <div>
            <input type='number' value={amount} onChange={onChangeAmount}></input>
            <select id='currencyOpt' value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option =>(
                    <option key={option} value={option}>{option}</option>
                ))}
                
            </select>
        </div>
    )
}
