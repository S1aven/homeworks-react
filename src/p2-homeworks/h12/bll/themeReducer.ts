const THEME = 'SELECT_THEME';

export type initStateType = typeof initState;

const initState = {
  selectedTheme: 'dark',
  themes: ['dark', 'red', 'green', 'blue']
};

export const themeReducer = (state = initState, action: ChangeThemeAT): initStateType => { // fix any
  switch (action.type) {
    case THEME: {
      return {
        ...state,
        selectedTheme: action.option
      };
    }
    default:
      return state;
  }
};

type ChangeThemeAT = {
  type: 'SELECT_THEME'
  option: string
}

export const changeThemeAC = (option: string): ChangeThemeAT => {
  return {
    type: THEME,
    option: option
  }
}; // fix any