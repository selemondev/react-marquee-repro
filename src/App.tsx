import React from 'react';
import Marquee from './components/Marquee';
import ReviewCard from './components/ReviewCard';

const App: React.FC = () => {
    const reviews = [
        {
            name: 'Jack',
            username: '@jack',
            body: 'I\'ve never seen anything like this before. It\'s amazing. I love it.',
            img: 'https://avatar.vercel.sh/jack',
        },
        {
            name: 'Jill',
            username: '@jill',
            body: 'I don\'t know what to say. I\'m speechless. This is amazing.',
            img: 'https://avatar.vercel.sh/jill',
        },
        {
            name: 'John',
            username: '@john',
            body: 'I\'m at a loss for words. This is amazing. I love it.',
            img: 'https://avatar.vercel.sh/john',
        },
    ];
    const secondRow = reviews.slice(reviews.length / 2);

    return (
        <div className="relative flex h-[400px] mt-48 flex-row items-center justify-center overflow-hidden rounded-lg">
            <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
                {secondRow.map(({ img, name, username, body }) => (
                    <div key={username}>
                        <ReviewCard
                            username={username}
                            img={img}
                            name={name}
                            body={body}
                        />
                    </div>
                ))}
            </Marquee>
            <Marquee pauseOnHover vertical className="[--duration:20s]">
                {secondRow.map(({ img, name, username, body }) => (
                    <div key={username}>
                        <ReviewCard
                            username={username}
                            img={img}
                            name={name}
                            body={body}
                        />
                    </div>
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
                {secondRow.map(({ img, name, username, body }) => (
                    <div key={username}>
                        <ReviewCard
                            username={username}
                            img={img}
                            name={name}
                            body={body}
                        />
                    </div>
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background" />
        </div>
    );
};

export default App;