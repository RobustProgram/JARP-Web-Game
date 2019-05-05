import { UPDATE_OPTIONS } from '../redux-actions/options-action';

const initialOptions = {
  name : "Default Name",
  description : [],
  author : "Default Author",
  version : "0.0.1",
  loaded : false
};

export default function optionsReducer(state = initialOptions, {type, payload}) {
  switch(type){
    case UPDATE_OPTIONS:
      return payload;
    default:
      return state;
  }
}