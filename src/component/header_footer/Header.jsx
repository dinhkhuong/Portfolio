import React, { useState } from 'react';
import { Link } from "react-router-dom";



const Header = () => {
    const [expanded, setExpanded] = useState(true);

    const handleNavCollapse = () => setExpanded(!expanded);


    return (
        
        <header >
            
            <nav className="navbar navbar-expand-xl navbar-dark bg-primary rounded-top p-1" >

                <button className="custom-toggler navbar-toggler" type="button" 
                aria-expanded={!expanded ? true : false}  onClick={handleNavCollapse}>

                    {/* <span class="navbar-toggler-icon"></span> */}
                    {/* {expanded ? <MenuIcon /> : <CloseIcon />} */}
                    {expanded ? <span className="navbar-toggler-icon"></span> : <button type="button" class="btn-close" aria-label="Close"></button> }
                    
                </button>
            
                <div className={`${expanded ? 'collapse' : ''} navbar-collapse`} >
                    <ul className="navbar-nav"> 
                        <h3><Link className="nav-link" to="/">Home</Link></h3>
                        <h3><Link className="nav-link" to="/works">Works</Link></h3>
                        <h3><Link className="nav-link" to="/skills">Skills</Link></h3>
                        <h3><Link className="nav-link" to="/contact">Contacts</Link></h3>
                    </ul>
                </div>
            </nav>
            
        </header>

        
    )
}
export default Header;
//Failed: Too many rerender
// const [expanded, setExpanded] = useState(true);
//     return (           
//             <header >
//                 <div >
//                     <nav className=" navbar navbar-expand-xl navbar-dark bg-primary rounded-top" >
//                         <div className="container">
    //                         <button className="navbar-toggler border border-info text-info" 
    //                         onClick={ setExpanded(!expanded)}>
    //                             {expanded ? <MenuIcon /> : <CloseIcon />}
    //                         </button>
    //                         <div className={expanded ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
        //                         <ul className="navbar-nav ms-auto">                       
        //                             <h3><Link className="nav-link" to="/">Home</Link></h3>
        //                             <h3><Link className="nav-link" to="/works">Works</Link></h3>
        //                             <h3><Link className="nav-link" to="/skills">Skills</Link></h3>
        //                         </ul>
//                             </div>
//                         </div>
//                     </nav>
//                 </div>
//             </header>       
//     )