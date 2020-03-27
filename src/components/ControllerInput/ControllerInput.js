import React from 'react';

require('joypad.js');

const ControllerHOC = (WrappedComponent, length) => {
  let right = false;
  let left = false;
  let up = false;
  let down = false;

  const margin = 0.4;

  return class Controller extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        x: 1,
        y: 1,
        maxX: length,
        maxY: 1,
        max: 1
      };
    }

    componentDidMount() {
      window.joypad.set({
        axisMovementThreshold: 0.15
      });
      window.joypad.on('axis_move', (e) => {
        const { axes } = e.detail.gamepad;
        let { x } = this.state;
        let { y } = this.state;
        const { maxX } = this.state;
        const { maxY } = this.state;
        const { max } = this.state;

        if (axes[0] > margin && right === false) {
          right = true;
          x += 1;
        } else if (axes[0] < margin && right === true) {
          right = false;
        }

        if (axes[0] < -margin && left === false) {
          left = true;
          x -= 1;
        } else if (axes[0] > -margin && left === true) {
          left = false;
        }

        if (axes[1] > margin && down === false) {
          down = true;
          y += 1;
        } else if (axes[1] < margin && down === true) {
          down = false;
        }

        if (axes[1] < -margin && up === false) {
          up = true;
          y -= 1;
        } else if (axes[1] > -margin && up === true) {
          up = false;
        }

        if (y < 1) {
          y = 1;
        }
        if (y > maxY) {
          y = maxY;
        }
        if (x < 1) {
          x = 1;
        }
        if (x > maxX) {
          x = maxX;
        }
        if (y === maxY && length % max !== 0) {
          if (x > length % max) {
            x = length % max;
          }
        }

        if (this.state.x !== x || this.state.y !== y) {
          this.setState({
            x,
            y
          });
        }
      });
    }

    render() {
      return <WrappedComponent x={this.state.x} y={this.state.y} />;
    }
  };
};

export default ControllerHOC;
