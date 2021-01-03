import React from 'react'

export default function LengthConverter() {
    function convertLength(e){
        if(e.target.id === 'cm'){
            let cm = document.getElementById('cm').value;
            let inch = document.getElementById('inch');
            let feet = document.getElementById('feet');
            let yard = document.getElementById('yard');
            let m = document.getElementById('m');
            let km = document.getElementById('km');
            let mile = document.getElementById('mile');
            inch.value = cm*0.39370;
            feet.value = cm*0.032808;
            yard.value = cm*0.010936;
            m.value = cm/100;
            km.value = cm/1000;
            mile.value = cm*0.0000062137;
        }
        if(e.target.id === 'inch'){
            let cm = document.getElementById('cm');
            let inch = document.getElementById('inch').value;
            let feet = document.getElementById('feet');
            let yard = document.getElementById('yard');
            let m = document.getElementById('m');
            let km = document.getElementById('km');
            let mile = document.getElementById('mile');
            cm.value = inch/0.39370;
            feet.value = inch*0.083333;
            yard.value = inch*0.027778;
            m.value = inch/39.370;
            km.value = inch/39370;
            mile.value = inch*0.000015783;
        }
        if(e.target.id === 'feet'){
            let cm = document.getElementById('cm');
            let inch = document.getElementById('inch');
            let feet = document.getElementById('feet').value;
            let yard = document.getElementById('yard');
            let m = document.getElementById('m');
            let km = document.getElementById('km');
            let mile = document.getElementById('mile');
            cm.value = feet/0.032808;
            inch.value = feet*12;
            yard.value = feet*0.33333;
            m.value = feet/3.2808;
            km.value = feet/3280.8;
            mile.value = feet*0.00018939;
        }
        if(e.target.id === 'yard'){
            let cm = document.getElementById('cm');
            let inch = document.getElementById('inch');
            let feet = document.getElementById('feet');
            let yard = document.getElementById('yard').value;
            let m = document.getElementById('m');
            let km = document.getElementById('km');
            let mile = document.getElementById('mile');
            cm.value = yard/0.010936;
            inch.value = yard*36;
            feet.value = yard*3;
            m.value = yard/1.0936;
            km.value = yard/1093.6;
            mile.value = yard*0.00056818;
        }
        if(e.target.id === 'm'){
            let cm = document.getElementById('cm');
            let inch = document.getElementById('inch');
            let feet = document.getElementById('feet');
            let yard = document.getElementById('yard');
            let m = document.getElementById('m').value;
            let km = document.getElementById('km');
            let mile = document.getElementById('mile');
            cm.value = m/0.01;
            inch.value = m*39.370;
            feet.value = m*3.2808;
            yard.value = m*1.0936;
            km.value = m/1000;
            mile.value = m*0.00062137;
        }
        if(e.target.id === 'km'){
            let cm = document.getElementById('cm');
            let inch = document.getElementById('inch');
            let feet = document.getElementById('feet');
            let yard = document.getElementById('yard');
            let m = document.getElementById('m');
            let km = document.getElementById('km').value;
            let mile = document.getElementById('mile');
            cm.value = km*100000;
            inch.value = km*39370;
            feet.value = km*3280.8;
            yard.value = km*1093.61;
            m.value = km*1000;
            mile.value = km*0.62137;
        }
        if(e.target.id === 'mile'){
            let cm = document.getElementById('cm');
            let inch = document.getElementById('inch');
            let feet = document.getElementById('feet');
            let yard = document.getElementById('yard');
            let m = document.getElementById('m');
            let km = document.getElementById('km');
            let mile = document.getElementById('mile').value;
            cm.value = mile/0.0000062137;
            inch.value = mile*63360;
            feet.value = mile*5280;
            yard.value = mile*1760;
            m.value = mile/0.00062137;
            km.value = mile/0.62137;
        }    
        
    }
    return (
        <div className='contents'>
            <div className='description'>
                <h2>Length Converter</h2>
                <p>7 different units of length.</p>
            </div>
            <div className='convert'>
                <div className='label'><label>Centimeter </label><input type='number' min='0' id='cm' onChange={convertLength} placeholder='Centimeter'></input></div>
                <div className='label'><label>Inch </label><input type='number' min='0' id='inch' onChange={convertLength} placeholder='Inch'></input></div>
                <div className='label'><label>Feet </label><input type='number' min='0' id='feet' onChange={convertLength} placeholder='Feet'></input></div>
                <div className='label'><label>Yard </label><input type='number' min='0' id='yard' onChange={convertLength} placeholder='Yard'></input></div>
                <div className='label'><label>Meter </label><input type='number' min='0' id='m' onChange={convertLength} placeholder='Meter'></input></div>
                <div className='label'><label>Kilometer </label><input type='number' min='0' id='km' onChange={convertLength} placeholder='Kilometer'></input></div>  
                <div className='label'><label>Mile </label><input type='number' min='0' id='mile' onChange={convertLength} placeholder='Mile'></input></div>    
            </div>
        </div>
    )
}