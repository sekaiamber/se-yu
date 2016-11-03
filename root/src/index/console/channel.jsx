const React = require('react');

import LetterSlide from './letterSlide'

export default class Channel extends React.Component {
  render() {
    let valueStr = this.props.value.toString().toUpperCase().split('');
    if (valueStr.length == 1) {
      valueStr = [null, null].concat(valueStr)
    } else if (valueStr.length == 2) {
      valueStr = [null].concat(valueStr)
    }
    let bgWidth = this.props.value == this.props.maxValue ? 100 : this.props.value / this.props.maxValue * 100;
    return (
      <div className="color-channel">
        <div className="name">{this.props.name}</div>
        <div className="value">
          <LetterSlide letters={this.props.letters} height={30} value={valueStr[0]}/>
          <LetterSlide letters={this.props.letters} height={30} value={valueStr[1]}/>
          <LetterSlide letters={this.props.letters} height={30} value={valueStr[2]}/>
        </div>
        <div className="bg" style={{background: this.props.bgcolor, width: `${bgWidth}%`}}></div>
      </div>
    )
  }
}

export class HexChannel extends React.Component {
  render() {
    let valueStr = this.props.value.toString().toUpperCase().split('');
    valueStr = valueStr.reverse().concat([null, null, null, null, null, null]).slice(0, 6).reverse();
    let bgWidth = this.props.value == this.props.maxValue ? 100 : this.props.value / this.props.maxValue * 100;
    return (
      <div className="color-channel hex">
        <div className="name">{this.props.name}</div>
        <div className="value">
          <LetterSlide letters={this.props.letters} height={30} value={valueStr[0]}/>
          <LetterSlide letters={this.props.letters} height={30} value={valueStr[1]}/>
          <LetterSlide letters={this.props.letters} height={30} value={valueStr[2]}/>
          <LetterSlide letters={this.props.letters} height={30} value={valueStr[3]}/>
          <LetterSlide letters={this.props.letters} height={30} value={valueStr[4]}/>
          <LetterSlide letters={this.props.letters} height={30} value={valueStr[5]}/>
        </div>
        <div className="bg" style={{background: this.props.bgcolor, width: `${bgWidth}%`}}></div>
      </div>
    )
  }
}