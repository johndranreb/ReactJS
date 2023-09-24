import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello'
    }

    //Binding the event handler in the constructor (this is the approach in official react documentation)
    // this.clickHandler = this.clickHandler.bind(this)

  }

  // clickhandler() {
  //   this.setState({
  //     message: 'Goodbye'
  //   })
  //  console.log(this)
  //}


  //Use an arrow function as a class property
  clickHandler = () => {
    this.setState({
         message: 'Goodbye'
   })
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Binding in the render method: */}
         {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* User arrow function in the render method -simply calling the event handler in the arrow function body */}
        {/* <button onClick={() => this.clickHandler()}>Click</button>  */}
        <button onClick={ this.clickHandler}>Click</button> 
      </div>
    )
  }
}

export default EventBind;