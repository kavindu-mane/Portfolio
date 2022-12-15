import React, { Component } from 'react';
import Skill from './Skill';
import "./styles.css"

class Skills extends Component {
    render() { 
        return (
            <React.Fragment>
                <div className="container mx-0 pt-5 row d-flex justify-content-center shadow-lg rounded-4 skill-background">
                    <div className="col-12 col-md-6 col-xl-3"><Skill name="HTML" percentage="90"/></div>
                    <div className="col-12 col-md-6 col-xl-3"><Skill name="JavaScript" percentage="80"/></div>
                    <div className="col-12 col-md-6 col-xl-3"><Skill name="PHP" percentage="70"/></div>
                    <div className="col-12 col-md-6 col-xl-3"><Skill name="Java" percentage="85"/></div>
                    <div className="col-12 col-md-6 col-xl-3"><Skill name="React" percentage="90"/></div>
                    <div className="col-12 col-md-6 col-xl-3"><Skill name="Flutter" percentage="80"/></div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Skills;