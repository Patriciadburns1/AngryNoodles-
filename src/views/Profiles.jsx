import { Typography, Box, Card, CardContent, CardActions, Button, Chip, Stack, Tooltip, TextField, InputAdornment } from '@mui/material';
import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const PersonAvatar = () => (
  <Box
    sx={{
      width: 48,
      height: 48,
      borderRadius: '50%',
      bgcolor: 'grey.200',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}
  >
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'grey.500' }}>
      <circle cx="12" cy="8" r="4" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  </Box>
);

const mockProfiles = [
  {
    id: 12,
    name: "Amara Koné",
    role: "Senior Engineering Manager · Monzo",
    strengths: ['Financial literacy', 'Financial negotiation', 'Budget planning'],
  },
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
    strengths: ['Motherhood and working full-time', 'Debt management', 'LGBTQ+'],
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
  
  {
    id: 6,
    name: 'Kimberly Wallis',
    role: 'Software Engineer III',
    strengths: ['Negotiation', 'Career Pivot', 'Public Speaking'],
  },];

function Profiles() {
  const [searchQuery, setSearchQuery] = useState('');

  const tagCounts = useMemo(() => {
    const counts = {};
    mockProfiles.forEach((profile) => {
      profile.strengths.forEach((strength) => {
        counts[strength] = (counts[strength] || 0) + 1;
      });
    });
    return counts;
  }, []);

  const filteredProfiles = useMemo(() => {
    if (!searchQuery.trim()) return mockProfiles;
    const query = searchQuery.trim().toLowerCase();
    return mockProfiles.filter((profile) =>
      profile.strengths.some((strength) => strength.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Learn from people who've been there 
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Browse community members and their strengths.
      </Typography>
      <TextField
        placeholder="Search by interest, e.g. budget planning"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        size="small"
        sx={{
          mb: 3,
          maxWidth: 400,
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            bgcolor: 'background.paper',
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ color: 'text.secondary' }}>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 3,
        }}
      >
        {filteredProfiles.length === 0 ? (
          <Typography variant="body1" color="text.secondary" sx={{ gridColumn: '1 / -1', py: 4 }}>
            No mentors found for "{searchQuery}". Try a different interest like "Financial literacy" or "Negotiation".
          </Typography>
        ) : (
        filteredProfiles.map((profile) => (
          <Card
            key={profile.id}
            sx={{
              width: '100%',
              height: 300,
              display: 'flex',
              flexDirection: 'column',
              boxSizing: 'border-box',
              borderRadius: 3,
              boxShadow: '0 2px 12px rgba(21, 42, 71, 0.08)',
              overflow: 'hidden',
            }}
          >
              <CardContent sx={{ flexGrow: 1 }}>
                <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1.5 }}>
                  <PersonAvatar />
                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ mb: 0 }}>
                      {profile.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {profile.role}
                    </Typography>
                  </Box>
                </Stack>
                <Stack direction="row" flexWrap="wrap" gap={0.5} useFlexGap sx={{ mt: 1.5 }}>
                  {profile.strengths.map((strength) => (
                    <Tooltip
                      key={strength}
                      title={`${tagCounts[strength] || 0} ${tagCounts[strength] === 1 ? 'person' : 'people'} resonate with this tag`}
                      arrow
                      placement="top"
                    >
                      <Chip
                        label={strength}
                        size="small"
                        sx={{
                          bgcolor: '#9CAF88',
                          color: 'white',
                          fontWeight: 500,
                          cursor: 'help',
                        }}
                      />
                    </Tooltip>
                  ))}
                </Stack>
              </CardContent>
              <CardActions>
                {profile.name === 'Amara Koné' ? (
                <Button size="small" component={Link} to="/mentor/amara">
                  View Profile
                </Button>
              ) : (
                <Button size="small">View Profile</Button>
              )}
              </CardActions>
            </Card>
        ))
        )}
      </Box>
    </Box>
  );
}

export default Profiles;
