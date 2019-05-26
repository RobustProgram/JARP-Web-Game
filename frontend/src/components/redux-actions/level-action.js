export const UPDATE_LEVEL = "level:update";

export function updateLevel(newLevel) {
  return {
    type: UPDATE_LEVEL,
    payload: {
      currentLoc: newLevel["start-location"],
      name: newLevel.name,
      locations: newLevel.locations,
      levelURL: newLevel.levelURL,
      loaded: true
    }
  };
}