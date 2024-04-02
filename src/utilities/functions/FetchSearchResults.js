const fetchSearchResults = async ( url ) =>
{
    try
    {
        const response = await fetch( url );
        if ( !response.ok )
        {
            throw new Error( 'Failed to fetch data' );
        }
        const data = await response.json();
        console.log( data );
        return data;
    }
    catch ( error )
    {
        console.error( 'Error:', error.message );
    }
    
};

export default fetchSearchResults;