import { SWITCH_LANGUAGE } from './types';

export const setNewLanguage = ( language ) => {
  return {
    type: SWITCH_LANGUAGE,
    payload: language ,
  }
}
