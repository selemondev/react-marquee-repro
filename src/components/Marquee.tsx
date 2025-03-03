import { cn } from '../lib/utils';
import React from 'react';

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    vertical?: boolean;
    repeat?: number;
}

const Marquee: React.FC<MarqueeProps> = ({
    className,
    reverse = false,
    pauseOnHover = false,
    vertical = false,
    repeat = 4,
    children,
    ...props
}) => {
    const contentClassName = cn(
        'flex shrink-0 justify-around [gap:var(--gap)]',
        {
            'animate-marquee-vertical flex-col': vertical,
            'animate-marquee flex-row': !vertical,
            '[animation-direction:reverse]': reverse,
            'group-hover:[animation-play-state:paused]': pauseOnHover,
        }
    );

    return (
        <div
            {...props}
            className={cn(
                'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
                {
                    'flex-row': !vertical,
                    'flex-col': vertical,
                },
                className
            )}
        >
            {Array(repeat)
                .fill(0)
                .map((_, i) => (
                    <div key={i}>
                        <div className={contentClassName}>
                            {children}
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Marquee;