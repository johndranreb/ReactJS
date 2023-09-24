import React from 'react'
import Person from './Person'

function NameList() {
  const persons = [
    {
     id:1,
     name:'Bruce',
     age: 25,
     skill: 'react'
  },
  {
    id:2,
    name:'Charles',
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
const personList = persons.map(person => <Person key={person.id} person={person}/>)
  return <div>{personList}</div> 
}

export default NameList;