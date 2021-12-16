
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Works from './Works'
import Skills from './Skills'
import Header from '../header_footer/Header'
import Footer from '../header_footer/Footer'
import Contact from './Contact'


const RouterComponent = () => {
            
        return(
            
            <div >
                <Router >
                    <Header />
                     
                    <div className="container-xxl">
                    <br/>                   
                    <Routes>
                        
                        
                        <Route path="/" element={<Home/>} />
                        <Route path="/works" element={<Works/>} />
                        <Route path="/skills" element={<Skills/>} />
                        <Route path="/contact" element={<Contact/>} />
                        
                    </Routes>
                    <br/> 
                    </div>
                    <Footer/>
                </Router>

            </div>
        );
}

export default RouterComponent;