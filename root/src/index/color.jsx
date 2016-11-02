const React = require('react');

export default class Color extends React.Component {
  handleTouchStart(e) {
    e = e.touches[0];
    this.handleMouseDown(e);
  }
  handleMouseDown(e) {
    this.props.onChose(e);
  }
  render() {
    return (
      <div className="color"
        onMouseDown={this.handleMouseDown.bind(this)}
        onTouchStart={this.handleTouchStart.bind(this)}
      >{this.props.name}</div>
    )
  }
}