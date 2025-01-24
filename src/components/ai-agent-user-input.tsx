import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export default function AiAgentUserInput({ sendMessageToAi }: { sendMessageToAi: (message: string) => void; }) {

  const [message, setMessage] = useState('');

  return (
    <Box>
      <form>
        <TextField
          fullWidth
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          value={message}
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          fullWidth
          style={{
            marginTop: "10px"
          }}
          variant="contained"
          size="large"
          onClick={() => (sendMessageToAi(message), setMessage(''))}>Send Message</Button>
      </form>
    </Box>
  )
}