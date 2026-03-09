import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Home from './views/Home';
import CommunityGuidelines from './views/CommunityGuidelines';
import Profiles from './views/Profiles';
import Events from './views/Events';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AppBar position="static" sx={{ width: '100%', background: '#152a47', color: '#fff8f0' }}>
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit', '&:hover': { color: '#ffffff' } }}>
            Career Coven
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
      <Container maxWidth="lg" sx={{ mt: 4 }}>
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
