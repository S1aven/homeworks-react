import React, {useState} from 'react'
import {checkAgeAC, homeWorkReducer, sortDownAC, sortUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'
import '../../App.css'

export type UserType = {
  _id: number
  name: string
  age: number
}

const initialPeople:UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={s.user}>
          <div>{p.name}</div>
          <div>{p.age}</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortUpAC()))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortDownAC()))
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, checkAgeAC(18)))

    return (
        <div className={'wrapper' || s.wrapper}>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            {finalPeople}

            <div className={s.panelButton}>
              <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
              <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
              <div><SuperButton onClick={checkAge}>check 18</SuperButton></div>
            </div>

            {/*<div>sort down</div>*/}
            {/*check 18*/}

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
