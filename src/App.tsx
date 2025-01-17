import './App.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function App() {

  return (
    <Container fixed>
      <Box sx={{ height: '100vh' }}>
        <Typography variant="h2" gutterBottom>
          Welcome
        </Typography>
      </Box>
    </Container>
  )
}

export default App
