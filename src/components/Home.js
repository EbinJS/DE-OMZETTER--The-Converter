import React from 'react';
import balancesvg from './Images/balance.svg';

export default function Home() {
    return (
        <div className='home'>
            <div id='homecontents'>
                <div id='balance'>
                    <img src={balancesvg} className='balancesvg' alt="logo" />
                </div>
                <div id ='deomzetter'>
                    <h1>DE OMZETTER</h1>
                    <p><label style={{fontWeight:'bold'}}>'DE OMZETTER'</label> is the Dutch word for <label style={{fontWeight:'bold'}}>'THE CONVERTER'</label>.</p>
                </div>
            </div>
        </div>
    )
}
