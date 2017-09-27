import React, { Component }from 'react';
import { autobind } from 'core-decorators';



class LaunchPage extends Component {
    constructor(props) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);

    }

    @autobind
    onInputChange(event) {
        console.info('onInputChange function was triggered', event.target.value)
        this.props.setNameInfo({ name: event.target.value });
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
               <input
                   type="submit"
                   value="Save"
               />
           </div>
       )
    }
}


export default LaunchPage;
