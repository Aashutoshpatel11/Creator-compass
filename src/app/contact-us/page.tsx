"use client"

import { BackgroundBeams } from "@/components/ui/background-beams"
import { FormEvent, useState } from "react"


function contactPage() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(email, message);
    alert(`email: ${email}      message: ${message}`)
  }

  return (
    <div className="min-h-screen" >

      <form 
      action="submit"
      onSubmit={handleSubmit}
      >
        <div className="flex flex-col justify-center items-center z-10" >
          <h2 className="pt-36 text-5xl font-bold mb-5" >Contact US</h2>
          <p className="text-white/50 max-w-lg text-center mb-10" >We&apos;re here to help with any questions about our masterclasses,
          programs, or events. Reach out and let us know how we can assist you
          in your creator journey.</p>
          <input 
          className=" text-white/60 text-sm p-4 w-2xl h-16 bg-black rounded-xl mb-5"
          type="email" 
          value={email}
          placeholder="Your email address"
          onChange={ (e) => setEmail(e.target.value) }
          />
          <textarea 
          className=" text-white/60 text-sm p-4 w-2xl h-36 bg-black rounded-xl mb-5" 
          rows={5}
          value={message}
          placeholder="Your message"
          onChange={ (e) => setMessage(e.target.value)}
          />
          <div className="flex justify-start w-2xl">
            <button 
            type="submit"
            className="rounded-xl py-2 px-4 bg-emerald-700 text-white/50 hover:text-white cursor-pointer" 
            >
              Send Message
            </button>
          </div>
        </div>
      </form>

      <BackgroundBeams 
      className="bg-slate-950 -z-10"
      />
    </div>
  )
}

export default contactPage