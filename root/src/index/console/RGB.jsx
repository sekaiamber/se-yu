const React = require('react');

import Channel from './channel'
import { HexChannel } from './channel'
import { numbers, hex_numbers } from './letterSlide'

export default class RGB extends React.Component {
  render() {
    return (
      <div className="rgb">
        <Channel name="R" value={this.props.RGB[0]} bgcolor="#FF0000" maxValue={255} letters={numbers}/>
        <Channel name="G" value={this.props.RGB[1]} bgcolor="#00FF00" maxValue={255} letters={numbers}/>
        <Channel name="B" value={this.props.RGB[2]} bgcolor="#0000FF" maxValue={255} letters={numbers}/>
        <HexChannel name="#" value={this.props.hex} bgcolor={this.props.hex} maxValue={this.props.hex} letters={hex_numbers}/>
      </div>
    )
  }
}