import { Typography, Box, Card, CardContent, CardActions, Button, Grid } from '@mui/material';

const sampleProfiles = [
  { id: 1, name: 'Alex Johnson', role: 'Developer' },
  { id: 2, name: 'Sam Chen', role: 'Designer' },
  { id: 3, name: 'Jordan Taylor', role: 'Product Manager' },
];

function Profiles() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Profiles
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Browse community member profiles.
      </Typography>
      <Grid container spacing={2}>
        {sampleProfiles.map((profile) => (
          <Grid item xs={12} sm={6} md={4} key={profile.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{profile.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {profile.role}
                </Typography>
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
