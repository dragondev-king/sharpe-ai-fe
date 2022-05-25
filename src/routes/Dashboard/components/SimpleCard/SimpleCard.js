import CountUp from 'react-countup'

import './style.scss'

const SimpleCard = ({IconComponent, text, value, type }) => {
  return (
    <div className={`card card-${type}`}>
      <span className={type}>{IconComponent}</span>
      <div className={`data-wrapper data-wrapper-${type}`}>
        <p className='text'>{text}</p>
        <p className={`value-${type}`}>$<CountUp end={value.toFixed(2)} duration={1} /></p>
      </div>
    </div>
  )
}

export default SimpleCard
