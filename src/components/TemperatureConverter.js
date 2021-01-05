import React from 'react'

export default function TemperatureConverter() {
    function convertTemp(e){
        if(e.target.id === 'F'){
            let F = document.getElementById('F').value;
            let C = document.getElementById('C');
            let K = document.getElementById('K'); 
            C.value = ((F-32)*5/9);
            K.value = ((F-32)*5/9+273.15);
        }
        if(e.target.id === 'C'){
            let F = document.getElementById('F');
            let C = document.getElementById('C').value;
            let K = document.getElementById('K'); 
            F.value = ((C*9/5)+32);
            K.value = ((C*1)+273.15);
        }
        if(e.target.id === 'K'){
            let F = document.getElementById('F');
            let C = document.getElementById('C');
            let K = document.getElementById('K').value; 
            F.value = ((K-273.15)*9/5+32);
            C.value = (K-273.15);
        }
    }

    return (
        <div className='contents'>
            <div className='description' id='unithead'>
                <h2 id='tempunittitle'>Temperature Converter</h2>
                <p>3 different units of temperature.</p>
            </div>
            <div className='convert'>
                <div className='label'><label>Celcius </label><input type='number' id='C' onChange={convertTemp} placeholder='Celsius'></input></div>
                <div className='label'><label>Fahrenheit </label><input type='number' id='F' onChange={convertTemp} placeholder='Fahrenheit'></input></div>
                <div className='label'><label>Kelvin </label><input type='number' id='K' onChange={convertTemp} placeholder='Kelvin'></input> </div>
            </div>
        </div>
    )
}
