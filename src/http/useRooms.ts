import { useQuery } from "@tanstack/react-query";
import type { GetRoomResponse } from "./types/get-rooms-response";

export function useRooms() {
    return useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/rooms");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: GetRoomResponse[] = await response.json();

      return data;
    },
  });
}