'use Client'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';

const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];


function FeaturedWebinar() {
  return (
    <div className='flex flex-col gap-20 pt-20 bg-slate-950' >
        <div className='flex flex-col justify-center items-center gap-3' >
            <h2 className='text-cyan-500/50 font-medium text-sm md:text-md' >FEATURED WEBINARS</h2>
            <p className='font-bold text-4xl md:text-5xl' >ENHANCE YOUR MUSICAL JOURNEY</p>
        </div>
        <HoverEffect 
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