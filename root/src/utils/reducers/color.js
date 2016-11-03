// color
import colors from './../data/hsl_colors'

const hex_colors = {};
const name_colors = {};
for (let i = 0; i < colors.length; i++) {
  let color = colors[i];
  hex_colors[color.hex] = color;
  name_colors[color.name] = color;
}

const defaultColor = {
  name: 'Chinese Colors',
  colors: colors,
  current: colors[Math.floor(Math.random() * colors.length)],
  pointer: {
    x:0, y:0
  }
}

var colorReducer = function (state = defaultColor, action) {

  switch (action.type) {
    case 'COLOR_SET_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'COLOR_SET_RANDOM_CURRENT_COLOR':
      return {
        ...state,
        current: colors[Math.floor(Math.random() * colors.length)]
      }
    case 'COLOR_SET_COLOR':
      let current = colors[0];
      if (action.index) {
        current = colors[action.index];
      } else if (action.hex) {
        current = hex_colors[action.hex];
      } else if (action.name) {
        current = name_colors[action.hex];
      }
      return {
        ...state,
        current: current
      }
    case 'COLOR_UPDATE_POINTER':
      return {
        ...state,
        pointer: action.pointer
      }
    default:
      return state;
  }
}

export default colorReducer;