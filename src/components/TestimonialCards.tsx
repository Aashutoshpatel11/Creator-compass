import React from 'react'
import { InfiniteMovingCards } from './ui/infinity-moving-cards';
import { div } from 'framer-motion/client';
import { cn } from '@/lib/utils';

const musicSchoolTestimonials = [
    {
      quote:
        'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
      name: 'Alex Johnson',
      title: 'Guitar Student',
    },
    {
      quote:
        "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
      name: 'Samantha Lee',
      title: 'Piano Student',
    },
    {
      quote:
        "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
      name: 'Michael Chen',
      title: 'Vocal Student',
    },
    {
      quote:
        'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
      name: 'Emily Taylor',
      title: 'Violin Student',
    },
    {
      quote:
        'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!',
      name: 'Chris Morales',
      title: 'Music Production Student',
    },
  ];

function TestimonialCards() {
  return (
        <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
            <div
                className={cn(
                "absolute inset-0",
                "[background-size:20px_20px]",
                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />
            <div className='flex flex-col justify-center items-center py-40 dark:bg-grid-white' >
            <h2
            className='mb-20 font-bold text-5xl z-10'
            >Hear our Harmony: Voices of success</h2>
            <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="left"
            speed="normal"
            pauseOnHover
            /> 
            </div>   
        </div>
  )
}

export default TestimonialCards