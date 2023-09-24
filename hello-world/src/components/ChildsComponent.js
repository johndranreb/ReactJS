import React from 'react'


function ChildsComponent(props) {
  return (
    <div>
      {/* access the props method using the props object */}
      <button onCLick={() => props.greetHandler('child')}> Greet Parent</button>
    </div>
  )
}

export default ChildsComponent;