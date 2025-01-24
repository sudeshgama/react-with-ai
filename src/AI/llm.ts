import { zodFunction } from "openai/helpers/zod";
import { AIMessage } from "../types/AiMessage";
import { openai } from "./ai";

export const runLLM = async ({
  messages,
  tools
}:
  {
    messages: AIMessage[],
    tools: []
  }) => {
  const formattedTools = tools.map(zodFunction)
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0.1,
    messages,
    tools: formattedTools,
    tool_choice: 'auto',
    parallel_tool_calls: false
  })
  return response.choices[0].message;
}

// we can write messages array in line 10 if we want to pass single message
// messages: [{
//   role: 'user',
//   content: userMessage
// }]