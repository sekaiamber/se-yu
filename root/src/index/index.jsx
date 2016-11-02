const React = require('react');
import { Provider, connect } from 'react-redux'
require('./index.scss')

class Index extends React.Component {
  render() {
    return (
      <div id="workspace">
        Se-yu
      </div>
    )
  }
}

const mapStateToProps = (state/*, props*/) => {
  return {
    brush: state.brush
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