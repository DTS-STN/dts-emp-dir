import { SWITCH_DISPLAY } from './types';

export const setDisplayStyle = ( display ) => {
  return {
    type: SWITCH_DISPLAY,
    payload: display ,
  }
}
