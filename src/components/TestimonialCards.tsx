import React from 'react'
import { InfiniteMovingCards } from './ui/infinity-moving-cards';
import { div } from 'framer-motion/client';
import { cn } from '@/lib/utils';

const creatorTestimonials = [
    {
      quote:
        'Joining this academy transformed my understanding of content and helped me find my unique voice. The instructors are full-time creators who know what they\'re talking about!',
      name: 'Alex Johnson',
      title: 'YouTuber (100k+ Subs)',
    },
    {
      quote:
        "The community and support here are unmatched. I've grown not just as a streamer, but also as a brand, thanks to their comprehensive approach to monetization.",
      name: 'Samantha Lee',
      title: 'Twitch Partner',
    },
    {
      quote:
        "This academy gave me the tools and confidence to take my content to the next level. I'm endlessly grateful for the personalized brand coaching.",
      name: 'Michael Chen',
      title: 'TikTok Creator (1M+ Followers)',
    },
    {
      quote:
        'As a podcaster, finding the right mentor can be challenging, but this program matched me with a strategist who truly understands my goals and challenges in the audio space.',
      name: 'Emily Taylor',
      title: 'Podcast Host',
    },
    {
      quote:
        'The sponsorship and brand deal courses here were a game-changer. I landed my first 4-figure deal just weeks after finishing. Highly recommend for any aspiring creators!',
      name: 'Chris Morales',
      title: 'Instagram Influencer',
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
            >Hear from our Community: Voices of Success</h2>
            <InfiniteMovingCards
            items={creatorTestimonials}
            direction="left"
            speed="normal"
            pauseOnHover
            /> 
            </div>   
        </div>
  )
}

export default TestimonialCards