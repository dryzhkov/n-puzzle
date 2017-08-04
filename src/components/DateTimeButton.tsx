import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IButtonState {
  content: string;
}

export class DateTimeButton extends React.Component<{}, IButtonState> {
  constructor(props) {
    super(props);
    this.state = { content: new Date().toLocaleString() };
  }

  render() {
    return (
      <div>
        <span>Click to refresh time</span>
        <button onClick={this.getTime}>
          Current Time: {this.state.content}
        </button>
      </div>
    );
  }

  getTime = () => {
    this.setState({
      content: new Date().toLocaleString()
    });
  }
};