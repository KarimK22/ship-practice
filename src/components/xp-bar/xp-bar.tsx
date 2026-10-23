import { XP_PER_LEVEL, levelFor, xpIntoLevel } from '@/core/streak/streak';

export type XpBarProps = {
  xp: number;
};

export const XpBar = (props: XpBarProps) => {
  const { xp } = props;
  const progress = xpIntoLevel(xp);
  const percent = (progress / XP_PER_LEVEL) * 100;

  return (
    <section className='w-full'>
      <div className='mb-2 flex items-baseline justify-between'>
        <span className='text-lg font-semibold'>Level {levelFor(xp)}</span>
        <span className='text-sm text-zinc-400'>
          {progress} / {XP_PER_LEVEL} XP
        </span>
      </div>
      <div
        className='h-4 w-full overflow-hidden rounded-full bg-zinc-800'
        role='progressbar'
        aria-valuemin={0}
        aria-valuemax={XP_PER_LEVEL}
        aria-valuenow={progress}
      >
        <div className='h-full rounded-full bg-amber-400 transition-all duration-500' style={{ width: `${percent}%` }} />
      </div>
    </section>
  );
};
