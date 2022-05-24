import { Button } from '@material-ui/core'
import './style.scss'

const TaurusCard = ({name, value, percentage, logoLeft, logoRight}) => {
  return (
    <div className="card-container">
      <div className='card-wrapper'>
        <div className='card-header'>
          <div className='values-wrapper'>
            <span>{value ? value : 0} USDC</span>
            <span className='small-value'>${(0).toFixed(2)}</span>
          </div>
          <span>{percentage ? percentage : 20} % APY</span>
        </div>
        <div className='logo-container'>
          <img src={logoRight} alt="" className='right'/>
          <img src={logoLeft} alt="" className='left'/>
        </div>
        <p>USDC-{name}</p>
        <div className='btn-wrapper'>
          <Button className='btn'>Start Earning</Button>
        </div>
      </div>
    </div>
  )
}

export default TaurusCard
