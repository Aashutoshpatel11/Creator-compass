'use Client'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';

const featuredWebinars = [
    {
      title: 'Inside the Algorithm: YouTube 2025',
      description:
        'A live dive with a YouTube strategist on what\'s working right now for channel growth.',
      slug: 'youtube-algorithm-2025',
      isFeatured: true,
    },
    {
      title: 'The Future of AI in Content Creation',
      description:
        'Explore AI tools for video editing, scriptwriting, and idea generation that save you time.',
      slug: 'ai-in-content-creation',
      isFeatured: true,
    },
    {
      title: 'Brand Deal Negotiation Masterclass',
      description:
        'Learn how to price yourself, what to look for in a contract, and how to build long-term brand partners.',
      slug: 'brand-deal-negotiation',
      isFeatured: true,
    },
    {
      title: 'How to Build a 7-Figure Creator Business',
      description:
        'A case study with a top creator on diversifying income streams beyond simple ad revenue.',
      slug: 'seven-figure-creator',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'The 30-Day TikTok Growth Plan',
      description:
        'A live workshop outlining a content strategy to rapidly grow your TikTok presence.',
      slug: 'tiktok-growth-plan',
      isFeatured: true,
    },
    {
      title: 'From Views to Community: Discord & Patreon',
      description:
        'Learn how to move your audience off-platform to build a sustainable community and income.',
      slug: 'views-to-community',
      isFeatured: true,
    },
  ];


function FeaturedWebinar() {
  return (
    <div className='flex flex-col gap-5 pb-10 px-30 pt-50 bg-slate-950' >
        <div className='flex flex-col justify-center items-center gap-3' >
            <h2 className='text-cyan-500/50 font-medium text-sm md:text-md' >UPCOMING LIVE STREAMS</h2>
            <p className='font-bold text-4xl md:text-5xl' >ENHANCE YOUR CREATOR JOURNEY</p>
        </div>
        <HoverEffect 
        className='gap-5'
        items={featuredWebinars.map( (webinar) => (
            {
                title: webinar.title,
                description: webinar.description,
                link: webinar.slug,
            }
        ) )}
        />
    </div>
  )
}

export default FeaturedWebinar