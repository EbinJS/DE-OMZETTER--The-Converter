import React,{useState,useEffect} from 'react';
import Currency from './Currency';
const url = 'https://api.exchangeratesapi.io/latest';
export default function CurrencyConverter() {

    const [currencyOptions, setCurrencyOptions] = useState([]); 
    const [fromCurrency, setFromCurrency] = useState();
    const [toCurrency, setToCurrency] = useState();
    const [exchangeRate, setExchangeRate] = useState();
    const [amount, setAmount] = useState(1,1);
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
    
    let toAmount, fromAmount;
    if(amountInFromCurrency){
        fromAmount = amount;
        toAmount = amount * exchangeRate;
    }else{
        toAmount = amount;
        fromAmount = amount / exchangeRate;
    }

    useEffect(() =>{
        fetch(url)
            .then(res => res.json())
            .then(data =>{
                const inr = Object.keys(data.rates)[11]
                setCurrencyOptions([data.base, ...Object.keys(data.rates)])
                setFromCurrency(inr)
                setToCurrency(data.base)
                setExchangeRate(data.rates[inr])
            })
     },[])

     useEffect(() => {
        if(fromCurrency != null && toCurrency != null){
            fetch(`${url}?base=${fromCurrency}&symbols=${toCurrency}`)
                .then(res => res.json())
                .then(data => setExchangeRate(data.rates[toCurrency]))
        }
     },[fromCurrency,toCurrency])

     function handleFromAmountChange(e){
         setAmount(e.target.value);
         setAmountInFromCurrency(true);
     }

     function handleToAmountChange(e){
        setAmount(e.target.value);
        setAmountInFromCurrency(false);
    }

    let names= {
        EUR : "Euro",
        CAD : "Canadian dollar",
        HKD : "Hong Kong dollar",
        ISK : "Icelandic króna",
        PHP : "Philippine peso",
        DKK : "Danish krone",
        HUF : "Hungarian forint",
        CZK : "Czech koruna",
        AUD : "Australian dollar",
        RON : "Romanian leu",
        SEK : "Swedish krona",
        IDR : "Indonesian rupiah",
        INR : "Indian rupee",
        BRL : "Brazilian real",
        RUB : "Russian ruble",
        HRK : "Croatian kuna",
        JPY : "Japanese yen",
        THB : "Thai baht",
        CHF : "Swiss franc",
        SGD : "Singapore dollar",
        PLN : "Polish złoty",
        BGN : "Bulgarian lev",
        TRY : "Turkish lira",   
        CNY : "Chinese yuan renminbi",
        NOK : "Norwegian krone",
        NZD : "New Zealand dollar",
        ZAR : "South African rand",
        USD : "United States dollar",
        MXN : "Mexican peso",
        ILS : "Israeli Shekel",
        GBP : "British Pound sterling",
        KRW : "South Korean won",
        MYR : "Malaysian ringgit"
    };

    const Example = ({ names }) =>
        Object.entries(names).map(([k, v]) => (
            <div key={k}>
                <ul>
                    <div id='nameList'><li>{k}: {v} </li></div>
                </ul>
            </div>
    ));


    return (
        <div className='currencyConvert'>
            <div className='description' id='currencyconverthead'>
                <h2 id='currencytitle'>Currency Converter</h2>
            </div>
            <div id='currencyboxes'>
                <Currency 
                    currencyOptions={currencyOptions}
                    selectedCurrency={fromCurrency}
                    onChangeCurrency={e => setFromCurrency(e.target.value)}
                    onChangeAmount={handleFromAmountChange}
                    amount={fromAmount}
                />
                <Currency
                    currencyOptions={currencyOptions}
                    selectedCurrency={toCurrency}
                    onChangeCurrency={e => setToCurrency(e.target.value)}
                    onChangeAmount={handleToAmountChange}
                    amount={toAmount}    
                />
                <div id='nameList'>
                    <div id='abbreviations'>Currency Abbreviation</div>
                    <div id='list'>
                        <Example names={names} />
                    </div>    
                </div>
            </div>
        </div>
    )
}
