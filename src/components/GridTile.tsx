import Nibbler from './Nibbler'

export default function GridTile({ hasPlayer = false, value = 0 }) {
  return (
    <>
      <div className="h-24 w-24 border-2 border-blue-500 content-center text-center">
        {hasPlayer && <Nibbler />}
        <p className="h-4">{value || ''}</p>
      </div>
    </>
  )
}
