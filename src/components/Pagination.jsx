export default function Pagination({ page, totalPages, onPage }) {
  return (
    <div className="flex items-center gap-2">
      <button onClick={() => onPage(page-1)} disabled={page===1} className="px-3 py-1 rounded border disabled:opacity-50">Prev</button>
      <div>Page {page} / {totalPages}</div>
      <button onClick={() => onPage(page+1)} disabled={page===totalPages} className="px-3 py-1 rounded border disabled:opacity-50">Next</button>
    </div>
  )
}
