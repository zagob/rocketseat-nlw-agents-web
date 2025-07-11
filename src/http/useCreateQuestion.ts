import { useMutation, useQueryClient } from '@tanstack/react-query'
import type {
  CreateQuestionRequest,
  CreateQuestionResponse,
} from './types/create-question'
import type { GetRoomQuestionsResponse } from './types/get-room-questions-response'

export function useCreateQuestion(roomId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ question }: CreateQuestionRequest) => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ question }),
        }
      )

      const result: CreateQuestionResponse = await response.json()

      return result
    },
    onMutate: ({ question }) => {
      const questions = queryClient.getQueryData<GetRoomQuestionsResponse>([
        'get-questions',
        roomId,
      ])

      if (!questions) {
        return
      }

      const newQuestion = {
        id: crypto.randomUUID(),
        question,
        answer: null,
        createdAt: new Date().toISOString(),
        isGeneratingAnswer: true,
      }

      queryClient.setQueryData<GetRoomQuestionsResponse>(
        ['get-questions', roomId],
        (updater) => updater && [newQuestion, ...updater]
      )

      return {
        newQuestion,
        questions,
      }
    },
    onSuccess: (data, _, context) => {
      queryClient.setQueryData<GetRoomQuestionsResponse>(
        ['get-questions', roomId],
        (updater) => {
          if (!(updater && context.newQuestion)) {
            return updater
          }

          return updater.map((question) => {
            if (question.id === context.newQuestion.id) {
              return {
                ...context.newQuestion,
                id: data.questionId,
                answer: data.answer,
                isGeneratingAnswer: false
              }
            }

            return question
          })
        }
      )
    },
    onError: (_, __, context) => {
      if (context?.questions) {
        queryClient.setQueryData<GetRoomQuestionsResponse>(
          ['get-questions', roomId],
          context.questions
        )
      }
    },
  })
}
