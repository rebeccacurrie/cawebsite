import "./globals.css"
import type { Metadata } from "next"
import { Caveat } from "next/font/google"
import type React from "react"
import Link from "next/link"
import { Calendar, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

const caveat = Caveat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rebecca Currie - Community Assistant",
  description: "Bulletin board for Hennepin Hall, 3rd Floor",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <main className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <header className="bg-primary text-primary-foreground p-6 text-center relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/background.jpg"
              alt="Header Background"
              fill
              className="object-cover opacity-40"
              priority
            />
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/mugshot.jpg"
                alt="Rebecca Currie"
                width={150}
                height={150}
                className="rounded-full border-4 border-white shadow-lg"
                priority
              />
            </div>
            <h1 className="text-6xl font-bold mb-3">Rebecca Currie</h1>
            <h2 className="text-4xl mb-2">Community Assistant</h2>
            <p className="text-2xl">Hennepin Hall, 3rd Floor, Room 312</p>
          </div>
        </header>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-primary/10 p-4 rounded-lg shadow relative">
            <h3 className="text-3xl font-bold mb-4">Book a CA Chat</h3>
            <p className="mb-4 text-xl">Need to talk? Book a chat with me using my Google Calendar!</p>
            <Link
              href="https://calendar.google.com/calendar/embed?src=ra13curr@siena.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center text-xl"
            >
              <Calendar className="mr-3 h-6 w-6" />
              Open Calendar
            </Link>
            <Image
              src="/stickers/sticker18.png"
              alt="Decorative Sticker"
              width={100}
              height={100}
              className="absolute bottom-8 right-8 transform rotate-12"
            />
          </section>

          <section className="bg-accent/20 p-4 rounded-lg shadow relative">
            <h3 className="text-3xl font-bold mb-4">About Rebecca</h3>
            <ul className="grid grid-cols-1 gap-6 text-xl">
              <li>
                <span className="font-bold">Major:</span> Computer Science
              </li>
              <li>
                <span className="font-bold">Hometown:</span> Johannesburg, South Africa
              </li>
              <li>
                <span className="font-bold">Sports:</span> Water Polo Team
              </li>
              <li>
                <span className="font-bold">Favorite Book:</span> &ldquo;Where the Crawdads Sing&rdquo;
              </li>
            </ul>
            <Image
              src="/stickers/sticker5.png"
              alt="Decorative Sticker"
              width={80}
              height={80}
              className="absolute top-4 right-12 transform -rotate-12 -scale-x-100"
            />
          </section>

          <section className="bg-accent p-4 rounded-lg shadow relative">
            <h3 className="text-3xl font-bold mb-4">Reminders</h3>
            <ul className="list-disc list-inside text-xl space-y-2">
              <li>Floor meeting this Thursday at 7 PM</li>
              <li>Quiet hours start at 10 PM</li>
              <li>Remember to sign up for next month&apos;s activities!</li>
            </ul>
            <Image
              src="/stickers/sticker7.png"
              alt="Decorative Sticker"
              width={70}
              height={70}
              className="absolute top-3 right-32 transform rotate-12"
            />
          </section>

          <section className="bg-secondary/20 p-4 rounded-lg shadow relative">
            <h3 className="text-3xl font-bold mb-4">Motivation</h3>
            <blockquote className="italic text-2xl">
              &ldquo;The only way to do great work is to love what you do.&rdquo; - Steve Jobs
            </blockquote>
          </section>

          <section className="bg-primary/10 p-4 rounded-lg shadow relative col-span-full">
            <h3 className="text-3xl font-bold mb-4">DORS Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xl">
              <div>
                <h4 className="text-2xl font-bold text-primary mb-2">Diversity</h4>
                <p>Embracing and celebrating our unique backgrounds and perspectives.</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary mb-2">Optimism</h4>
                <p>Maintaining a positive outlook and encouraging growth mindset.</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary mb-2">Respect</h4>
                <p>Fostering a community of mutual understanding and consideration.</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary mb-2">Service</h4>
                <p>Dedicated to supporting and uplifting our residential community.</p>
              </div>
            </div>
          </section>

          <section className="bg-secondary/10 p-4 rounded-lg shadow relative col-span-full">
            <h3 className="text-3xl font-bold mb-4">Send Me a Message</h3>
            <p className="text-xl mb-4">Have a suggestion or something to share? Let me know!</p>
            <form 
              action="mailto:ra13curr@siena.edu" 
              method="post" 
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-xl mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 rounded-lg border border-secondary/30 bg-white/80 text-xl"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="room" className="block text-xl mb-2">Room Number</label>
                <input
                  type="text"
                  id="room"
                  name="room"
                  className="w-full p-2 rounded-lg border border-secondary/30 bg-white/80 text-xl"
                  placeholder="Enter your room number"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xl mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-2 rounded-lg border border-secondary/30 bg-white/80 text-xl"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors text-xl inline-flex items-center"
              >
                <Mail className="mr-3 h-6 w-6" />
                Send Message
              </button>
            </form>
            <Image
              src="/stickers/sticker19.png"
              alt="Decorative Sticker"
              width={90}
              height={90}
              className="absolute top-6 right-8 transform -rotate-12"
            />
          </section>
        </div>

        <footer className="bg-primary text-primary-foreground p-6 flex flex-col md:flex-row justify-center items-center gap-6">
          <Link
            href="mailto:ra13curr@siena.edu"
            className="flex items-center hover:text-primary-foreground/80 text-xl"
          >
            <Mail className="mr-3 h-6 w-6" /> ra13curr@siena.edu
          </Link>
          <span className="hidden md:inline text-xl">•</span>
          <Link href="tel:+15185283618" className="flex items-center hover:text-primary-foreground/80 text-xl">
            <Phone className="mr-3 h-6 w-6" /> (518) 528-3618
          </Link>
          <span className="hidden md:inline text-xl">•</span>
          <span className="flex items-center text-xl">
            <MapPin className="mr-3 h-6 w-6" /> Room 312
          </span>
        </footer>
      </main>
    </div>
  )
}