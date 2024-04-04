/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';
import fetchSearchResults from '../functions/FetchSearchResults';


const NewsContext = createContext();

export const useNewsContext = () => useContext( NewsContext );

export const NewsProvider = ( { children } ) =>
{
    const [ newsData, setNewsData ] = useState( [] );

    useEffect( () =>
    {
        fetchSearchResults( `http://localhost:8000/v2/top-headlines?` )
            .then( data =>
            {
                setNewsData( data.articles );
                console.log( 'Fetched news items:', data );
            } )
            .catch( error => console.error( 'Error fetching news items:', error ) );
    }, [] );

    return (
        <NewsContext.Provider value={ { newsData } }>
            { children }
        </NewsContext.Provider>
    );
};
