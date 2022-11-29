import React from 'react'
import { Navigate, Outlet, useOutletContext, useParams } from 'react-router-dom'
import { Note } from './App'

interface NoteLayoutProps {
  notes: Note[]
}

const NoteLayout = ({ notes }: NoteLayoutProps) => {
  const { id } = useParams()
  const note = notes.find(n => n.id === id)
  console.log(note)
  if (!note) return <Navigate to="/" replace />
  return <Outlet context={note} />
}

const useNote = () => {
  return useOutletContext<Note>()
}

export default NoteLayout
export { useNote }
