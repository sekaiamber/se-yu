const React = require('react');

export default class LetterSlide extends React.Component {
  render() {
    let index = 0;
    if (this.props.value != undefined) {
      index = this.props.letters.indexOf(this.props.value) + 1;
    }

    let slideCss = {
      height: `${this.props.height}px`,
    }
    let transCss = {
      transform: `translate(0, -${index * this.props.height}px)`
    }
    let letterCss = {
      height: `${this.props.height}px`,
      lineHeight: `${this.props.height}px`,
    }
    return (
      <div className="letter-slide" style={slideCss}>
        <div className="slide-transform" style={transCss}>
          <div className="letter" style={letterCss}></div>
          {this.props.letters.map((letter, i) => 
            <div key={i} className="letter" style={letterCss}>{letter}</div>
          )}
        </div>
      </div>
    )
  }
}

export class HorizontalLetterSlide extends React.Component {
  render() {
    let index = 0;
    if (this.props.value != undefined) {
      index = this.props.letters.indexOf(this.props.value) + 1;
    }

    let slideCss = {
      height: `${this.props.height}px`,
      width: `${this.props.width}px`,
    }
    let transCss = {
      transform: `translate(-${index * this.props.width}px, 0)`
    }
    let letterCss = {
      height: `${this.props.height}px`,
      lineHeight: `${this.props.height}px`,
      width: `${this.props.width}px`,
    }
    return (
      <div className="letter-slide horizontal" style={slideCss}>
        <div className="slide-transform" style={transCss}>
          <div className="letter" style={letterCss}></div>
          {this.props.letters.map((letter, i) => 
            <div key={i} className="letter" style={letterCss}>{letter}</div>
          )}
        </div>
      </div>
    )
  }
}

export const numbers = "0123456789".split('');
export const hex_numbers = "0123456789ABCEDF".split('');
export const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');