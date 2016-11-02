var setTextActionCreator = function (text) {
  return {
    type: 'COLOR_SET_TEXT',
    text: text
  }
}

var setTextActionCreatorAsync = function (text) {
  return (dispatch) => {
    setTimeout(function () {
      dispatch({
        type: 'COLOR_SET_TEXT',
        text: text
      })
    }, 2000)
  } 
}

export default {
  setTextActionCreator,
  setTextActionCreatorAsync
}