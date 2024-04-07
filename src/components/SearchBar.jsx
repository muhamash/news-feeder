/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useNewsContext } from '../utilities/context/useNewsContext';
import fetchSearchResults from '../utilities/functions/FetchSearchResults';

export default function SearchBar() {
  const [isHovered, setIsHovered] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { setSearchResultsData, newsData } = useNewsContext();
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value.trim());
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout( () =>
    {
      if ( searchTerm.length >= 2 )
      {
        search( searchTerm );
      }
      else
      {
        setSearchResultsData( newsData );
      }
    }, 500 );

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const search = async (term) => {
    try {
      const data = await fetchSearchResults(`http://localhost:8000/v2/search?q=${term}`);
      console.log(data.result);
      setSearchResultsData(data.result);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="flex items-center space-x-3 lg:space-x-8">
      <div
        className="relative"
        onMouseEnter={ handleMouseEnter }
        onMouseLeave={ handleMouseLeave }
      >
        <img className="cursor-pointer" src="/search.svg" alt="Search" />
        { isHovered && (
          <input
            type="text"
            className="absolute top-3 right-[50px] w-[200px] h-[30px] px-4 py-2 border border-gray-300 rounded-md transition-opacity duration-300 delay-300"
            placeholder="Search..."
            value={ searchTerm }
            onChange={ handleInputChange }
            onBlur={ () => setIsHovered( false ) }
          />
        ) }
      </div>
    </div>
  );
}