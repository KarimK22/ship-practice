import { XP_PER_CHECK_IN } from '@/core/streak/streak';

export type StreakCardProps = {
  streak: number;
  checkedInToday: boolean;
  onCheckIn: () => void;
};

export const StreakCard = (props: StreakCardProps) => {
  const { streak, checkedInToday, onCheckIn } = props;

  return (
    <section className='flex w-full flex-col items-center gap-4 rounded-2xl bg-zinc-900 p-8'>
      <span className='text-6xl'>🔥</span>
      <p className='text-2xl font-bold'>
        {streak} day{streak === 1 ? '' : 's'} streak
      </p>
      <button
        className='w-full cursor-pointer rounded-xl bg-amber-400 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-50'
        disabled={checkedInToday}
        onClick={onCheckIn}
      >
        {checkedInToday ? 'Checked in today ✓ Come back tomorrow' : `Check in (+${XP_PER_CHECK_IN} XP)`}
      </button>
    </section>
  );
};
