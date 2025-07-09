import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

interface GetRoomsAPIResponse {
  id: string
  name: string
}

export function CreateRoom() {
  const { data: rooms, isLoading } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data: GetRoomsAPIResponse[] = await response.json()

      return data
    },
  })

  return (
    <div className="grid space-y-1">
      {isLoading ? (
        <div>
          <p>Loading rooms...</p>
        </div>
      ) : (
        rooms?.map((room) => (
          <Link key={room.id} to={`/room/${room.id}`}>
            {room.name}
          </Link>
        ))
      )}
    </div>
  )
}
