import { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"

// seperate page to hold any saved data from the shelf page

type Book = {
  id: number
  title: string
  author: string 
  isbn: number
  genre: string 
  publicationYear: number
  available: boolean
}

type ShelfContextType = {
  shelf: Book[]
  addToShelf: (book: Book) => void
  removeFromShelf: (id: number) => void
}

const ShelfContext = createContext<ShelfContextType | undefined>(undefined)

export const ShelfProvider = ({ children }: { children: ReactNode }) => {
  const [shelf, setShelf] = useState<Book[]>([])

  // function to collect data when book is added
  const addToShelf = (book: Book) => {
    setShelf(prev => {
      if (!prev.find(b => b.id === book.id)) {
        return [...prev, book]
      }
      return prev
    })
  }

  // function to remove data when book is removed
  const removeFromShelf = (id: number) => {
    setShelf(prev => prev.filter(book => book.id !== id))
  }

  return (
    <ShelfContext.Provider value={{ shelf, addToShelf, removeFromShelf }}>
      {children}
    </ShelfContext.Provider>
  )
}

export const useShelf = () => {
  const context = useContext(ShelfContext)
  if (!context) {
    throw new Error("useShelf must be used within a ShelfProvider")
  }
  return context
}
