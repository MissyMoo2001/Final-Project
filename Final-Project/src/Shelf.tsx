import { useShelf } from "./ShelfContext"

export default function Shelf() {
  const { shelf, removeFromShelf } = useShelf()

  return (
    <div className="container mt-3">
      <h2 className="display-5 mb-4">My Shelf</h2>
      {shelf.length === 0 ? (
        <p>No books on your shelf yet.</p>
      ) : (
        <div className="d-flex flex-wrap gap-3">
          {shelf.map(Book => (
            <div key={Book.id} className="card flex-grow-1" style={{ width: "18rem" }}>
              <div className="card-body">
                <h3 className="card-title">{Book.title}</h3>
                <p className="card-text">{Book.author}</p>
                <p><strong>ISBN:</strong> {Book.isbn}</p>
                <p><strong>Genre:</strong> {Book.genre}</p>
                <p><strong>Year:</strong> {Book.publicationYear}</p>
                <button className="btn btn-danger" onClick={() => removeFromShelf(Book.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
