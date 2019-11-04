import React from 'react';
import './App.css';
// import Clock from './Clock';
import StartButton from './StartButton';
import HourField from './HourField';
import MinuteField from './MinuteField';
import SecondsField from './SecondsField';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      hour: 0,
      minute: 0,
      seconds: 0
    }
  }

  countDown = () => {
    this.update = setInterval(() => {
      if (this.state.seconds === 0 && this.state.minute > 0) {
        this.setState({seconds: 59})
        this.setState({ minute: this.state.minute - 1})
        if (this.state.minute === 0 && this.state.hour > 0) {
          this.setState({minute: 59})
          this.setState({hour: this.state.hour - 1})
        }
      }
      if (this.state.seconds < 0) {
        return
      }
      this.setState({seconds: this.state.seconds - 1})
    }, 1000)
  }

  onHourChange = (event) => {
    this.setState({hour: event.target.value})
  }

  onMinuteChange = (event) => {
    this.setState({minute: event.target.value})
  }

  onSecondsChange = (event) => {
    this.setState({seconds: event.target.value})
  }

  componentDidUpdate() {
    if (this.state.seconds === - 1) {
      this.setState({seconds: 0})
    }
  }

  render() {
    return (
      <div className='tc'>
        <div className='bg-light-yellow ma0 pa3'>
          <h1 className='shadow-5 dib pa3 purple f1 bold'>React Timer</h1>
        </div>
        <div className='dib'>
          <HourField onHourChange={this.onHourChange} />
          <MinuteField onMinuteChange={this.onMinuteChange} />
          <SecondsField onSecondsChange={this.onSecondsChange} />
        </div>
        <br />
        {/* ma3 br2 ba b--light-red pa2 tr dib */}
        <h2 className='pa3 pl5 pr5 dib ma br4 bw3 ba b--red bg-light-yellow shadow-5'>
          {this.state.hour}
        </h2>
        <h2 className='pa3 pl5 pr5 dib ma br4 bw3 ba b--red bg-light-yellow shadow-5'>
          {this.state.minute}
        </h2>
        <h2 className='pa3 pl5 pr5 dib ma br4 bw3 ba b--red bg-light-yellow shadow-5'>
          {this.state.seconds}
        </h2>
        <StartButton countDown={this.countDown} />
        <p className='tr ma3 f2'>by Albany Buipe</p>
      </div>
    )
  }
}

export default App;
