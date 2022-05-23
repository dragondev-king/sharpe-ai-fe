import './style.scss'

const TaurusCard = ({name, value, percentage, logoLeft, logoRight}) => {
  return (
    <div className="card-container">
      <div className='card-header'>
        <span>{value ? value : 0} USDC</span>
        <span>{percentage ? percentage : 20} % APY</span>
      </div>
      <div className='logo-component'>
        {logoLeft}
        {logoRight}
      </div>
      {name}
    </div>
  )
}

export default TaurusCard
