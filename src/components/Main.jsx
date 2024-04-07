import { useNewsContext } from '../utilities/context/useNewsContext';
import NewsItems from './NewsItems';

export default function Main() {
  const { newsData, searchResults } = useNewsContext();

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-10'>
      { searchResults.length > 0 ? (
        searchResults.map( ( result, index ) => (
          <NewsItems
            key={ index }
            title={ result.title }
            text={ result.content }
            time={ result.publishedAt }
            imageSource={ result.urlToImage }
            author={ result.author }
          />
        ) )
      ) : (
        newsData.map( ( newsItem, index ) => (
          <NewsItems
            key={ index }
            title={ newsItem.title }
            text={ newsItem.content }
            time={ newsItem.publishedAt }
            imageSource={ newsItem.urlToImage }
            author={ newsItem.author }
          />
        ) )
      ) }
    </div>
  );
}