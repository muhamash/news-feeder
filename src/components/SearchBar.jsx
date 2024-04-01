import { useEffect, useState } from 'react';
import fetchSearchResults from '../utilities/functions/FetchSearchResults';

export default function SearchBar() {
  const [isHovered, setIsHovered] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleInputChange = (event) => setSearchTerm(event.target.value);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm !== '') {
        console.log( "Searching for:", searchTerm );
        fetchSearchResults(`http://localhost:8000/v2/search?q=${searchTerm}`)
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn); 
  }, [searchTerm]);

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    console.log("Searching for:", searchTerm);
    
  };

  return (
    <div className="flex items-center space-x-3 lg:space-x-8">
      <div 
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="cursor-pointer" src="../../public/assets/icons/search.svg" alt="Search" />
        {isHovered && (
          <form onSubmit={handleSubmit}>
            <input
              type="text" 
              className="absolute top-0 right-0 w-[100px] h-[30px] px-4 py-2 border border-gray-300 rounded-md transition-opacity duration-300 delay-300" 
              placeholder="Search..." 
              value={searchTerm}
              onChange={handleInputChange}
            />
          </form>
        )}
      </div>
    </div>
  );
}