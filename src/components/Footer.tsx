'use Client'
import React from 'react'
import Link from 'next/link'
import { footer } from 'framer-motion/client'

function Footer() {
  return (
    <footer className='bg-black text-gray-400' >
        <div className=' mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 p-20' >
            <div className='' >
                <h2 className='font-bold mb-7' >About Us</h2>
                <p>Creator's Compass is a premier hub dedicated to teaching the art
                and science of content creation. We nurture talent from the ground up,
                fostering a vibrant community of digital storytellers.</p>
            </div>
            <div className='' >
                <h2 className='font-bold mb-7' >Quick Links</h2>
                <ul>
                    <li className='mb-2' >
                        <a href="#">Home</a>
                    </li>
                    <li className='mb-2' >
                        <a href="#">About</a>
                    </li>
                    <li className='mb-2' >
                        <a href="#">Master Classes</a>
                    </li>
                    <li className='mb-2' >
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div className='' >
                <h2 className='font-bold mb-7' >Follow Us</h2>
                <ul>
                    <li className='mb-2' >
                        <a href="#">Instagram</a>
                    </li>
                    <li className='mb-2' >
                        <a href="#">Twitter</a>
                    </li>
                    <li className='mb-2' >
                        <a href="#">Facebook</a>
                    </li>
                </ul>
            </div>
            <div className='' >
                <h2 className='font-bold mb-7' >Contact Us</h2>
                <p>New Delhi, India</p>
                <p>Delhi 10001</p>
                <p>Email: info@creatorscompass.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer