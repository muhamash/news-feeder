import { useEffect, useState } from "react";
import { fetchSearchResults } from "../functions/helper";

const useNewsQuery = ( category = "", searchQuery ) =>
{
    const [ newsData, setNewsData ] = useState( [] );

    useEffect( () =>
    {
        let ignore = false;
        let apiUrl = "http://localhost:8000/v2/top-headlines";

        if ( category )
        {
            apiUrl += `?category=${category}`;
        }
        else if
            ( searchQuery )
        {
            apiUrl = `http://localhost:8000/v2/search?q=${searchQuery}`;
            console.log(apiUrl)
        }
        
        fetchSearchResults( apiUrl )
            .then( ( data ) =>
            {
                if ( !ignore )
                {
                    setNewsData( data.articles || data.result );
                    console.log(data.result)
                }
            } )
            .catch( ( error ) =>
            {
                console.log( "404 searchQuery", error )
            } )
        
        // clean up
        return () =>
        {
            ignore = true;
        };
    }, [ category, searchQuery ] );

    return newsData;
};

export default useNewsQuery;