import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
  //1st method
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'John'
    }
    console.log('LifeCycleA constructor')
  }

  //2nd method -this method gets access to props and state as parameters and returns new state or null
  static getDerivedStateFromProps(props,state) {
    console.log('LifeCycleA getDerivedStateFromProps')
    return null
  }


  //4th method -componentDidMount
  componentDidMount() {
    console.log('LifeCycleA componentDidMount')
  }

  //3rd method -render
  render() {
    console.log('LifeCycleA render')
    return (
      <div>
        <div>LifeCycleA </div>
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA;