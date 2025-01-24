import { useEffect, useState } from "react";
import AiAgentResponses from "./ai-agent-respones";
import AiAgentUserInput from "./ai-agent-user-input";
import { getMessages } from "../AI/memeory";
import { AIMessage } from "../types/AiMessage";
import { z } from "zod";
import { runAgent } from "../AI/agent";


export default function AiAgent() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<AIMessage[]>([]);

  useEffect(() => {
    getMessagesFromDb();
  }, []);

  const getMessagesFromDb = async () => {
    const messages = await getMessages();
    setMessages(messages);
  }

  const sendMessageToAi = async (message: string) => {
    setLoading(true);

    // for single message    
    // const { content, role, refusal } = await runLLM({
    //   userMessage: message
    // });

    const weatherTool = {
      name: 'get_weather',
      parameters: z.object({})
    };

    await runAgent({
      message,
      tools: [weatherTool]
    });


    const newMess = await getMessages();

    setMessages(newMess);


    // setMessage({ content, role, refusal });
    setLoading(false);
  }

  return (
    <div>
      <AiAgentResponses messages={messages} isLoading={loading} />
      <br />
      <AiAgentUserInput sendMessageToAi={(e) => sendMessageToAi(e)} />
    </div>

  )
}