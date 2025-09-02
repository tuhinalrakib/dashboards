"use client"
import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import ThreeScene from '@/components/ThreeScene'
import UserRow from '@/components/UserRow'
import SearchBar from '@/components/SearchBar'
import Pagination from '@/components/Pagination'

export default function Users() {
  const [users, setUsers] = useState([])
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const perPage = 4

  useEffect(() => {
    // fetch users
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
      .then(setUsers)
      .catch(console.error)
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return users.filter(u =>
      u.name.toLowerCase().includes(q) ||
      u.email.toLowerCase().includes(q)
    )
  }, [users, query])

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage))
  useEffect(() => {
    // clamp page
    if (page > totalPages) setPage(1)
  }, [totalPages])

  const paged = useMemo(() => {
    const start = (page - 1) * perPage
    return filtered.slice(start, start + perPage)
  }, [filtered, page])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#7299A6] to-white">
      <div className="max-w-6xl mx-auto p-4">
        <ThreeScene />

        <motion.div initial={{opacity:0}} animate={{opacity:1}} className="mt-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <SearchBar value={query} onChange={setQuery} />
            <button className='py-2 px-5 font-semibold text-white rounded-xl bg-[#145efc]'>Search</button>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full bg-white rounded-md shadow-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">ID</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Phone</th>
                </tr>
              </thead>
              <tbody>
                {paged.map(user => (
                  <UserRow key={user.id} user={user} />
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-gray-600">Showing {paged.length} of {filtered.length} users</div>
            <Pagination page={page} totalPages={totalPages} onPage={p => setPage(p)} />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
