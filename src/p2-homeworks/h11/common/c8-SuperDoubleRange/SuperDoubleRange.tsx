import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import React from 'react'

type SuperDoubleRangePropsType = {
  onChangeRangeMin: (value: number[]) => void
  onChangeRangeMax: (value: number[]) => void
  value: number[]
  value1: number
  // min, max, step, disable, ...
}

function valuetext(value: number) {
  return `${value}°C`;
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
  {
    onChangeRangeMin,
    onChangeRangeMax,
    value,
    // min, max, step, disable, ...
  }
) => {

  const handleChange = (event: Event, value: number | number[]) => {
    onChangeRangeMin(value as number[])
    onChangeRangeMax(value as number[])
  };

  return (
      <Box sx={{width: 200}}>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
  )
}

export default SuperDoubleRange
