import React, { Component } from 'react'
import Button from './Button';
import './styles.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init()

class Welcome extends Component {
    render() { 
        return (
            <div className='fw-bold inactive ps-4 ps-lg-5'>
                <p className='m-0 fs-4' style={{fontFamily:"Raleway"}} data-aos="fade-right">Hello,</p>
                <p id='name' className='m-0 fs-1 welcomeText' style={{fontFamily:"Ubuntu"}}>I' m <span className='' style={{color:"#00AF91"}}></span></p>
                <p className='m-0 fs-5' style={{fontFamily:"Raleway"}} data-aos="fade-right">Full Stack Developer | Mobile App Developer</p>
                <Button text="Download CV" classText="download" />
            </div>
        );
    }

    componentDidMount = () =>{
        const name = document.querySelector("#name span");
        let value = 0
        const word = "Kavindu Wanniarachchi"
        setInterval(()=>{
            if(value < 42){
                if(value%2 === 0){
                    let temp =  name.textContent
                    name.innerHTML = temp.substring(0,temp.length - 1) + word[value/2]
                }else{
                    name.innerHTML += "_"
                }
            }else{
                if(value===62){
                    name.innerHTML = "K"
                    value= 0
                }else if(value%2 === 0){
                    let temp =  name.textContent
                    name.innerHTML = temp.substring(0,temp.length - 1)
                }else{
                    name.innerHTML += "_"
                }
            }
            value++
            

        },300)
    }


}
 
export default Welcome;