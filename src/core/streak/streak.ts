// The game rules. No screen code here, only plain data in and data out,
// which makes these rules easy to test.

export type StreakState = {
  xp: number;
  streak: number;
  lastCheckIn: string | null; // a day like '2026-10-23', or null if never checked in
};

export const XP_PER_CHECK_IN = 10;
export const XP_PER_LEVEL = 100;

export const initialState: StreakState = { xp: 0, streak: 0, lastCheckIn: null };

// Turns a date into 'YYYY-MM-DD' using the user's local calendar day.
export const toDayKey = (date: Date): string => {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
};

const daysBetween = (from: string, to: string): number => {
  const ms = Date.parse(to) - Date.parse(from);
  return Math.round(ms / 86_400_000);
};

export const hasCheckedInToday = (state: StreakState, today: string): boolean => state.lastCheckIn === today;

// The streak as it stands today: if the last check-in was before yesterday, it's broken.
export const currentStreak = (state: StreakState, today: string): number => {
  if (!state.lastCheckIn) return 0;
  return daysBetween(state.lastCheckIn, today) <= 1 ? state.streak : 0;
};

export const checkIn = (state: StreakState, today: string): StreakState => {
  if (hasCheckedInToday(state, today)) return state;
  return {
    xp: state.xp + XP_PER_CHECK_IN,
    streak: currentStreak(state, today) + 1,
    lastCheckIn: today,
  };
};

export const levelFor = (xp: number): number => Math.floor(xp / XP_PER_LEVEL) + 1;

export const xpIntoLevel = (xp: number): number => xp % XP_PER_LEVEL;
