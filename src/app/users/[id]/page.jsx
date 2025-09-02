"use client"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function UserDetails() {
  const router = useRouter()
  const { id } = router.query
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(r => r.json())
      .then(u => { setUser(u); setLoading(false) })
      .catch(err => { console.error(err); setLoading(false) })
  }, [id])

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto p-6">
        <Link href="/"><a className="text-sm text-blue-600 hover:underline">&larr; Back</a></Link>

        <motion.div initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} className="mt-4 bg-white rounded-md shadow p-6">
          {loading && <div>Loading...</div>}
          {user && (
            <>
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-sm text-gray-600">{user.email} | {user.phone}</p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <h4 className="font-semibold">Company</h4>
                  <p>{user.company?.name}</p>
                  <p className="text-sm text-gray-500">{user.company?.catchPhrase}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p>{user.address?.street}, {user.address?.city}</p>
                  <p className="text-sm text-gray-500">Zip: {user.address?.zipcode}</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold">Website</h4>
                <a href={`http://${user.website}`} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                  {user.website}
                </a>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  )
}
