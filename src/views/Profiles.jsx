import { Typography, Box, Card, CardContent, CardActions, Button, Chip, Stack } from '@mui/material';

const paletteColors = ['#9caa88', '#c9a9a6', '#7a8b6e', '#b76e79', '#d4dcc8', '#d4a5a5'];

const mockProfiles = [
  {
    id: 1,
    name: 'Alexandra Johnson',
    role: 'Financial Advisor',
    type: 'mentor',
    strengths: ['Financial literacy', 'Financial negotiation', 'Budget planning'],
  },
  {
    id: 2,
    name: 'Samantha Chen',
    role: 'Credit Specialist',
    type: 'mentee',
    strengths: ['Financial literacy', 'Debt management', 'Credit building'],
  },
  {
    id: 3,
    name: 'Jordyn Taylor',
    role: 'Money Coach',
    type: 'mentor',
    strengths: ['Financial negotiation', 'Savings strategies', 'Investment basics'],
  },
  {
    id: 4,
    name: 'Morgan Lee',
    role: 'Community Educator',
    type: 'mentee',
    strengths: ['Financial literacy', 'Financial negotiation', 'Tax preparation'],
  },
  {
    id: 5,
    name: 'Maya Patel',
    role: 'Housing Counselor',
    type: 'mentor',
    strengths: ['Financial negotiation', 'Mortgage literacy', 'Budget planning'],
  },
  {
    id: 6,
    name: 'Carmen Williams',
    role: 'Financial Wellness Advocate',
    type: 'mentee',
    strengths: ['Financial literacy', 'Debt management', 'Financial negotiation'],
  },
];

function Profiles() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Profiles
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Browse community members and their strengths.
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 3,
        }}
      >
        {mockProfiles.map((profile, index) => (
          <Card
            key={profile.id}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: 0,
              border: '1px solid',
              borderColor: '#c9a9a6',
              borderRadius: 3,
              position: 'relative',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 16,
                left: 16,
                width: 48,
                height: 48,
                borderRadius: '50%',
                backgroundColor: paletteColors[index % paletteColors.length],
                border: '2px solid',
                borderColor: '#f5e6e6',
              }}
            />
            <CardContent sx={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', pl: 10, pt: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                <Typography variant="h6">
                  {profile.name}
                </Typography>
                <Chip
                  label={profile.type}
                  size="small"
                  sx={{
                    textTransform: 'capitalize',
                    backgroundColor: profile.type === 'mentor' ? '#e8ebe3' : '#f5e6e6',
                    color: profile.type === 'mentor' ? '#7a8b6e' : '#b76e79',
                  }}
                />
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {profile.role}
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={0.5} useFlexGap sx={{ flex: 1 }}>
                {profile.strengths.map((strength) => (
                  <Chip
                    key={strength}
                    label={strength}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Stack>
            </CardContent>
            <CardActions>
              <Button size="small">View Profile</Button>
              <Button
                size="small"
                component="a"
                href="#"
                sx={{
                  backgroundColor: '#5c4033',
                  color: 'white',
                  '&:hover': { backgroundColor: '#6b4423', color: 'white' },
                }}
              >
                Request chat
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Profiles;
