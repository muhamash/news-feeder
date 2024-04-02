import { useEffect, useState } from 'react';
import fetchSearchResults from '../utilities/functions/FetchSearchResults';
import NewsItems from './NewsItems';

export default function Main() {
  const [data, setData] = useState([]);

  useEffect( () =>
  {
    fetchSearchResults( 'http://localhost:8000/v2/top-headlines?' )
      .then( ( data ) =>
      {
        setData( data.articles );
        console.log( data );
      } )
      .catch( ( err ) =>
      {
        console.log( 'Error fetching data:', err );
      } );
  }, [] );

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      { data.map( ( newsItem, index ) => (
        <NewsItems
          key={ index }
          title={ newsItem.title }
          text={ newsItem.description }
          time={ newsItem.publishedAt }
          imageSource={ newsItem.urlToImage }
          author={ newsItem.author }
        />
      ) ) }
    </div>
  );
}