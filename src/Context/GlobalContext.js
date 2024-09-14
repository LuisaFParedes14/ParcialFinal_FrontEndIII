import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  theme: 'light',
  dentists: [],
};

const ACTIONS = {
  TOGGLE_THEME: 'TOGGLE_THEME',
  SET_DENTISTS: 'SET_DENTISTS',
};

function globalReducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_THEME:
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case ACTIONS.SET_DENTISTS:
      return { ...state, dentists: action.payload };
    default:
      return state;
  }
}

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {
    axios.get('https://api.example.com/dentists')
      .then(response => {
        dispatch({ type: ACTIONS.SET_DENTISTS, payload: response.data });
      })
      .catch(error => console.error("Error al obtener los dentistas:", error));
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
