const React = require('react');

import Channel from './channel'
import { numbers } from './letterSlide'

export default class CMYK extends React.Component {
  render() {
    return (
      <div className="cmyk">
        <Channel name="C" value={this.props.CMYK[0]} bgcolor="#0093D3" maxValue={100} letters={numbers}/>
        <Channel name="M" value={this.props.CMYK[1]} bgcolor="#CC006B" maxValue={100} letters={numbers}/>
        <Channel name="Y" value={this.props.CMYK[2]} bgcolor="#FFF10C" maxValue={100} letters={numbers}/>
        <Channel name="K" value={this.props.CMYK[3]} bgcolor="#333" maxValue={100} letters={numbers}/>
      </div>
    )
  }
}