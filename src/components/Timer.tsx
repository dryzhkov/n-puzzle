import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GameState } from './Game';

interface ITimerState {
  hours: number;
  minutes: number;
  seconds: number;
}

export class Timer extends React.Component<ITimerProps, ITimerState> {
  private secondsElapsed;
  private timeoutHandler;
  constructor(props) {
    super(props);
    this.secondsElapsed = 0;
    this.state = { 
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentWillUpdate(nextProps: ITimerProps) {
    if (nextProps.gameState === GameState.InProgress) {
      if (!this.timeoutHandler) {
        this.timeoutHandler = setInterval(() => {
          ++this.secondsElapsed;

          this.setState({ 
            hours: Math.floor(this.secondsElapsed / 3600),
            minutes: Math.floor(this.secondsElapsed / 60),
            seconds: this.secondsElapsed % 60
          });
        }, 1000);
      }
    } else if (nextProps.gameState === GameState.Complete) {
      clearTimeout(this.timeoutHandler);
      this.timeoutHandler = null;
      this.secondsElapsed = 0;
    }
  }

  render() {
    return (
      <div>
        Time:
        <label>{this.state.hours}</label>
        :
        <label>{this.state.minutes}</label>
        :
        <label>{this.state.seconds}</label>
      </div>
    );
  }
};