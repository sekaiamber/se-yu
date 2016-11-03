const React = require('react');

require('./console.scss')


import CMYK from './console/CMYK'
import RGB from './console/RGB'
import ColorChineseName from './console/colorChineseName'

export default class Console extends React.Component {
  render() {
    let brightness = Math.max.apply(Math, this.props.color.RGB);
    let className = (brightness > 180 ? 'light' : 'dark');
    return (
      <div id="console" className={className}>
        <ColorChineseName name={this.props.color.name} />
        
        <div className="color-detail">
          <CMYK {...this.props.color} />
          <RGB {...this.props.color} />
        </div>
      </div>
    )
  }
}