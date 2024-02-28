import React, {useState} from 'react'
import {Link} from 'react-scroll';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';


function Navbar() {
    const [scroll, setScroll] = useState(false);
    const [demoIsOpen, setDemoIsOpen] = useState(false);

    const displayDemo = () => {
        setDemoIsOpen(!demoIsOpen)
        setScroll(!scroll)
    }
    scroll?document.body.style.overflow = "hidden":document.body.style.overflow = "auto";
    const [capVal, setCapVal] = useState(null);

    const [navColor, setNavColor] = useState(false);
    const [navButton, setNavButton] = useState(false);
    const [navLogo, setNavLogo] = useState(false)
    const changeNavColor = () =>{
        setNavColor(true)
        setNavButton(true)
        setNavLogo(true)
    }
    const changeNavColorTwo = () => {
        setNavColor(false)
        setNavLogo(false)
        setNavButton(true)
    }

    // FOR BACKEND
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleChange = (event) => {
        setValues({...values, [event.target.name]:[event.target.value]})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/signup', values)
        .then(res => console.log("Sent Successfully!!"))
        .catch(err => console.log(err));
    }
  return (
    <>
        <nav className={navColor? 'nav-white':'nav-transparent'}>
            <div className='right-side'>
                <Link to='main' className='logo' smooth={true} duration={2000}>
                    <img src={navLogo? 'images/liteclerklogo.png':'images/liteclerklogoV2.png'} alt='logo'/>
                </Link>
                <input className='menu-btn' type='checkbox' id='menu-btn' />
                <label className='menu-icon' for='menu-btn'>
                    <span className='nav-icon'></span>
                </label>
                <ul className={navColor? 'menu-white':'menu'}>
                    <li className='nav-btn'><Link to='main' spy={true} smooth={true} offset={0} duration={1000} onSetActive={changeNavColorTwo}>Home</Link> </li>
                    <li className='nav-btn'><Link to='aboutus' spy={true} smooth={true} offset={0} duration={1000} onSetActive={changeNavColor}>About Us</Link> </li>
                    <li className='nav-btn'><Link to='products' spy={true} smooth={true} offset={0} duration={1000} onSetActive={changeNavColor}>Products</Link> </li>
                    <li className='nav-btn'><Link to='customers' spy={true} smooth={true} offset={0} duration={1000} onSetActive={changeNavColor}>Customers</Link> </li>
                    <li className='nav-btn'><Link to='contacts' spy={true} smooth={true} offset={-300} duration={1000} onSetActive={changeNavColor}>Contact</Link> </li>
                </ul>
            </div>
            <Link to='main' className='hey' onClick={displayDemo}>Demo</Link>
        </nav>
        <div className={demoIsOpen? 'open-demo':'hide-demo'}>
            <div className='demo-content'>
                <div className='heading'>
                    <h2>Contact Us & Request for a Demo</h2>
                    <div className='images'>
                        <img src='images/fullscreen.svg' />
                        <img className='exit' src='images/xmark-solid.svg' onClick={displayDemo}/>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tr>
                            Name
                        </tr>
                        <tr>
                            <input type='text' placeholder='Enter name' name='name' onChange={handleChange}/>
                        </tr>
                        <tr>
                            Email
                        </tr>
                        <tr>
                            <input type='text' placeholder='Enter email' name='email' onChange={handleChange}/>
                        </tr>
                        <tr>
                            Contact Number
                        </tr>
                        <tr>
                            <input type='text' placeholder='Enter contact no.' name='password' onChange={handleChange}/>
                        </tr>
                        <tr>
                            Message
                        </tr>
                        <tr>
                            <textarea />
                        </tr>
                        <tr>
                            <ReCAPTCHA
                            sitekey="6LcmFGQpAAAAALHGKUPlD8j4Os6guSGlXpoqSIhT"
                            onChange={(val) => setCapVal(val)}
                            />
                        </tr>
                    </table>
                    <div className="footer">
                        <button className='btn' type='submit' disabled={!capVal}>Send</button>
                        <button className='btn'>Close</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Navbar