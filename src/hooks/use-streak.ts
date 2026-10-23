import { useEffect, useState } from 'react';

import { type StreakState, checkIn, initialState, toDayKey } from '@/core/streak/streak';

// Progress is saved in the browser (localStorage) under this name. No server yet.
const STORAGE_KEY = 'ship-practice:streak';

const loadSaved = (): StreakState => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? { ...initialState, ...JSON.parse(saved) } : initialState;
  } catch {
    return initialState;
  }
};

export const useStreak = () => {
  const [state, setState] = useState(loadSaved);
  const today = toDayKey(new Date());

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Saving can fail in private browsing. The app still works, it just forgets on reload.
    }
  }, [state]);

  const checkInToday = () => setState((current) => checkIn(current, today));

  return { state, today, checkInToday };
};
