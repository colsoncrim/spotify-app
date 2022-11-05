import { useState, useEffect } from 'react';
import { getCurrentUserProfile, getSavedShows } from '../spotify';
import { PodcastPreview } from '../components';
// import PodcastPreview from '../components/PodcastPreview';

const Home = () => {
  const [profile, setProfile] = useState(null);
  const [savedShows, setSavedShows] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // the json data returned from spotify is a prop called data on the response object. Destructure that here:
        const userProfile = await getCurrentUserProfile();
        setProfile(userProfile.data);

        const userSavedShows = await getSavedShows();
        setSavedShows(userSavedShows.data);
        console.log(userSavedShows.data);

      } catch(e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {/* {profile && (
        <div>
          <h1>{profile.display_name}</h1>
          <p>{profile.followers.total} Followers</p>
          {profile.images.length && profile.images[0].url && (
            <img src={profile.images[0].url} alt="Avatar"/>
          )}
        </div>
      )} */}

      {savedShows && (
        <main>
          <PodcastPreview shows={savedShows.items} />
        </main>
      )}
    </>
  )
};

export default Home;