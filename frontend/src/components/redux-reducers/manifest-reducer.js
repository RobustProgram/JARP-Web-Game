import { UPDATE_MANIFEST } from '../redux-actions/manifest-action';

const initialManifest = {
  options: ""
};

export default function manifestReducer(state = initialManifest, {type, payload}) {
  switch(type){
    case UPDATE_MANIFEST:
      return payload;
    default:
      return state;
  }
}