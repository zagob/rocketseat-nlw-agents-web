import { useRooms } from "@/http/useRooms";
import { RoomItem } from "./room-item";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function RoomList() {
  const { data: rooms, isLoading } = useRooms();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Salas recentes</CardTitle>
        <CardDescription>Acesso rápido para as salas recentes</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {isLoading && (
          <p className="text-muted-foreground text-sm">Carregando...</p>
        )}

        {!isLoading &&
          rooms?.map((room) => <RoomItem key={room.id} {...room} />)}
      </CardContent>
    </Card>
  );
}
