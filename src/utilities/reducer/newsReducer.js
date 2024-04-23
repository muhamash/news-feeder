export const newsReducer = ( state, action ) =>
{
    switch ( action.type )
    {
        case 'CATEGORY':
            return { ...state, searchQuery: "", selectedCategory: action.payload };
        case 'SEARCH':
            return { ...state, searchQuery: action.payload, selectedCategory: "" };
        default:
            return state;
    }
};