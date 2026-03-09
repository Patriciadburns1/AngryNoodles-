import { Typography, Box, Card, CardContent, CardActions, Button, Grid, Chip, Stack } from '@mui/material';

const mockProfiles = [
  {
    id: 1,
    name: 'Alexandra Johnson',
    role: 'Financial Advisor',
    strengths: ['Financial literacy', 'Financial negotiation', 'Budget planning'],
  },
  {
    id: 2,
    name: 'Samantha Chen',
    role: 'Credit Specialist',
    strengths: ['Financial literacy', 'Debt management', 'Credit building'],
  },
  {
    id: 3,
    name: 'Jordyn Taylor',
    role: 'Money Coach',
    strengths: ['Financial negotiation', 'Savings strategies', 'Investment basics'],
  },
  {
    id: 4,
    name: 'Morgan Lee',
    role: 'Community Educator',
    strengths: ['Financial literacy', 'Financial negotiation', 'Tax preparation'],
  },
  {
    id: 5,
    name: 'Maya Patel',
    role: 'Housing Counselor',
    strengths: ['Financial negotiation', 'Mortgage literacy', 'Budget planning'],
  },
  {
    id: 6,
    name: 'Carmen Williams',
    role: 'Financial Wellness Advocate',
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
      <Grid container spacing={3}>
        {mockProfiles.map((profile) => (
          <Grid item xs={12} sm={6} md={4} key={profile.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {profile.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {profile.role}
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={0.5} useFlexGap>
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
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Profiles;
