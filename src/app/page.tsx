import Image from "next/image"
import Link from "next/link"
import { Calendar, Mail, MapPin, Phone } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50 p-8">
      <main className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <header className="bg-green-600 text-white p-6 text-center relative">
          <h1 className="text-4xl font-bold mb-2">Rebecca Currie</h1>
          <h2 className="text-2xl mb-1">Community Assistant</h2>
          <h3 className="text-xl">Hennepin Hall, 3rd Floor</h3>
          <Image
            src="/placeholder.svg?height=80&width=80"
            alt="Sticker"
            width={80}
            height={80}
            className="absolute top-2 left-2 transform -rotate-12"
          />
          <Image
            src="/placeholder.svg?height=80&width=80"
            alt="Sticker"
            width={80}
            height={80}
            className="absolute top-2 right-2 transform rotate-12"
          />
        </header>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-yellow-50 p-4 rounded-lg shadow relative">
            <h3 className="text-2xl font-bold mb-4">Reminders</h3>
            <ul className="list-disc list-inside">
              <li>Floor meeting this Thursday at 7 PM</li>
              <li>Quiet hours start at 10 PM</li>
              <li>Remember to sign up for next month&apos;s activities!</li>
            </ul>
            <Image
              src="/placeholder.svg?height=60&width=60"
              alt="Sticker"
              width={60}
              height={60}
              className="absolute bottom-2 right-2 transform rotate-6"
            />
          </section>

          <section className="bg-green-100 p-4 rounded-lg shadow relative">
            <h3 className="text-2xl font-bold mb-4">Motivation</h3>
            <blockquote className="italic text-lg">
              &ldquo;Believe you can and you&apos;re halfway there.&rdquo; - Theodore Roosevelt
            </blockquote>
            <Image
              src="/placeholder.svg?height=60&width=60"
              alt="Sticker"
              width={60}
              height={60}
              className="absolute top-2 right-2 transform -rotate-6"
            />
          </section>

          <section className="bg-yellow-100 p-4 rounded-lg shadow col-span-full">
            <h3 className="text-2xl font-bold mb-4">Book a CA Chat</h3>
            <p className="mb-4">Need to talk? Book a chat with me using my Google Calendar!</p>
            <Link
              href="https://calendar.google.com/calendar/embed?src=example%40gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
            >
              <Calendar className="inline-block mr-2" />
              Open Calendar
            </Link>
          </section>

          <section className="bg-green-100 p-4 rounded-lg shadow relative col-span-full">
            <h3 className="text-2xl font-bold mb-4">About Rebecca</h3>
            <ul className="list-none space-y-2">
              <li>
                <span className="font-bold">Major:</span> Psychology
              </li>
              <li>
                <span className="font-bold">Hometown:</span> Minneapolis, MN
              </li>
              <li>
                <span className="font-bold">Hobbies:</span> Hiking, painting, and baking
              </li>
              <li>
                <span className="font-bold">Favorite Book:</span> &ldquo;To Kill a Mockingbird&rdquo;
              </li>
              <li>
                <span className="font-bold">Fun Fact:</span> I can juggle while riding a unicycle!
              </li>
            </ul>
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Sticker"
              width={80}
              height={80}
              className="absolute bottom-2 right-2 transform rotate-12"
            />
          </section>
        </div>

        <footer className="bg-green-600 text-white p-4 text-center">
          <div className="flex justify-center space-x-4">
            <a href="mailto:rebecca@example.com" className="flex items-center">
              <Mail className="mr-2" /> rebecca@example.com
            </a>
            <a href="tel:+11234567890" className="flex items-center">
              <Phone className="mr-2" /> (123) 456-7890
            </a>
            <span className="flex items-center">
              <MapPin className="mr-2" /> Room 301
            </span>
          </div>
        </footer>
      </main>
    </div>
  )
}

