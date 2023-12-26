import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar=()=>{

    const location = useLocation();
    console.log(location)

    const [ isHovered, setIsHovered] = useState(false);

    const handleMouseEnter =()=> {

        setIsHovered(true);

    }

    const handleMouseLeave = ()=> {

        setIsHovered(false);

    }
    return(
        <div>
            <nav className="navbar navbar-expand-lg p-2 bg-black border-bottom border-body" data-bs-theme="dark">

               <div>
                <p>h1</p>
               </div>

               <div className="divnav me-5 pe-5"> 

                <ul className='navbar-nav  ms-auto' >
                    <li className={`nav-item m-4 border border-black  `}>
                    <Link className={`nav-link ${location.pathname === '/' ? 'active text-dark bg-blue' : '' }`} style={{ fontFamily: 'Arial' }} to="/">Home</Link>
                    </li>


                    <li className="nav-item m-4 border border-black position-relative"  
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                        <Link className={`nav-link ${location.pathname === '/services' ? 'active text-dark bg-blue' : '' }`} style={{ fontFamily: 'Arial' }} to="/services">Service
                        </Link>
                        
                        </li>
                </ul>

               </div>

            </nav>
        </div>

    );


}

export default Navbar;