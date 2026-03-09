import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  TextField,
  Chip,
  Paper,
  Divider,
} from '@mui/material';

// ── Data ─────────────────────────────────────────────────────
const mentor = {
  name: 'Amara Koné',
  role: 'Senior Engineering Manager · Monzo',
  location: 'London',
  linkedin: 'Verified · Monzo, Deliveroo, Google',
  bio: [
    "Three years at Google wondering if I belonged. Turns out the room was wrong, not me. Now I run a team of 18 and help other women figure that out faster than I did.",
    "I'll be straight with you, I'll push back when you're underselling yourself, and I won't give you a pep talk when what you need is a plan.",
  ],
  quote: "The men around me weren't waiting to feel ready. I stopped waiting too.",
  tags: [
    { label: '"I got passed over — again"', style: 'clay' },
    { label: '"I\'m the only one who looks like me"', style: 'plain' },
    { label: '"I said yes before I was ready"', style: 'sage' },
    { label: '"My manager takes credit for my work"', style: 'plain' },
    { label: '"I\'m scared to ask for more money"', style: 'clay' },
    { label: '"Stay or quit — I genuinely don\'t know"', style: 'plain' },
    { label: '"Everyone else seems fine. I\'m not."', style: 'sage' },
    { label: '"I freeze up in meetings"', style: 'plain' },
    { label: '"My visa is tied to this job"', style: 'clay' },
    { label: '"I cried at work and I can\'t let it go"', style: 'plain' },
    { label: '"I work twice as hard and get half the credit"', style: 'plain' },
    { label: '"I want to lead but nobody sees it yet"', style: 'sage' },
  ],
  trust: [
    { icon: '🛡️', text: 'Women-only space' },
    { icon: '👁️', text: 'No algorithms. Amara reads this herself.' },
    { icon: '🔒', text: 'Conversations stay private see Community Guidelines for more details.' },
  ],
};

// ── Person avatar (matches Home carousel & Profiles cards) ──────
const PersonAvatar = ({ size = 48 }) => (
  <Box
    sx={{
      width: size,
      height: size,
      borderRadius: '50%',
      bgcolor: 'grey.200',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}
  >
    <svg
      width={size * 0.54}
      height={size * 0.54}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: 'grey.500' }}
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  </Box>
);

// ── Tag styles using theme colors ──────────────────────────────
const tagStyles = {
  plain: { background: '#fff', color: '#152a47', border: '1px solid #e8b4b8' },
  clay: { background: '#fdf0f2', color: '#152a47', border: '1px solid #e8b4b8' },
  sage: { background: '#e8ebe3', color: '#152a47', border: '1px solid #9caa88' },
};

// ── Section label ──────────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
      <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: 2 }}>
        {children}
      </Typography>
      <Divider sx={{ flex: 1 }} />
    </Box>
  );
}

export default function MentorProfile() {
  const [msg, setMsg] = useState('');
  const [sent, setSent] = useState(false);

  const send = () => {
    if (!msg.trim()) return;
    setSent(true);
  };

  return (
    <Box sx={{ minHeight: '100vh', background: 'background.default', py: 4 }}>
      {/* ── NAV ── */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          px: 3,
          background: 'background.default',
          borderBottom: '1px solid',
          borderColor: 'secondary.light',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h6" sx={{ color: 'secondary.main', fontStyle: 'italic' }}>
          herstory
        </Typography>
        <Button component={Link} to="/profiles" sx={{ color: 'text.secondary', textTransform: 'none' }}>
          ← Community
        </Button>
      </Box>

      {/* ── PAGE CONTENT ── */}
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 3 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 320px' },
            gap: 4,
            alignItems: 'start',
          }}
        >
          {/* ── MAIN COLUMN ── */}
          <Box>
            {/* HERO */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                gap: 2,
                pb: 3,
                mb: 3,
                borderBottom: '1px solid',
                borderColor: 'secondary.light',
              }}
            >
              <PersonAvatar size={88} />
              <Box>
                <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: 2, display: 'block', mb: 0.5 }}>
                  Mentor · {mentor.location}
                </Typography>
                <Typography variant="h4" component="h1" fontWeight={600} sx={{ color: 'primary.main', mb: 0.5 }}>
                  {mentor.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {mentor.role}
                </Typography>
                <Chip
                  label={mentor.linkedin}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(21, 42, 71, 0.08)',
                    color: 'primary.main',
                    fontSize: '0.75rem',
                  }}
                />
              </Box>
            </Box>

            {/* ABOUT */}
            <Box sx={{ mb: 4 }}>
              <SectionLabel>About</SectionLabel>
              <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.primary', mb: 2 }}>
                {mentor.bio[0]}
              </Typography>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  pl: 4,
                  mb: 2,
                  bgcolor: 'secondary.light',
                  borderLeft: '4px solid',
                  borderColor: 'secondary.main',
                }}
              >
                <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'text.primary', lineHeight: 1.6 }}>
                  "{mentor.quote}"
                </Typography>
              </Paper>
              <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.primary' }}>
                {mentor.bio[1]}
              </Typography>
            </Box>

            {/* TAGS */}
            <Box>
              <SectionLabel>Things I've lived through</SectionLabel>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {mentor.tags.map((t, i) => (
                  <Chip
                    key={i}
                    label={t.label}
                    sx={{
                      ...tagStyles[t.style],
                      borderRadius: 2,
                      '&:hover': { transform: 'translateY(-2px)', boxShadow: 2 },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>

          {/* ── SIDEBAR ── */}
          <Paper
            sx={{
              position: { md: 'sticky' },
              top: { md: 100 },
              p: 3,
              bgcolor: 'primary.main',
              borderRadius: 3,
              overflow: 'hidden',
            }}
          >
            <Box sx={{ position: 'relative' }}>
              <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: 2, display: 'block', mb: 0.5 }}>
                Let's talk
              </Typography>
              <Typography variant="h6" sx={{ color: 'primary.contrastText', mb: 0.5 }}>
                What's going on?
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,248,240,0.7)', mb: 2 }}>
                Tell me where you're at. No need to have it figured out.
              </Typography>

              {!sent ? (
                <>
                  <TextField
                    multiline
                    rows={5}
                    fullWidth
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder="Hi Amara — I just got offered a management role and I honestly don't know if I'm ready…"
                    sx={{
                      mb: 2,
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: 'rgba(255,255,255,0.07)',
                        color: 'primary.contrastText',
                        '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                        '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={send}
                    sx={{
                      backgroundColor: 'secondary.main',
                      color: 'secondary.contrastText',
                      py: 1.5,
                      borderRadius: 10,
                      textTransform: 'none',
                      '&:hover': { backgroundColor: 'secondary.main', opacity: 0.9 },
                    }}
                  >
                    Send request
                  </Button>
                  <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 1, color: 'rgba(255,248,240,0.5)' }}>
                    ● Usually replies within 24 hrs
                  </Typography>
                </>
              ) : (
                <Box sx={{ textAlign: 'center', py: 3 }}>
                  <Typography sx={{ fontSize: '2rem', mb: 1 }}>🌺</Typography>
                  <Typography sx={{ fontStyle: 'italic', color: 'primary.contrastText', lineHeight: 1.6 }}>
                    Sent. She'll read this and reply personally.
                  </Typography>
                </Box>
              )}

              {/* Trust strip */}
              <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                {mentor.trust.map((t, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, color: 'rgba(255,248,240,0.6)', fontSize: '0.75rem' }}>
                    <span>{t.icon}</span>
                    {t.text}
                  </Box>
                ))}
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
