import { useNewsHook } from '../utilities/hooks/useNewsHook';
import useNewsQuery from '../utilities/hooks/useNewsQuery';
import NewsItems from './NewsItems';

export default function Main() {
  const { state } = useNewsHook();
  const { selectedCategory, searchQuery } = state;

  const newsData = useNewsQuery( selectedCategory, searchQuery );

  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
      { newsData && newsData.length > 0?
        newsData.map( ( result, index ) => (
          <NewsItems
            key={ index }
            title={ result.title }
            text={ result.content }
            time={ result.publishedAt }
            imageSource={ result.urlToImage }
            author={ result.author }
          />
        ) ) : (
          <p>not found</p>
        )
      }
    </div>
  );
}