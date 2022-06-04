import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'

function HW11() {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(100)

  const onChangeRangeMin = (value: number[]) => {
    setValue1(value[0])
  }

  const onChangeRangeMax = (value: number[]) => {
    setValue2(value[1])
  }

  return (
    <div className={'wrapper'}>
      <hr/>
      homeworks 11

      {/*should work (должно работать)*/}
      <div className={s.range_wrapper}>
        <div>
          <div>{value1}</div>
          <SuperRange
            // сделать так чтоб value1 изменялось
            value={value1}
            onChangeRangeMin={onChangeRangeMin}
          />
        </div>

        <div>
          <span>{value1}</span>
          <SuperDoubleRange
            // сделать так чтоб value1 и value2 изменялось
            onChangeRangeMin={onChangeRangeMin}
            onChangeRangeMax={onChangeRangeMax}
            value={[value1 , value2]}
            value1={value1}

          />
          <span>{value2}</span>
        </div>
      </div>

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperRange/>*/}
      {/*<AlternativeSuperDoubleRange/>*/}
      <hr/>
    </div>
  )
}

export default HW11
