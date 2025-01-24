import { Box, Typography } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { AIMessage } from "../types/AiMessage";

export default function AiAgentResponses({ messages, isLoading }: { messages: AIMessage[], isLoading: boolean }) {

  return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      {
        messages.length === 0 && !isLoading && <Typography variant="h6" gutterBottom>
          Talk to agent by sending your message below
        </Typography>
      }
      {
        isLoading && <CircularProgress />
      }
      {
        !isLoading && <div>
          {

            messages.map((message: AIMessage, index: number) => {
              return (
                <div key={index}>
                  <Typography variant="h6" gutterBottom>
                    {message.role}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {message.content as string}
                  </Typography>
                </div>
              )
            })
          }

        </div>
      }
    </Box>
  )


}