import React, { Component }from 'react';
import { autobind } from 'core-decorators';


class LaunchPage extends Component {

    constructor(props){
        super(props);
    }

    @autobind
    onInputChange(event){
        this.props.setPostInfo({
            [event.target.name]: event.target.value,
        });
    }


    render() {
       return (
           <div>
               <h2>LaunchPage</h2>
               <input
                   type="text"
                   onChange={this.onInputChange}
                   value={this.props.name}
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
