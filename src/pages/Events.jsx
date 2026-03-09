import { Typography, Box, Card, CardContent, CardActions, Button, Grid } from '@mui/material';

const sampleEvents = [
  { id: 1, title: 'Community Meetup', date: 'March 15, 2025', location: 'Virtual' },
  { id: 2, title: 'Workshop: Getting Started', date: 'March 22, 2025', location: 'Online' },
  { id: 3, title: 'Hackathon Kickoff', date: 'April 1, 2025', location: 'TBD' },
];

function Events() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Events
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Upcoming community events and gatherings.
      </Typography>
      <Grid container spacing={2}>
        {sampleEvents.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{event.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.location}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Events;
