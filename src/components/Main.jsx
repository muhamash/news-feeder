import { useNewsContext } from '../utilities/context/CustomContext';
import NewsItems from './NewsItems';

export default function Main ()
{
  const { newsData } = useNewsContext();
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-10'>
      { newsData.map( ( newsItem, index ) => (
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
  )
}