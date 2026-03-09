import { Typography,Button, Box, Paper, List, ListItem, ListItemText } from '@mui/material';

function CommunityGuidelines() {
  const guidelines = [
    'Be respectful and inclusive toward all Women identifying members.',
    'No harassment, hate speech, or discrimination.',
    'Protect privacy — do not share others\' personal information.',
    'Provide constructive feedback and support.',
    'Report violations to help maintain a safe environment.',
    'Mentors: Do not share mentees\' personal information.',
    'Mentors: Be constructive, non-judgemental, and supportive.',
  ];

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Community Guidelines
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Please read and follow these guidelines to help keep our community safe and welcoming.
      </Typography>
      <Paper elevation={1} sx={{ p: 3, border: '1px solid', borderColor: '#e8b4b8' }}>
        <List>
          {guidelines.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Button
  href="#"
  onClick={(e) => e.preventDefault()}
  sx={{
    mt: 3,
    textTransform: 'none',
    color: 'secondary.main',
    '&:hover': { color: '#9CAF88', backgroundColor: 'transparent' },
  }}
>
  Report a violation →
</Button>
    </Box>
  );
}

export default CommunityGuidelines;
