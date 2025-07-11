import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { CreateRoomRequest, CreateRoomResponse } from './types/create-room'

export function useCreateRoom() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (data: CreateRoomRequest) => {
      const response = await fetch('http://localhost:3333/rooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result: CreateRoomResponse = await response.json()

      return result
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-rooms'],
      })
    },
  })
}
