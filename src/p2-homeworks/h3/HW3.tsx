import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import '../../App.css'

// types
export type UserType = {
  _id: string // need to fix any
  name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
  const [users, setUsers] = useState<Array<UserType>>([
    {_id: v1(), name: 'Sergei'},
    {_id: v1(), name: 'Valera'},
    {_id: v1(), name: 'Sacha'},
  ]) // need to fix any

  console.log(users)
  const addUserCallback = (name: string) => { // need to fix any
    const newUser = {_id: v1(), name: name}
    const newUsers = [newUser, ...users]
    setUsers(newUsers) // need to fix
  }

  return (
    <div className='wrapper'>
      <hr/>
      homeworks 3

      {/*should work (должно работать)*/}
      <GreetingContainer users={users} addUserCallback={addUserCallback}/>

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeGreeting/>*/}
      <hr/>
    </div>
  )
}

export default HW3
