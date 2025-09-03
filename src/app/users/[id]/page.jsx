"use client"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import axios from "axios"

export default function UserDetails() {
  const { id } = useParams()
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return

    const fetchUser = async () => {
      setLoading(true)
      setError(null)

      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        )
        setUser(data)
      } catch (err) {
        setError("Failed to fetch user details. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [id])

  return (
    <div className="min-h-screen mt-5 bg-gradient-to-br from-[#7299A6] to-white">
      <div className="max-w-4xl mx-auto p-6">
        <Link
          href="/"
          className="inline-block text-sm font-semibold py-2 px-3 bg-blue-800 rounded-2xl text-white hover:underline"
        >
          &larr; Back to Users
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 bg-white rounded-xl shadow-lg p-6"
        >
          {loading && (
            <p className="text-gray-500 animate-pulse">Loading user details...</p>
          )}

          {error && (
            <p className="text-red-500 font-medium">{error}</p>
          )}

          {user && !loading && (
            <>
              <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
              <p className="text-sm text-gray-600 mt-1">
                <span className="font-medium">Email:</span> {user.email} <br />
                <span className="font-medium">Phone:</span> {user.phone}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Company Info */}
                <div className="bg-slate-50 rounded-md p-4">
                  <h4 className="font-semibold text-gray-800">🏢 Company</h4>
                  <p className="text-gray-700">{user.company?.name}</p>
                  <p className="text-sm text-gray-500">
                    {user.company?.catchPhrase}
                  </p>
                </div>

                {/* Address Info */}
                <div className="bg-slate-50 rounded-md p-4">
                  <h4 className="font-semibold text-gray-800">📍 Address</h4>
                  <p className="text-gray-700">
                    {user.address?.street}, {user.address?.city}
                  </p>
                  <p className="text-sm text-gray-500">
                    Zip: {user.address?.zipcode}
                  </p>
                </div>
              </div>

              {/* Website */}
              <div className="mt-6">
                <h4 className="font-semibold text-gray-800">🔗 Website</h4>
                <a
                  href={`http://${user.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
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
