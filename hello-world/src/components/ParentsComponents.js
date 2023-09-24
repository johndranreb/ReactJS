import React, { Component } from 'react'
import ChildsComponent from './ChildsComponent'

class ParentsComponents extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      parentName: 'Parent',
    }
    this.greetParent = this.greetParent.bind(this)
  }

  //Define the method
  greetParent(childName){
    //ES6 concatenation
    alert(`Hello ${this.state.parentName} from ${childName}`)
  }

  render() {
    return (
      <div>
        {/* pass the method as a prop */}
        <ChildsComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentsComponents;


