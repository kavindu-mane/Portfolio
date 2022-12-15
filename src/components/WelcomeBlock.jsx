import { Component } from 'react'
import Welcome from './WelcomeText'
import myImage from "../images/my-img.png"
import Triangle from "../images/triangle.png"
import './styles.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init()

class WelcomeBlock extends Component {
    render() { 
        return (
            <div className='container-fluid row m-0 p-0 pt-5 open-block-background overflow-hidden'>
                <div className='col-12 col-lg-7 d-flex justify-content-start align-items-center'>
                    <Welcome/>
                </div>
                <div className='col-12 col-lg-5 p-0 d-flex justify-content-center mt-5 mt-lg-0 position-relative'>
                        <img src={Triangle} className="w-100" style={{opacity:"0.85"}} alt="triangle" data-aos="fade-left" data-aos-duration="800"></img>
                        <img src={myImage} alt="me" className='position-absolute w-100' style={{opacity:"0.95"}} data-aos="fade-left" data-aos-duration="800"></img>
                </div>
            </div>
        );
    }
}
 
export default WelcomeBlock;