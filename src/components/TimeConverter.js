import React from 'react'

export default function TimeConverter() {
    function convertTime(e){
        if(e.target.id === 'ms'){
            let ms = document.getElementById('ms').value;
            let s = document.getElementById('s');
            let min = document.getElementById('min');
            let hr = document.getElementById('hr');
            let day = document.getElementById('day');
            let week = document.getElementById('week'); 
            s.value = ms/1000;
            min.value = ms/60000;
            hr.value = ms/3600000;
            day.value = ms/86400000;
            week.value = ms/604800000;
        }
        if(e.target.id === 's'){
            let ms = document.getElementById('ms');
            let s = document.getElementById('s').value;
            let min = document.getElementById('min');
            let hr = document.getElementById('hr');
            let day = document.getElementById('day');
            let week = document.getElementById('week'); 
            ms.value = s*1000;
            min.value = s/60;
            hr.value = s/3600;
            day.value = s/86400;
            week.value = s/604800;
        }
        if(e.target.id === 'min'){
            let ms = document.getElementById('ms');
            let s = document.getElementById('s');
            let min = document.getElementById('min').value;
            let hr = document.getElementById('hr');
            let day = document.getElementById('day');
            let week = document.getElementById('week'); 
            ms.value = min*60000;
            s.value = min*60;
            hr.value = min/60;
            day.value = min/1440;
            week.value = min/10080;
        }
        if(e.target.id === 'hr'){
            let ms = document.getElementById('ms');
            let s = document.getElementById('s');
            let min = document.getElementById('min');
            let hr = document.getElementById('hr').value;
            let day = document.getElementById('day');
            let week = document.getElementById('week'); 
            ms.value = hr*3600000;
            s.value = hr*3600;
            min.value = hr*60;
            day.value = hr/24;
            week.value = hr/168;
        }
        if(e.target.id === 'day'){
            let ms = document.getElementById('ms');
            let s = document.getElementById('s');
            let min = document.getElementById('min');
            let hr = document.getElementById('hr');
            let day = document.getElementById('day').value;
            let week = document.getElementById('week'); 
            ms.value = day*86400000;
            s.value = day*86400;
            min.value = day*1440;
            hr.value = day*24;
            week.value = day/7;
        }
        if(e.target.id === 'week'){
            let ms = document.getElementById('ms');
            let s = document.getElementById('s');
            let min = document.getElementById('min');
            let hr = document.getElementById('hr');
            let day = document.getElementById('day');
            let week = document.getElementById('week').value; 
            ms.value = week*604800000;
            s.value = week*604800;
            min.value = week*10080;
            hr.value = week*168;
            day.value = week*7;
        }
    }

    return (
        <div className='contents'>
            <div className='description'>
                <h2>Time Converter</h2>
                <p>6 different units of time.</p>
            </div>
            <div className='convert'>
                <div className='label'><label>Millisecond </label><input type='number' min='0' id='ms' onChange={convertTime} placeholder='Millisecond'></input></div>
                <div className='label'><label>Second </label><input type='number' min='0' id='s' onChange={convertTime} placeholder='Second'></input></div>
                <div className='label'><label>Minute </label><input type='number' min='0' id='min' onChange={convertTime} placeholder='Minute'></input></div>
                <div className='label'><label>Hour </label><input type='number' min='0' id='hr' onChange={convertTime} placeholder='Hour'></input></div>
                <div className='label'><label>Day </label><input type='number' min='0' id='day' onChange={convertTime} placeholder='Day'></input></div>
                <div className='label'><label>Week </label><input type='number' min='0' id='week' onChange={convertTime} placeholder='Week'></input></div>      
            </div>
        </div>
    )
}
