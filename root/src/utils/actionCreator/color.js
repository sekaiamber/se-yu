var setNameActionCreator = function (name) {
  return {
    type: 'COLOR_SET_NAME',
    name: name
  }
}

var setNameActionCreatorAsync = function (name) {
  return (dispatch) => {
    setTimeout(function () {
      dispatch({
        type: 'COLOR_SET_NAME',
        name: name
      })
    }, 2000)
  } 
}

export default {
  setNameActionCreator,
  setNameActionCreatorAsync
}