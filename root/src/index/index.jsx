const React = require('react');
import { Provider, connect } from 'react-redux'
require('./index.scss')

import Background from './background'
import Colors from './colors'

class Index extends React.Component {
  render() {
    return (
      <div id="workspace">
        <Background dispatch={this.props.dispatch} color={this.props.color} pointer={this.props.color.pointer}/>
        <Colors dispatch={this.props.dispatch} color={this.props.color}/>
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