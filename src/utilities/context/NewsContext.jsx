/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { newsReducer } from "../reducer/newsReducer";

export const NewsContext = createContext();

export const NewsContextProvider = ( { children } ) =>
{
    const initialState = {
        selectedCategory: "",
        searchQuery: "",
    };

    const [ state, dispatch ] = useReducer( newsReducer, initialState );

    return (
        <NewsContext.provider value = {state, dispatch}>
            {children}
        </NewsContext.provider>
    )
}