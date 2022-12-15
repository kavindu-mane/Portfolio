import { Component } from 'react';

class Button extends Component {
    render() { 
        const {classText , text} = this.props;
        return (
            <button className='text-white orange btn px-2 py-1 mt-3 d-flex align-items-center btns'>
                <span className='material-symbols-outlined pe-2'>{classText}</span>{text}</button>
        );
    }
}
 
export default Button;
