import React from 'react'

export default function SpeedConverter() {
    function convertSpeed(e){
        if(e.target.id === 'MPS'){
            let MPS = document.getElementById('MPS').value;
            let KPH = document.getElementById('KPH');
            let MPH = document.getElementById('MPH');
            KPH.value = MPS*3.6;
            MPH.value = MPS*2.23694;
        }
        if(e.target.id === 'KPH'){
            let MPS = document.getElementById('MPS');
            let KPH = document.getElementById('KPH').value;
            let MPH = document.getElementById('MPH');
            MPS.value = KPH/3.6;
            MPH.value = KPH/1.609;
        }
        if(e.target.id === 'MPH'){
            let MPS = document.getElementById('MPS');
            let KPH = document.getElementById('KPH');
            let MPH = document.getElementById('MPH').value;
            MPS.value = MPH/2.237;
            KPH.value = MPH*1.609;
        }
    }

    return (
        <div className='contents'>
            <div className='description' id='unithead'>
                <h2 id='unittitle'>Speed Converter</h2>
                <p>3 different units of speed.</p>
            </div>
            <div className='convert'>
                <div className='label'><label>Meters per Second </label><input type='number' id='MPS' onChange={convertSpeed} placeholder='MPS'></input></div>
                <div className='label'><label>Miles per Hour </label><input type='number' id='MPH' onChange={convertSpeed} placeholder='MPH'></input></div>
                <div className='label'><label>Kilometers per Hour </label><input type='number' id='KPH' onChange={convertSpeed} placeholder='KPH'></input></div>
            </div>
        </div>
    )
}
