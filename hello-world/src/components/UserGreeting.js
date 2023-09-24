import React, { Component } from 'react'

 class UserGreeting extends Component {

  constructor(props) {
    super(props)

    //define the state property
    this.state = {
       isLoggedIn: true
    }
  }

  render() {
    
   return this.state.isLoggedIn && <div>Welcome JB</div> //the expression first evaluates the left side of the operator. If it is true it also evaluates the right side (JSX) that will be rendered in the browser.However, if it all the left side evaluates to false the right side will never be evaluated as it doesn't affect the final value of the whole expression


    // return this.state.isLoggedIn ? ( // evaluate true or false
    //   <div>Welcome JB</div>  ) : (<div>Welcome Guest</div>  
    // )


    // //declare a variable inside the render method
    // let message //stores the element to be rendered
    // if(this.state.isLoggedIn) {
    //   message = <div>Welcome JB</div>
    // }else{
    //   message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>


    //if else condition
    // if(this.state.isLoggedIn){
    //   return  <div>Welcome JB</div>

    // }else{
    //   return <div>Welcome Guest</div>
    // }
    // return (
    //   <div>
    //    <div> Welcome JB</div>
    //    <div> Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting;