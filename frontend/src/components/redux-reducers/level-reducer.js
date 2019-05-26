import { UPDATE_LEVEL } from '../redux-actions/level-action';

const initialLevel = {
  currentLoc: "",
  locations : {},
  loaded : false
};

export default function levelReducer(state = initialLevel, {type, payload}) {
  switch(type){
    case UPDATE_LEVEL:
      return payload;
    default:
      return state;
  }
}