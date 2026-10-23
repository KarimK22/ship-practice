import { StreakCard } from '@/components/streak-card';
import { XpBar } from '@/components/xp-bar';
import { currentStreak, hasCheckedInToday } from '@/core/streak/streak';
import { useStreak } from '@/hooks/use-streak';

export const App = () => {
  const { state, today, checkInToday } = useStreak();

  return (
    <main className='flex min-h-screen items-center justify-center bg-zinc-950 p-6 text-zinc-100'>
      <div className='flex w-full max-w-sm flex-col items-center gap-6'>
        <h1 className='text-3xl font-bold'>Daily Streak</h1>
        <XpBar xp={state.xp} />
        <StreakCard
          streak={currentStreak(state, today)}
          checkedInToday={hasCheckedInToday(state, today)}
          onCheckIn={checkInToday}
        />
      </div>
    </main>
  );
};
