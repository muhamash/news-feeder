/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { newsReducer } from "../reducer/newsReducer";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    const initialState = {
        selectedCategory: "",
        searchQuery: "",
    };

    const [ state, dispatch ] = useReducer( newsReducer, initialState );
    const contextValue = { state, dispatch };
    console.log(contextValue)
    return (
        <NewsContext.Provider value={contextValue}>
            {children}
        </NewsContext.Provider>
    );
};