/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import fetchSearchResults from '../functions/FetchSearchResults';

export const NewsContext = createContext();

export const NewsProvider = ( { children } ) =>
{
    const [ newsData, setNewsData ] = useState( [] );
    const [searchResults, setSearchResults] = useState([]);

    useEffect( () =>
    {
        fetchSearchResults( `http://localhost:8000/v2/top-headlines?` )
            .then( ( data ) =>
            {
                setNewsData( data.articles );
                console.log( 'Fetched news items:', data.articles );
            } )
            .catch( ( error ) =>
                console.error( 'Error fetching news items:', error )
            );
    }, [] );

    const setSearchResultsData = ( results ) =>
    {
        setSearchResults( results );
    };

    return (
        <NewsContext.Provider value={ { newsData, searchResults, setSearchResultsData } }>
            { children }
        </NewsContext.Provider>
    );
};