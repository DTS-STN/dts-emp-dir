import { SWITCH_DISPLAY } from '../actions/types'

const initialState = {
  display: 'row'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SWITCH_DISPLAY:
      return {
        ...state,
        display: action.payload,
      };
    default:
      return state;
  }
}
