import { cn } from '../lib/utils';
import React from 'react';

interface ReviewCardProps {
    img: string;
    name: string;
    username: string;
    body: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
    img,
    name,
    username,
    body
}) => {
    return (
        <div
            className={cn(
                'relative w-64 cursor-pointer overflow-hidden h-36 flex flex-col space-y-1 rounded-xl px-4',
                'border-[1px] border-solid border-[#ecedee] bg-gray-950/[.05] hover:bg-gray-950/[.05]',
            )}
        >
            <div className="flex items-center space-x-2">
                <img 
                    className="rounded-full" 
                    width={32} 
                    height={32} 
                    src={img} 
                    alt={name}
                />
                <p className="flex flex-col">
                    <span className="text-sm font-medium dark:text-white">
                        {name}
                    </span>
                    <span className="text-xs font-medium dark:text-white/40">
                        {username}
                    </span>
                </p>
            </div>

            <div>
                <span className="text-sm font-medium dark:text-white/40 leading-none">
                    {body}
                </span>
            </div>
        </div>
    );
};

export default ReviewCard;