import { SWITCH_LANGUAGE } from '../actions/types'

const initialState = {
  language: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SWITCH_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
      default:
      return state;
  }
}
