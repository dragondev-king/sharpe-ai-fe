import './style.scss'

const SimpleCard = ({IconComponent, text, value, type }) => {
  return (
    <div className="card">
      <span className={type}>{IconComponent}</span>
      <div className={`data-wrapper data-wrapper-${type}`}>
        <p className='text'>{text}</p>
        <p className={`value-${type}`}>${value.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default SimpleCard
