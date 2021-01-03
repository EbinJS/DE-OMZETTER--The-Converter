import React from 'react'

export default function About() {
    return (
        <div className='about'>
            <h1 id='about'>About</h1>
            <div id='aboutcontents'>
                <div id='currencycontent'>
                   <h1 className='h1'>Currency Converter</h1>
                   <label className='aboutdef'>'Currency Converter' helps in converting any currencies to other currencies.</label>
                </div>
                <div id ='unitcontent'>
                    <h1 className='h1'>Unit Converters</h1>
                    <label className='aboutdef'>'Unit Converters' provides five different converting options. They are, Length, Weight, Time, Temperature & Speed.</label>
                </div>
            </div>
        </div>
    )
}
