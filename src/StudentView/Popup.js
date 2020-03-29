import React from 'react';  
import './student.css';  

class Popup extends React.Component {  
    render() {  
        return (  
            <div className='popup'>  
                <div className='popup\_inner'>  
                    <h1>{this.props.text}</h1>  
                    <button onClick={this.props.togglePopup}>close me</button>  
                </div>  
            </div>  
        );  
    }  
}  

export default Popup;