import category from '../data/Category.json';
import { useNewsHook } from '../utilities/hooks/useNewsHook';

const Category = () => {
  const { dispatch } = useNewsHook();

  const handleCategoryClick = (categoryValue) => {
    dispatch({ type: "SELECT_CATEGORY", payload: categoryValue });
  };

  return (
    <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
      {category.map((category) => (
        <li key={category.value}>
          <a href="#" onClick={() => handleCategoryClick(category.value)}>
            {category.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Category;
