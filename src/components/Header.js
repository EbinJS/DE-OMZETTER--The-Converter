import React,{useState}from 'react';
import {Link} from 'react-scroll';

export default function Header() {
    const [headerChange, setheaderChange] = useState(false);

    const changeHeader = () => {
        if(window.scrollY >= 20){
            setheaderChange(true);
        }else{
            setheaderChange(false);
        }
    }

    function togglenav(){
        const navclick = document.querySelector('.navclick');
        const nav = document.querySelector('.nav');
        const navbuttons = document.getElementsByClassName('navbuttons');
        nav.classList.toggle('nav-active');
        for(let i =0; i<navbuttons.length;i++){
            navbuttons[i].classList.toggle('navbuttons-active');
        }
        navclick.classList.toggle('toggle');
    }

    window.addEventListener('scroll', changeHeader);

    return (
        <>
        <div className={headerChange ? 'headChange' : 'head'}>
            <div id='title'><i className="fa fa-balance-scale"></i>DE OMZETTER</div>
            <div className='nav'>
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-80} duration={500}><div className='navbuttons'>Home</div></Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-80} duration={500}><div className='navbuttons'>About</div></Link>
                <Link activeClass="active" to="currencyConvert" spy={true} smooth={true} offset={-80} duration={500}><div className='navbuttons'>Currency Converter</div></Link>
                <Link activeClass="active" to="unitConvert" spy={true} smooth={true} offset={-80} duration={500}><div className='navbuttons'>Unit Converters</div></Link>
                {/*<Link activeClass="active" to="contact" spy={true} smooth={true} offset={-80} duration={500}><div className='navbuttons'>Contact</div></Link>*/}
            </div>
            <div className='navclick' onClick={togglenav}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
            </div>
        </div>
    </>
    )
}
