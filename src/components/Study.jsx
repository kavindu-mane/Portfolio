import React from 'react';
import "./styles.css"
import Branch from "../images/branch.svg"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import MultipleObserver from './MultipleObserver';

AOS.init();

function Study(props) {
    const{cls,hue , children, year , event} = props;

    return (
        <React.Fragment>
            <MultipleObserver>
                <div style={cls}>
                    <div className="row container p-0 m-0">
                        <div className="col-2">
                            <img data-aos="fade-down" data-aos-duration="2000" 
                            src={Branch} alt="branch" style={hue}/><br/>
                            <span className="material-symbols-outlined study-icon" style={hue}>school</span><br/>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="1500"  className= "col-10 d-flex flex-column justify-content-center">
                            <div className="shadow-lg p-3 study-text-area position-relative" style={hue}>
                                <p className="fs-6 text-secondary p-0 m-0">{year}</p>
                                <p className="fs-5 text-primary">{event}</p>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </MultipleObserver>
        </React.Fragment>
    );
}
 
export default Study;