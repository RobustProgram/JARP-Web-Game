export const UPDATE_OPTIONS = "options:update";

export function updateOptions(newOptions) {
  return {
    type: UPDATE_OPTIONS,
    payload: {
      name: newOptions.name,
      description: newOptions.description,
      author: newOptions.author,
      version: newOptions.version
    }
  };
}