import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import { accessToken, getCurrentUserProfile, getShows } from './spotify';
import PodcastPreview from './components/PodcastPreview';

function App() {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);
  // const [shows, setShows] = useState(null);

  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      try {
        // the json data returned from spotify is a prop called data on the response object. Destructure that here:
        const { data } = await getCurrentUserProfile();
        setProfile(data);
      } catch(e) {
        console.error(e);
      }
    }

    fetchData();

  }, [])

  // useEffect(() => {
  //   setToken(accessToken);

  //   const fetchData = async () => {
  //     try {
  //       // the json data returned from spotify is a prop called data on the response object. Destructure that here:
  //       const { data } = await getShows();
  //       await setShows(data);
  //       console.log(data.images);
  //     } catch(e) {
  //       console.error(e);
  //     }
  //   }

  //   fetchData();

  // }, [])

  return (
    <>
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <div>
        {!token ? (
        <a
          className="App-link"
          href="http://localhost:8888/login"
        >
          Log in to Spotify
        </a>
        ) : (
          <>
          <Navbar />
          {/* <PodcastPreview /> */}
          {/* <button onClick={logout}>Log Out</button> */}
          
          {profile && (
            <div>
              <h1>{profile.display_name}</h1>
              <p>{profile.followers.total} Followers</p>
              {/* {shows.images.length && shows.images[0].url && (
                <img src={shows.images[0].url} alt="My profile pic" />
              )} */}
            </div>
          )}
          </>
        )}
      </div>
      </ColorModeProvider>
    </ThemeProvider>
    </>
  );
}

export default App;
