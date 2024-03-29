import React, {useState} from 'react'
import Affairs from './Affairs'
import '../../App.css'

// types
export type AffairPriorityType = 'low' | 'middle' | 'high'
export type AffairType = {
  _id: number
  name: string
  priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
  {_id: 1, name: 'React', priority: 'high'},
  {_id: 2, name: 'anime', priority: 'low'},
  {_id: 3, name: 'games', priority: 'low'},
  {_id: 4, name: 'work', priority: 'high'},
  {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
  switch (filter) {
    case 'all':
      return affairs
    case 'low':
      return affairs.filter(a => a.priority === 'low')
    case 'middle':
      return affairs.filter(a => a.priority === 'middle')
    case 'high':
      return affairs.filter(a => a.priority === 'high')
    default:
      return affairs
  }// need to fix
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
  return affairs.filter(a => a._id !== _id) // need to fix
}

function HW2() {
  const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
  const [filter, setFilter] = useState<FilterType>('all')

  const filteredAffairs = filterAffairs(affairs, filter)
  const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

  return (
    <div className='wrapper'>
      <hr/>
      homeworks 2

      {/*should work (должно работать)*/}
      <Affairs
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
      />

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeAffairs/>*/}
      <hr/>
    </div>
  )
}

export default HW2
