import React from 'react'

export default function WeightConverter() {
    function convertWeight(e){
        if(e.target.id === 'mg'){
            let mg = document.getElementById('mg').value;
            let g = document.getElementById('g');
            let ounce = document.getElementById('ounce');
            let pound = document.getElementById('pound');
            let kg = document.getElementById('kg');
            let t = document.getElementById('t'); 
            g.value = mg/1000;
            ounce.value = mg/28350;
            pound.value = mg/453592;
            kg.value = mg/1000000;
            t.value = mg/1000000000;
        }
        if(e.target.id === 'g'){
            let mg = document.getElementById('mg');
            let g = document.getElementById('g').value;
            let ounce = document.getElementById('ounce');
            let pound = document.getElementById('pound');
            let kg = document.getElementById('kg');
            let t = document.getElementById('t'); 
            mg.value = g*1000;
            ounce.value = g*0.035274;
            pound.value = g*0.00220462;
            kg.value = g/1000;
            t.value = g/1000000;
        }
        if(e.target.id === 'ounce'){
            let mg = document.getElementById('mg');
            let g = document.getElementById('g');
            let ounce = document.getElementById('ounce').value;
            let pound = document.getElementById('pound');
            let kg = document.getElementById('kg');
            let t = document.getElementById('t'); 
            mg.value = ounce*28349.5;
            g.value = ounce*28.3495;
            pound.value = ounce/16;
            kg.value = ounce/35.274;
            t.value = ounce/35274;
        }
        if(e.target.id === 'pound'){
            let mg = document.getElementById('mg');
            let g = document.getElementById('g');
            let ounce = document.getElementById('ounce');
            let pound = document.getElementById('pound').value;
            let kg = document.getElementById('kg');
            let t = document.getElementById('t'); 
            mg.value = pound*453592;
            g.value = pound*453.592;
            ounce.value = pound*16;
            kg.value = pound/2.205;
            t.value = pound/2205;
        }
        if(e.target.id === 'kg'){
            let mg = document.getElementById('mg');
            let g = document.getElementById('g');
            let ounce = document.getElementById('ounce');
            let pound = document.getElementById('pound');
            let kg = document.getElementById('kg').value;
            let t = document.getElementById('t'); 
            mg.value = kg*1000000;
            g.value = kg*1000;
            ounce.value = kg*35.274;
            pound.value = kg*2.20462;
            t.value = kg/1000;
        }
        if(e.target.id === 't'){
            let mg = document.getElementById('mg');
            let g = document.getElementById('g');
            let ounce = document.getElementById('ounce');
            let pound = document.getElementById('pound');
            let kg = document.getElementById('kg');
            let t = document.getElementById('t').value; 
            mg.value = t*1000000000;
            g.value = t*1000000;
            ounce.value = t*35274;
            pound.value = t*2204.62;
            kg.value = t*1000;
        }
    }

    return (
        <div className='contents'>
            <div className='description'>
                <h2>Weight Converter</h2>
                <p>6 different units of weight.</p>
            </div>
            <div className='convert'>
                <div className='label'><label>Milligram </label><input type='number' min='0' id='mg' onChange={convertWeight} placeholder='Milligram'></input></div>
                <div className='label'><label>Gram </label><input type='number' min='0' id='g' onChange={convertWeight} placeholder='Gram'></input></div>
                <div className='label'><label>Ounce </label><input type='number' min='0' id='ounce' onChange={convertWeight} placeholder='Ounce'></input></div>
                <div className='label'><label>Pound </label><input type='number' min='0' id='pound' onChange={convertWeight} placeholder='Pound'></input></div>
                <div className='label'><label>Kilogram </label><input type='number' min='0' id='kg' onChange={convertWeight} placeholder='Kilogram'></input></div>
                <div className='label'><label>Tonne </label><input type='number' min='0' id='t' onChange={convertWeight} placeholder='Tonne'></input></div>    
            </div>
        </div>
    )
}
