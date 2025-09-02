export default function SearchBar({ value, onChange }) {
  return (
    <div className="w-full">
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Search by name or email..."
        className="w-full p-3 rounded-md border shadow-sm focus:outline-none"
      />
    </div>
  )
}
