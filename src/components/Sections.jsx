import React, { Component} from 'react';
import About from './About';
import Section from './Section';
import Skills from './Skills';

class Sections extends Component {
    render() { 
        return (
            <React.Fragment> 
                <Section name= "Skills">
                    <Skills/>
                </Section>
                <Section name= "About">
                    <About/>
                </Section>
                <Section name= "Contact"/>
            </React.Fragment>
        );
    }
}
 
export default Sections;