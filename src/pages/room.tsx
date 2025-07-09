import { Navigate, useParams } from 'react-router-dom'

type RoomParams = {
  id: string
}
export function Room() {
  const { id } = useParams<RoomParams>() as RoomParams

  return (
    <div>
      <h1>Create Room</h1>
    </div>
  )
}
