import React, { Component }from 'react';
import { autobind } from 'core-decorators';



class LaunchPage extends Component {

    @autobind
    onInputChange(event) {
        console.info('onInputChange function was triggered', event.target.value)
        this.props.setNameInfo(event.target.value);
    }

    @autobind
    onNavigateForward(){
        console.log('onNavigateForward function was called')
        this.props.navigateForward();
    }


    render() {
       return (
           <div>
               <h2>LaunchPage</h2>
               <input
                   id="name"
                   type="text"
                   placeholder="Enter Name"
                   onChange={this.onInputChange}
                   value={this.props.name}
                   name="name"
               />
               <button
                   id="continueButton"
                   name="continue"
                   type="button"
                   onClick={this.onNavigateForward}
               > Continue </button>
           </div>
       )
    }
}


export default LaunchPage;
