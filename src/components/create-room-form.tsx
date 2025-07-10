import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const createRoomSchema = z.object({});

export function CreateRoomForm() {
  const {} = useForm();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Criar sala</CardTitle>
        <CardDescription>
          Crie uma nova sala para começar a fazer perguntas e receber respostas
          de I.A.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4"></form>
      </CardContent>
    </Card>
  );
}
