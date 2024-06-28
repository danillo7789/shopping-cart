// persistMiddleware.js
export const persistState = store => next => action => {
    const result = next(action);
    const state = store.getState();
    localStorage.setItem('authState', JSON.stringify(state.auth));
    return result;
  };
  