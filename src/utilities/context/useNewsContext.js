import { useContext } from 'react';
import { NewsContext } from './NewsContext';

export function useNewsContext() {
  return useContext(NewsContext);
}