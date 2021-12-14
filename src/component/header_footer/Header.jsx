import { Link } from "react-router-dom";
const Header = () => {
  
    return (
        <div  >
            <header >
                <div >
                    <nav className=" navbar navbar-expand-xl navbar-dark bg-primary rounded-top" >
                        <ul className="navbar-nav"> 
                            <h3><Link className="nav-link" to="/">Home</Link></h3>
                            <h3><Link className="nav-link" to="/works">Works</Link></h3>
                            <h3><Link className="nav-link" to="/skills">Skills</Link></h3>
                        </ul>
                    </nav>
                </div>
            </header>

        </div>
    )
}
export default Header;