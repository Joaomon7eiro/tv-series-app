const ui = '[ui]';

export const uiActions = {
  SHOW_SPINNER: `${ui} SHOW SPINNER`,
  HIDE_SPINNER: `${ui} HIDE SPINNER`
};

export const showSpinner = () => ({
  type: uiActions.SHOW_SPINNER
});

export const hideSpinner = () => ({
  type: uiActions.HIDE_SPINNER
});