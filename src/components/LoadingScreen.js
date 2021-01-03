import React from 'react'
import loader from './Images/converterLoader.svg';

export default function LoadingScreen() {
    return (
        <div className="loader">
            <header className="load">
                <img src={loader} className="converterload" alt="loader" />
            </header>
        </div>
    )
}