import { runLLM } from "./llm";
import { addMessages, getMessages } from "./memeory";

export const runAgent = async ({ message, tools }: { message: string, tools: [] }) => {
  await addMessages([{ role: 'user', content: message }])

  const history = await getMessages();

  const response = await runLLM({ messages: history, tools });

  await addMessages([{ role: 'assistant', content: response.content }]);

  return await getMessages();
}