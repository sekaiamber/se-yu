const React = require('react');
import { Provider, connect } from 'react-redux'
require('./index.scss')

import Background from './background'
import Colors from './colors'
import Console from './console'

class Index extends React.Component {
  render() {
    return (
      <div id="workspace">
        <Background dispatch={this.props.dispatch} color={this.props.color} pointer={this.props.color.pointer}/>
        <div id="center">
          <Colors dispatch={this.props.dispatch} color={this.props.color}/>
          <Console color={this.props.color.current} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state/*, props*/) => {
  return {
    color: state.color
  }
}

const ConnectedIndex = connect(mapStateToProps)(Index)

export default class StoreIndex extends React.Component {
  render () {
    return (
      <Provider store={ this.props.store }>
        <ConnectedIndex />
      </Provider>
    )
  }
}