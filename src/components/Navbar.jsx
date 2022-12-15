import { Component } from "react";
import "./styles.css"

class Navbar extends Component {
    render() { 
        return (
            <nav className="navbar navbar-expand-md bg-light" id="navbar">
                <div className="container-fluid d-flex">
                    <a className="navbar-brand inactive" href="locathost"><span style={{color:"#FF5200"}} className="fs-3 fw-bold">K</span>avindu <span style={{color:"#FF5200"}} className="fs-3 fw-bold">W</span>anniarachchi</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                        <span className="navbar navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse navAlign" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="navbar-item mx-2">
                                <a className="nav-link active" aria-current="page" href="#navbar">Home</a>
                            </li>
                            <li className="navbar-item mx-2 font-color">
                                <a className="nav-link inactive" href="#skills">Skills</a>
                            </li>
                            <li className="navbar-item mx-2">
                                <a className="nav-link inactive" href="localhost">About</a>
                            </li>
                            <li className="navbar-item mx-2">
                                <a className="nav-link inactive" href="localhost">Contact</a>
                            </li>
                        </ul>
                    </div>

                </div>
            
            </nav>
        );
    }
}
 
export default Navbar;