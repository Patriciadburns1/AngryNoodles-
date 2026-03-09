import { Typography, Box } from '@mui/material';

function Home() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Your career <Box component="span" sx={{ fontStyle: 'italic' }}>finally</Box> has a safe space
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Welcome to our community. Explore profiles, check out events, and read our guidelines to get started.
      </Typography>
    </Box>
  );
}

export default Home;
