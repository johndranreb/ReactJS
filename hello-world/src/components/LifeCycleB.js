import React, { Component } from 'react'

class LifeCycleB extends Component {
  //1st method
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'John'
    }
    console.log('LifeCycleB constructor')
  }

  //2nd method -this method gets access to props and state as parameters and returns new state or null
  static getDerivedStateFromProps(props,state) {
    console.log('LifeCycleB getDerivedStateFromProps')
    return null
  }


  //4th method -componentDidMount
  componentDidMount() {
    console.log('LifeCycleB componentDidMount')
  }

  //3rd method -render
  render() {
    console.log('LifeCycleB render')
    return (
      <div>
        LifeCycleB 
      </div>
    )
  }
}

export default LifeCycleB;