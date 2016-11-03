const React = require('react');

export default class Color extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  handleTouchStart(e) {
    e = e.touches[0];
    this.handleMouseDown(e);
  }
  handleMouseDown(e) {
    this.props.onChose(e);
  }
  render() {
    let brightness = Math.max.apply(Math, this.props.RGB);
    let className = "color " + (brightness > 150 ? 'light' : 'dark');
    return (
      <div className={className}
        onMouseDown={this.handleMouseDown.bind(this)}
        onTouchStart={this.handleTouchStart.bind(this)}
      >
        <div className="block" style={{background: this.props.hex}}>{this.props.name[0]}</div>
        <div className="info">
          <div className="name">{this.props.name.slice(1)}</div>
          <div className="hex">{this.props.hex.toUpperCase()}</div>
        </div>
      </div>
    )
  }
}