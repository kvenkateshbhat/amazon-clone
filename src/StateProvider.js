import React, { createContext, useContext, useReducer } from 'react';

// prepares the data layer ie redux
export const StateContext = createContext();

// wrap our app and provide data layer to our app
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// pull information from the data layer
export const useStateValue = () => useContext(StateContext);
