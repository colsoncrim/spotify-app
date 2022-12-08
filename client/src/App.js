import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset
} from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import { accessToken } from './spotify';
// import PodcastPreview from './components/PodcastPreview';
import Shows from './components/Shows';
import IndividualEpisode from './components/IndividualEpisode';
import IndividualShow from './components/IndividualShow';
import Notes from './components/Notes';
import { Login, Home } from './pages';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken);
  }, []);

  return (
    <>
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <div>
        {!token ? (
          <Login />
        ) : (
          <>
          <Navbar />
          <Router>
            <ScrollToTop />

            <Routes>
              <Route path="/shows" element={<Shows />}>
              </Route>
              <Route path="/shows/:id" element={<IndividualShow />}>
              </Route>
              <Route path="/episodes/:id" element={<IndividualEpisode />}>
              </Route>
              <Route path="/notes" element={<Notes />}>
              </Route>
              <Route path="/" element={<Home />}>
              </Route>
            </Routes>
          </Router>
          </>
        )}
      </div>
      </ColorModeProvider>
    </ThemeProvider>
    </>
  );
}

export default App;
