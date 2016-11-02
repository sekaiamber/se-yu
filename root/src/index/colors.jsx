const React = require('react');
import Color from './color'

require('./colors.scss');

export default class Colors extends React.Component {
  handleMouseDown(e, i) {
    this.props.dispatch({
      type: 'COLOR_SET_COLOR',
      index: i
    });
    this.props.dispatch({
      type: 'COLOR_UPDATE_POINTER',
      pointer: {
        x: e.clientX,
        y: e.clientY
      }
    });
    e.preventDefault();
  }
  render() {
    return (
      <div id="colors">
        {this.props.color.colors.map((color, i) => 
          <Color key={i} {...color}
            onChose={(e) => this.handleMouseDown(e, i)} 
          />
        )}
      </div>
    )
  }
}