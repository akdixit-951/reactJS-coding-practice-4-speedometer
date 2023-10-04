import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}

  onAcceleration = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevSpeed => ({count: prevSpeed.count + 10}))
    }
  }

  onApplyingBrakes = () => {
    const {count} = this.state
    if (count >= 10) {
      this.setState(prevSpeed => ({count: prevSpeed.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="speedometer-img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed-details">Speed is {count}mph</h1>
        <p className="desc">Min Limit is 0mph, Max Limit is 200mph.</p>
        <div>
          <button
            type="button"
            className="acc-btn"
            onClick={this.onAcceleration}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="brake-btn"
            onClick={this.onApplyingBrakes}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
