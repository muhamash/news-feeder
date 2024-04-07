import { useContext } from 'react';
import { NewsContext } from './NewsProvider';

export function useNewsContext() {
  return useContext(NewsContext);
}