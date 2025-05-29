import { useEffect, useState } from "react"
import { useShelf } from "./ShelfContext"
type Book = {
  id: number
  title: string
  author: string 
  isbn: number
  genre: string 
  publicationYear: number
  available: boolean
}

export default function Library () {
  const [books, setBooks] = useState<Book[]>( [] )
  const [expandedBookId, setExpandedBookId] = useState<number | null>(null)
  const { addToShelf } = useShelf()

  useEffect(() => {
    const asyncFunction = async () => {
      const response = await fetch("http://localhost:3000/books")
      const data = await response.json()
      setBooks(data)
    }
    asyncFunction()
  }, [])

  const toggleExpand = (id: number) => {
    setExpandedBookId(prev => (prev === id ? null : id))
  }

  return (
    <div className="container mt-3">
      <h2 className="display-5 mb-4">My Library</h2>
      <div className="d-flex flex-wrap gap-3">
      { books.map(Book => (
        <div key={Book.id} className="card flex-grow-1">
          <div className="card-body">
            <h3 className="card-title">{ Book.title }</h3>
            <p className="card-text">{ Book.author }</p>
            <button className="btn btn-primary" onClick={() => toggleExpand(Book.id)}>{ Book.available ? "Available" : "Unavailable" }</button>

            {expandedBookId === Book.id && (
                <div className="mt-2">
                    <p><strong>ISBN:</strong> {Book.isbn}</p>
                    <p><strong>Genre:</strong> {Book.genre}</p>
                    <p><strong>Publication Year:</strong> {Book.publicationYear}</p>

                    {Book.available ? (
                        <button className="btn btn-success" 
                            onClick= {() => addToShelf(Book)}>Add to Shelf</button>) : (
                        <p className="text-muted">This book is currently unavailable.</p>
                    )}
                </div>
            )}
          </div>
        </div>
      )) }
      </div>
    </div>
  )
}

