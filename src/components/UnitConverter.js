import React from 'react'
import LengthConverter from './LengthConverter';
import WeightConverter from './WeightConverter';
import TimeConverter from './TimeConverter';
import TemperatureConverter from './TemperatureConverter';
import SpeedConverter from './SpeedConverter';

export default function UnitConverter() {
    function unitcon(e){
        if(e.target.id === 'l'){
            let tabcontent = document.getElementsByClassName('tabConvert');
            for (let i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            let tabbuttons = document.getElementsByClassName('buttons');
            for (let i = 0; i < tabbuttons.length; i++) {
                tabbuttons[i].style.backgroundColor = "#EDF5E1";
                tabbuttons[i].style.color = "#05386b";
            }
            document.getElementById('l').style.color = "#EDF5E1";
            document.getElementById('l').style.backgroundColor = "#379683";
            document.getElementById('len').style.display="block";
        }
        if(e.target.id === 'w'){
            let tabcontent = document.getElementsByClassName('tabConvert');
            for (let i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            let tabbuttons = document.getElementsByClassName('buttons');
            for (let i = 0; i < tabbuttons.length; i++) {
                tabbuttons[i].style.backgroundColor = "#EDF5E1";
                tabbuttons[i].style.color = "#05386b";
            }
            document.getElementById('w').style.color = "#EDF5E1";
            document.getElementById('w').style.backgroundColor = "#379683";
            document.getElementById('wei').style.display="block";
        }
        if(e.target.id === 'ti'){
            let tabcontent = document.getElementsByClassName('tabConvert');
            for (let i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            let tabbuttons = document.getElementsByClassName('buttons');
            for (let i = 0; i < tabbuttons.length; i++) {
                tabbuttons[i].style.backgroundColor = "#EDF5E1";
                tabbuttons[i].style.color = "#05386b";
            }
            document.getElementById('ti').style.color = "#EDF5E1";
            document.getElementById('ti').style.backgroundColor = "#379683";
            document.getElementById('tim').style.display="block";
        }
        if(e.target.id === 'te'){
            let tabcontent = document.getElementsByClassName('tabConvert');
            for (let i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            let tabbuttons = document.getElementsByClassName('buttons');
            for (let i = 0; i < tabbuttons.length; i++) {
                tabbuttons[i].style.backgroundColor = "#EDF5E1";
                tabbuttons[i].style.color = "#05386b";
            }
            document.getElementById('te').style.color = "#EDF5E1";
            document.getElementById('te').style.backgroundColor = "#379683";
            document.getElementById('tem').style.display="block";
        }
        if(e.target.id === 'sp'){
            let tabcontent = document.getElementsByClassName('tabConvert');
            for (let i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            let tabbuttons = document.getElementsByClassName('buttons');
            for (let i = 0; i < tabbuttons.length; i++) {
                tabbuttons[i].style.backgroundColor = "#EDF5E1";
                tabbuttons[i].style.color = "#05386b";
            }
            document.getElementById('sp').style.color = "#EDF5E1";
            document.getElementById('sp').style.backgroundColor = "#379683";
            document.getElementById('spe').style.display="block";
        }
    }


    return (
        <>
        <div className='unitConvert'>
            <div className='tabs'>
                <button id='l' className='buttons' onClick={unitcon} style={{backgroundColor:'#379683',color:'#EDF5E1'}}>Length</button>
                <button id='w' className='buttons' onClick={unitcon}>Weight</button>
                <button id='ti' className='buttons' onClick={unitcon}>Time</button>
                <button id='te' className='buttons' onClick={unitcon}>Temperature</button>
                <button id='sp' className='buttons' onClick={unitcon}>Speed</button>
            </div>
            <div className='tabContents'>
                <div id='len' className='tabConvert' style={{display:'block'}}><LengthConverter /></div>
                <div id='wei' className='tabConvert' style={{display:'none'}}><WeightConverter /></div>
                <div id='tim' className='tabConvert' style={{display:'none'}}><TimeConverter /></div>
                <div id='tem' className='tabConvert' style={{display:'none'}}><TemperatureConverter /></div>
                <div id='spe' className='tabConvert' style={{display:'none'}}><SpeedConverter /></div>
            </div>
        </div>
        </>
    )
}
