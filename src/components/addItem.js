import React, { Component } from 'react';


class AddItem extends Component {
    constructor(props){
        super(props)
    
        this.state = {
          item: ""
        }
      }

    handleChange = (event) => {

        
        this.setState({
          item: event.target.value
        })
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        this.props.addItem(this.state.item);
      }
    
    render(){
    return (
        <div>
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <input type="text" onChange={(event)=> this.handleChange(event)}/>
                <input type="submit" />  
            </form>
        </div>
        );
    }

}

export default AddItem;