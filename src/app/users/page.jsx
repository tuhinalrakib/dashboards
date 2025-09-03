"use client"
import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import ThreeScene from '@/components/ThreeScene'
import UserRow from '@/components/UserRow'
import SearchBar from '@/components/SearchBar'
import Pagination from '@/components/Pagination'
import axios from 'axios'

export default function Users() {
  const [users, setUsers] = useState([])
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const perPage = 4

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data)
      }catch(e){
        console.log(e.message)
      }
    }
    fetchUsers()
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return users.filter(u =>
      u.name.toLowerCase().includes(q) ||
      u.email.toLowerCase().includes(q)
    )
  }, [users, query])

  const handleSearch = () => {

  }

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage))
  useEffect(() => {
    if (page > totalPages) setPage(1)
  }, [totalPages])

  const paged = useMemo(() => {
    const start = (page - 1) * perPage
    return filtered.slice(start, start + perPage)
  }, [filtered, page])

  return (
    <motion.div
      animate={{
        color: ["#3aa110", "#a05619", "#f9f871", "#4d7ada", "#6FB3B0", "123EB8"],
        transition: { duration: 5, repeat: Infinity }
      }}
      className="min-h-screen mt-5 bg-gradient-to-br from-[#7299A6] to-white">
      <div className="max-w-6xl mx-auto p-4">
        <div className='flex items-center justify-center'>
          <h1 className="text-3xl font-extrabold">Users</h1>
          <ThreeScene />
          <h1 className="text-3xl font-extrabold">Dashboards</h1>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <SearchBar value={query} onChange={setQuery} />
            <button
              onClick={handleSearch}
              className='py-2 px-5 font-semibold text-white rounded-xl bg-[#145efc]'>Search</button>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full bg-white overflow-x-scroll rounded-md shadow-sm">
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
    </motion.div>
  )
}
