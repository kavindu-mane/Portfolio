import React , {useState , useEffect} from 'react';
import MultipleObserver from './MultipleObserver';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

function Skill(props) {
    const{percentage , name} = props;
    const [state, setstate] = useState(0);
    const circleVal = (440 - 440 * parseInt(state) / 100) ;

    useEffect(() => {
        if(percentage > state){
            setTimeout(() => {
                setstate(prevState => ++prevState)
            }, 30);
        }      
    });

    return (
        <React.Fragment>
            <MultipleObserver>
                <div className="skillArea position-relative d-flex flex-column justify-content-center align-items-center mb-4"
                data-aos="fade-up" data-aos-duration="1000">
                    <div className="circles position-relative">
                        <svg className='position-relative'>
                            <circle cx={70} cy={70} r={70} strokeDashoffset={circleVal}></circle>
                        </svg>
                        <h2 className='fs-1 position-absolute top-50 start-50 translate-middle text-secondary'>{state}%</h2>
                    </div>
                    <p className="mt-2 fs-4 text-secondary">{name}</p>
                </div>
            </MultipleObserver>
        </React.Fragment>
    );

}

 
export default Skill;