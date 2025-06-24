// Write your code here

import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    timeElapsedInSeconds: 0,
    isTimerRunning: 0
  }

  renderSeconds = () =>{
    const {timeElapsedInSeconds} = this.state 

    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if (seconds < 10){
      return `0${seconds}`
    }
    return seconds
  }


  renderMinutes = () =>{
    const {timeElapsedInSeconds} = this.state 

    const minutes = Math.floor(timeElapsedInSeconds/60)
    if (minutes < 10){
      return `0${minutes}`
    }
    return minutes
  }
  render() {
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div>
        <div>
          <h1> Stopwatch </h1>
          <div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p> Timer </p>
            </div>
            <h1>{time}</h1>
            <div>
              <button type="button">Start</button>
              <button type="button">Stop</button>
              <button type="button">Reset</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
