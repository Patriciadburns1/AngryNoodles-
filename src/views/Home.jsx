import { Typography, Box, Button, Stack, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "Tired of litigating your right to exist as a woman in a workspace? You'd love a female mentor, but you're company is 90% men? Underpaid, and over it?",
    name: 'Aaliyah C.',
    tag: 'Negotiation Win',
  },
  {
    text: "Career Coven is a safe space for all women to ask questions to real women who have been where you are now. Find mentors with the expertise you need, mentors in your local area, and mentors in your field!",
    name: 'Maya T.',
    tag: 'Career Support',
  },
  {
    text: "Starting a new role at a Series A startup how to think about the trade-offs. Any mentors or community members been through this?",
    name: 'Claire W',
    tag: '',
  },
];

const HeartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const CommentIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const ShareIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const PersonAvatar = () => (
  <Box
    sx={{
      width: 40,
      height: 40,
      borderRadius: '50%',
      bgcolor: 'grey.200',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}
  >
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'grey.500' }}>
      <circle cx="12" cy="8" r="4" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  </Box>
);

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ textAlign: 'left' }}>
      <Typography variant="h2" component="h1" gutterBottom fontWeight="bold" sx={{ width: '50%' }}>
        Your career, <Box component="span" sx={{ fontStyle: 'italic', color: '#e8b4b8' }}>finally</Box> has a safe space
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: '12px', width: '50%'  }}>
        Welcome to our community. A mentorship app by women for women. Explore profiles, check out events, and read our guidelines to get started.
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
        <Button
          variant="contained"
          component={Link}
          to="/profiles"
          size="large"
          sx={{
            textTransform: 'none',
            borderRadius: 5,
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            '&:hover': {
              backgroundColor: '#9CAF88',
            },
          }}
        >
          Join the Community →
        </Button>
        <Button
          variant="outlined"
          component={Link}
          to="/profiles"
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
          Find a mentor
        </Button>
      </Stack>

      <Box sx={{ mt: 6, maxWidth: 600 }}>
        <Typography variant="overline" color="secondary" sx={{ letterSpacing: 1.5, fontWeight: 600 }}>
          What we hear
        </Typography>
        <Box
          sx={{
            mt: 2,
            p: 3,
            borderRadius: 2,
            bgcolor: 'background.paper',
            boxShadow: '0 2px 12px rgba(21, 42, 71, 0.08)',
            borderLeft: '4px solid',
            borderColor: 'secondary.main',
            minHeight: 160,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {testimonials.map((item, index) => (
            <Box
              key={index}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                p: 3,
                opacity: activeIndex === index ? 1 : 0,
                transform: `translateX(${activeIndex === index ? 0 : activeIndex > index ? -20 : 20}px)`,
                transition: 'opacity 0.4s ease, transform 0.4s ease',
                pointerEvents: activeIndex === index ? 'auto' : 'none',
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
                <PersonAvatar />
                <Stack direction="row" alignItems="center" spacing={1.5} flexWrap="wrap">
                  <Typography variant="subtitle2" fontWeight="600" color="text.primary">
                    {item.name}
                  </Typography>
                  {item.tag && (
                    <Chip label={item.tag} size="small" variant="outlined" sx={{ fontSize: '0.7rem', height: 22, borderColor: 'grey.400', color: 'text.secondary' }} />
                  )}
                </Stack>
              </Stack>
              <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic', mb: 2 }}>
                "{item.text}"
              </Typography>
              <Stack direction="row" spacing={1.5} sx={{ color: 'grey.500' }}>
                <Box component="span" sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', '&:hover': { color: 'text.secondary' } }}>
                  <HeartIcon />
                </Box>
                <Box component="span" sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', '&:hover': { color: 'text.secondary' } }}>
                  <CommentIcon />
                </Box>
                <Box component="span" sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', '&:hover': { color: 'text.secondary' } }}>
                  <ShareIcon />
                </Box>
              </Stack>
            </Box>
          ))}
        </Box>
        <Stack direction="row" spacing={1} sx={{ mt: 2, justifyContent: 'center' }}>
          {testimonials.map((_, index) => (
            <Box
              key={index}
              onClick={() => setActiveIndex(index)}
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: activeIndex === index ? 'secondary.main' : 'action.disabled',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease, transform 0.3s ease',
                '&:hover': {
                  bgcolor: activeIndex === index ? 'secondary.main' : 'action.hover',
                  transform: 'scale(1.2)',
                },
              }}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default Home;
