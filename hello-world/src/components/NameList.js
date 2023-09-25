import React from 'react'
import Person from './Person'

function NameList() {
  const names = ['Bruce','Clark','Diana','Bruce']
  const persons = [
    {
     id:1,
     name:'Bruce',
     age: 25,
     skill: 'react'
  },
  {
    id:2,
    name:'Clark',
    age: 23,
    skill: 'python'
 },
 {
  id:3,
  name:'Diana',
  age: 25,
  skill: 'JavaScript'
}
]
const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
  return <div>{nameList}</div> 
}

export default NameList;