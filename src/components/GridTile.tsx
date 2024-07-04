import { useState } from 'react'
import Nibbler from './Nibbler'

export default function GridTile({ hasPlayer = false }) {
  const [number, setNumber] = useState(Math.round(Math.random() * 10))

  return (
    <>
      <div className="h-24 w-24 border-2 border-blue-500 content-center text-center">
        {hasPlayer && <Nibbler />}
        <p>{number}</p>
      </div>
    </>
  )
}
