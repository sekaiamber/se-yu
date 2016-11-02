// brush
const defaultBrush = {
  text: 'Draw with words'
}

var colorReducer = function (state = defaultBrush, action) {

  switch (action.type) {
    case 'COLOR_SET_TEXT':
      return {
        ...state,
        text: action.text
      }
    default:
      return state;
  }
}

export default colorReducer;