import React, { Component } from 'react'
import Study from './Study';
import 'aos/dist/aos.css'; 

class About extends Component {
    render() { 
        const style = "fs-6 text-black m-0"
        return (
            <React.Fragment>
                <h3 className='text-secondary text-center pb-3'>Education</h3>
                <span className="material-symbols-outlined study-icon top-study-icon">trip_origin</span>
                <Study year = {"2021 - Now"}  event = {"CST Undergraduate"}>
                    <div>
                    <p className={style}>Computer Science & Technology undergraduate at facalty of Applied Sciences 
                    , Uva Wellassa University - Sri Lanka </p>
                </div>
                </Study>
                <Study hue = {{filter:"hue-rotate(100deg)"}} cls = {{transform:"translateY(-60px)"}} 
                year = {"2019"}  event = {"GCE A/L - 2019"}>
                <div>
                    <p className={style}>Index : </p>
                    <p className={style}>Combine Maths : B</p>
                    <p className={style}>ICT : B</p>
                    <p className={style}>Physics : C </p>
                </div>
                </Study>
                <Study hue = {{filter:"hue-rotate(150deg)"}} cls = {{transform:"translateY(-120px)"}}
                year = {"2017 - 2019"}  event = {"GCE A/L - 2019"}>
                <div>
                    <p className={style}>Maths + ICT (Common stream) at MR/ Vijitha Central Collage - Dickwella </p>
                </div>
                </Study>
                <Study hue = {{filter:"hue-rotate(200deg)"}} cls = {{transform:"translateY(-180px)"}}
                year = {"2006 - 2016"}  event = {"Grade 1 to Grade 11"}>
                <div>
                    <p className={style}>Studiet at MR/ Vijitha Central Collage - Dickwella </p>
                    <p className={style}>GCE O/L (2016) - 6A , 2B , 1S</p>
                </div>
                </Study>
            </React.Fragment>
        );
    }
}
 
export default About;