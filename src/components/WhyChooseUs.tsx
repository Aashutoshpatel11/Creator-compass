'use Client'
import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'

const creatorContent = [
    {
      title: 'Find Your Niche: A Guided Path to Content-Market Fit',
      description:
        'Start a journey that’s uniquely yours. Our personalized coaching helps you identify your niche and adapt to your audience\'s needs, setting the stage for unparalleled growth. At Creator\'s Compass, your vision meets our dedicated support, creating a clear path to success.',
    },
    {
      title: 'Go Beyond the Algorithm: Build a Real Community',
      description:
        'Views are temporary, community is forever. We teach you how to build a loyal audience that supports you, from viral hits to niche projects. Learn the art of engagement that turns viewers into dedicated fans.',
    },
    {
      title: 'Monetize Your Passion: Sustainable Income Streams',
      description:
        'Learn to build a business, not just a channel. We explore proven strategies beyond ad revenue, including brand deals, digital products, and community memberships, helping you create a stable and scalable career.',
    },
    {
      title: 'Live Feedback & Iteration',
      description:
        'Immerse yourself in an interactive learning experience where feedback is immediate. Get live reviews on your thumbnails, scripts, and brand strategy from pros who are actively succeeding in the space.',
    },
    {
      title: 'Cutting-Edge Curriculum',
      description:
        'Our curriculum is updated weekly to reflect the latest algorithm changes, platform features, and market trends. Say goodbye to outdated advice and welcome an education that evolves as fast as the industry does.',
    },
    {
      title: 'Access to a Pro Network',
      description:
        'With our expansive resource library and exclusive community, you’ll connect with other full-time creators. Our platform provides continuous opportunities for collaboration and growth, ensuring your brand is always advancing.',
    },
]

function WhyChooseUs() {
  return (
    <div className='w-full' >
        <StickyScroll content={creatorContent} />
    </div>
  )
}

export default WhyChooseUs