import React, { Component } from 'react'

class Form extends Component {

constructor(props) {
  super(props)

  this.state = {
     username: '',
      comments: '', //  Step 2 assign the component state to the element value
      topic: 'react'//  Step 2 assign the component state to the element value
  }
}

//class property handlers
handleUsernameChange = event => {
this.setState({username: event.target.value})
}
//class property handlers
handleCommentsChange = event => {
  this.setState({comments: event.target.value})
}
//class property handlers
handleTopicChange = event =>{
  this.state({topic: event.target.value})
}
//class property handlers
handleSubmit = event => {
 alert(`${this.state.username} ${`this.state.comments`} ${this.state.topic}`) //alert message
 event.preventDefault() //this will prevent default behavior of form submission
}

  render() {
    const { username, comments, topic } = this.state //code destructure
    return (
      // assign a handler to the onsubmit event
     <form onSubmit={this.handleSubmit}>
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={this.handleUsernameChange}/> 
      </div>
      {/* Step 1 adding the HMTL */}
      <div>
        <label>Comments</label>
        {/* Step 3 assign the change handler that updates the state onChange */}
        <textarea value={comments} onChange={this.handleCommentsChange}></textarea> 
      </div>
            {/* Step 1 adding the HMTL */}
      <div>
        <lable>Topic</lable>
         {/* Step 3 assign the change handler that updates the state onChange */}
        <select vaule={topic} onChange={this.handleTopicChange}>
          <option value="react"> React</option>
          <option value="angular"> Angular</option>
          <option value="vue"> Vue</option>
        </select>
      </div>
      <button type="submit">Submit</button>
     </form>>
    )
  }
}

export default Form;