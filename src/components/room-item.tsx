import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { GetRoomResponse } from '@/http/types/get-rooms-response'
import { relativeTimeDayjs } from '@/lib/dayjs'
import { Badge } from './ui/badge'

export function RoomItem(room: GetRoomResponse) {
  return (
    <Link
      className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent/50"
      to={`/room/${room.id}`}
    >
      <div className="flex flex-1 flex-col gap-1">
        <h3 className="font-medium">{room.name}</h3>

        <div className="flex items-center gap-2">
          <Badge className="text-xs" variant="secondary">
            {relativeTimeDayjs(room.createdAt).toNow()}
          </Badge>
          <Badge className="text-xs" variant="secondary">
            {room.questionsCount} pergunta(s)
          </Badge>
        </div>
      </div>

      <span className="flex items-center gap-1 text-sm">
        Entrar <ArrowRight className="size-3" />
      </span>
    </Link>
  )
}
