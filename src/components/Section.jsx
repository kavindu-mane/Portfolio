import React,{ Component } from 'react'
import "./styles.css"

class Section extends Component {
    render() { 
        const {name,children} = this.props;

        return (
           <React.Fragment>
                <div className='container-fluid'>
                    <p id={name} className='fs-2 fw-normal my-4 ps-3 inactive sectionText'>{name} <span className='text-primary'>
                        <a href={'#'+{name}} className="text-decoration-none fw-normal">&nbsp;#</a></span></p>
                </div>
            
                <div className="container">
                    {children}
                </div>
           </React.Fragment> 
        );
    }
}
 
export default Section;