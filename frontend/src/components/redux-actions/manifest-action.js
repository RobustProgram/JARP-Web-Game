export const UPDATE_MANIFEST = "manifest:update";

export function updateManifest(newManifest) {
  return {
    type: UPDATE_MANIFEST,
    payload: newManifest
  };
}