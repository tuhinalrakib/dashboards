import Link from 'next/link'

export default function NavBar(){
  return (
    <nav className="bg-white/70 backdrop-blur-md shadow-sm py-3 px-4 sticky top-0 z-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">Dashboard Clone</Link>
        <div className="text-sm text-gray-600">Built with Next, Tailwind, Three.js, Framer Motion</div>
      </div>
    </nav>
  )
}
