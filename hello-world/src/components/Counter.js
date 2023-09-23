import React, { Component } from 'react'

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0  
    }
  }

  increment (){
    // this.setState(
    // //1st parameter is an object which sets the state value 
    //   {
    //   count: this.state.count + 1
    // }, 
    // // 2nd parameter is the arrow function where we simply log the updated state.count value
    // () => {console.log('Callback value', this.state.count)})
    

    //pass a function as an argument
    this.setState((prevState,props) => ({
      //we set the count state value to previous state plus 1 
      count: prevState.count + 1
    }) )
    console.log(this.state.count)
  }

  incrementFive(){
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        {/* call the incrementFive */}
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter