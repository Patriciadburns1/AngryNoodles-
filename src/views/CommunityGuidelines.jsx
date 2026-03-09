import { Typography, Box, Paper, List, ListItem, ListItemText } from '@mui/material';

function CommunityGuidelines() {
  const guidelines = [
    'This space is for ciswomen, transwomen, and nonbinary people.'
    'Be respectful and inclusive towards everyone.',
    'Report harassment, hate speech, and discrimination.',
    'Mentors: Do not share mentees\' personal information.',
    'Mentors: Be constructive, nonjudgemental, and supportive.',
  ];

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Community Guidelines
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Please read and follow these guidelines to help keep our community safe and welcoming.
      </Typography>
      <Paper elevation={1} sx={{ p: 3, border: '1px solid', borderColor: '#c9a9a6' }}>
        <List>
          {guidelines.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}

export default CommunityGuidelines;
