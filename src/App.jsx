import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Home from './pages/Home';
import CommunityGuidelines from './pages/CommunityGuidelines';
import Profiles from './pages/Profiles';
import Events from './pages/Events';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AppBar position="static" sx={{ width: '100%', background: 'linear-gradient(90deg, #a7f3d0 0%, #6ee7b7 50%, #fbcfe8 100%)', color: '#374151' }}>
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
            Hackathon
          </Typography>
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
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/events" element={<Events />} />
          <Route path="/community-guidelines" element={<CommunityGuidelines />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
