import { Typography, Box, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Your career <Box component="span" sx={{ fontStyle: 'italic' }}>finally</Box> has a safe space
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: '75px' }}>
        Welcome to our community. Explore profiles, check out events, and read our guidelines to get started.
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
        <Button
          variant="contained"
          component={Link}
          to="/community-guidelines"
          size="large"
          sx={{ textTransform: 'none', borderRadius: 6, px: 4, py: 1.5, fontSize: '1.1rem' }}
        >
          Join the Community →
        </Button>
        <Button
          variant="outlined"
          component={Link}
          to="/profiles"
          sx={{ textTransform: 'none', borderRadius: 6, px: 4, py: 1.5, fontSize: '1.1rem' }}

        >
          Find a mentor
        </Button>
      </Stack>
    </Box>
  );
}

export default Home;
