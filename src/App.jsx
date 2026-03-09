import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Box, Typography, Button, Container } from '@mui/material';
import logo from './CareerCovenLogo.svg';
import Home from './views/Home';
import CommunityGuidelines from './views/CommunityGuidelines';
import Profiles from './views/Profiles';
import Events from './views/Events';
import MentorProfile from './views/MentorProfile';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AppBar position="static" sx={{ width: '100%', background: '#152a47', color: '#fff8f0' }}>
        <Toolbar>
          <Box
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              textDecoration: 'none',
              color: 'inherit',
              '&:hover': { color: '#ffffff' },
            }}
          >
            <img src={logo} alt="" style={{ height: 40 }} />
            <Typography variant="h6" sx={{ color: 'inherit', fontWeight: 600 }}>
              Career Coven
            </Typography>
          </Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/profiles">
            Profiles
          </Button>
          <Button color="inherit" component={Link} to="/events">
            Events
          </Button>
          <Button color="inherit" component={Link} to="/community-guidelines">
            Community Guidelines
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/mentor/amara" element={<MentorProfile />} />
          <Route path="/events" element={<Events />} />
          <Route path="/community-guidelines" element={<CommunityGuidelines />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
