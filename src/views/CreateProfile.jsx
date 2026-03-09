import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Button,
  Chip,
  Stack,
  Paper,
} from '@mui/material';

const STRENGTH_OPTIONS = [
  'Financial literacy',
  'Financial negotiation',
  'Budget planning',
  'Debt management',
  'Credit building',
  'Savings strategies',
  'Investment basics',
  'Tax preparation',
  'Mortgage literacy',
  'Negotiation',
  'Career Pivot',
  'Public Speaking',
  'Motherhood and working full-time',
  'LGBTQ+',
];

function CreateProfile() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const [strengths, setStrengths] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleStrength = (strength) => {
    setStrengths((prev) =>
      prev.includes(strength) ? prev.filter((s) => s !== strength) : [...prev, strength]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Box sx={{ pb: 4, textAlign: 'center', maxWidth: 500, mx: 'auto' }}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight={600}>
          Welcome to the coven!
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Your profile has been submitted. Our team will review it and you'll hear from us soon.
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/profiles"
          sx={{
            textTransform: 'none',
            borderRadius: 5,
            px: 4,
            py: 1.5,
            '&:hover': { backgroundColor: '#9CAF88' },
          }}
        >
          Browse mentors
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ pb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Create your profile
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Join our community of women supporting women. Share your expertise and connect with others.
      </Typography>

      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: 4,
          maxWidth: 600,
          borderRadius: 3,
          boxShadow: '0 2px 12px rgba(21, 42, 71, 0.08)',
        }}
      >
        <Stack spacing={3}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
          />
          <TextField
            label="Role / Job title"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="e.g. Senior Engineering Manager"
            fullWidth
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
          />
          <TextField
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. London"
            fullWidth
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
          />
          <TextField
            label="About you"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Share a bit about your journey and what you can help with..."
            multiline
            rows={4}
            fullWidth
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
          />

          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
              What can you help with? (select all that apply)
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1} useFlexGap>
              {STRENGTH_OPTIONS.map((strength) => (
                <Chip
                  key={strength}
                  label={strength}
                  onClick={() => toggleStrength(strength)}
                  sx={{
                    bgcolor: strengths.includes(strength) ? '#9CAF88' : 'grey.200',
                    color: strengths.includes(strength) ? 'white' : 'text.primary',
                    fontWeight: strengths.includes(strength) ? 600 : 400,
                    '&:hover': {
                      bgcolor: strengths.includes(strength) ? '#8a9d78' : 'grey.300',
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>

          <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                textTransform: 'none',
                borderRadius: 5,
                px: 4,
                py: 1.5,
                '&:hover': { backgroundColor: '#9CAF88' },
              }}
            >
              Create profile
            </Button>
            <Button
              component={Link}
              to="/"
              variant="outlined"
              sx={{
                textTransform: 'none',
                borderRadius: 5,
                borderColor: 'primary.main',
                color: 'primary.main',
                '&:hover': {
                  borderColor: '#9CAF88',
                  color: '#9CAF88',
                  backgroundColor: 'rgba(156, 175, 136, 0.08)',
                },
              }}
            >
              Cancel
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}

export default CreateProfile;
