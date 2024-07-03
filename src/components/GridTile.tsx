import Nibbler from './Nibbler'

export default function GridTile({ hasPlayer = false }) {
  const number = Math.round(Math.random() * 10)

  return (
    <>
      {hasPlayer && <Nibbler />}
      <div className="h-24 w-24 border-2 border-blue-500 content-center text-center">
        <p>{number}</p>
      </div>
    </>
  )
}
