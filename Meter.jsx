import React from 'react'
import GaugeChart from 'react-gauge-chart'

function Meter() {
  return (
<GaugeChart id="gauge-chart5"
  nrOfLevels={420}
  arcsLength={[0.3, 0.5, 0.2]}
  colors={['rgb(87 255 46 / 44%)', 'rgb(255 137 137)', 'rgb(96 205 255)']}
  percent={0.37}
  arcPadding={0.02}
/>
  )
}

export default Meter