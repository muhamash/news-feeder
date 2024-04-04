import { useContext } from 'react';
import { NewsContext } from './NewsProvider';

export const useNewsContext = () => useContext(NewsContext);