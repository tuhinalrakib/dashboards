import Link from 'next/link'
import { motion } from 'framer-motion'

export default function UserRow({ user }) {
  return (
    <motion.tr
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25 }}
      className="border-b"
    >
      <td className="p-3">{user.id}</td>
      <td className="p-3">
        <Link href={`/users/${user.id}`} className="text-blue-600 hover:underline">
          {user.name}
        </Link>
      </td>
      <td className="p-3">{user.email}</td>
      <td className="p-3">{user.phone}</td>
    </motion.tr>
  )
}
