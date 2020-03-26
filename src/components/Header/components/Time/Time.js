import React from 'react';
import moment from 'moment';
import './Time.css';

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: moment().format('HH:mm') };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.time !== moment().format('HH:mm'))
        this.setState({ time: moment().format('HH:mm') });
    }, 1000);
  }

  render() {
    const { time } = this.state;
    return <span className="header_time">{time}</span>;
  }
}

export default Time;
