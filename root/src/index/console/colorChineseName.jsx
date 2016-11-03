const React = require('react');

import { HorizontalLetterSlide } from './letterSlide'
import chinese from './../../utils/data/chinese.json'

const chinese0 = chinese[0].split('');
const chinese1 = chinese[1].split('');
const chinese2 = chinese[2].split('');
const chinese3 = chinese[3].split('');

export default class ColorChineseName extends React.Component {
  render() {
    return (
      <div className="color-chinese-name">
        <HorizontalLetterSlide width={130} height={130} value={this.props.name[0]} letters={chinese0}/>
        <HorizontalLetterSlide width={130} height={130} value={this.props.name[1]} letters={chinese1}/>
        <HorizontalLetterSlide width={130} height={130} value={this.props.name[2]} letters={chinese2}/>
        <HorizontalLetterSlide width={130} height={130} value={this.props.name[3]} letters={chinese3}/>
      </div>
    )
  }
}