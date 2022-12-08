import { useState, useEffect } from 'react';
import { getCurrentUserProfile, getSavedShows, getRecentlyPlayed } from '../spotify';
import { PodcastPreview, RecentlyPlayed } from '../components';
// import PodcastPreview from '../components/PodcastPreview';

const Home = () => {
  const [profile, setProfile] = useState(null);
  const [savedShows, setSavedShows] = useState(null);
  const [recentlyPlayed, setRecentlyPlayed] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // the json data returned from spotify is a prop called data on the response object. Destructure that here:
        const userProfile = await getCurrentUserProfile();
        setProfile(userProfile.data);

        const userSavedShows = await getSavedShows();
        setSavedShows(userSavedShows.data);
        // console.log(userSavedShows.data);

        const userRecentlyPlayed = await getRecentlyPlayed();
        setRecentlyPlayed(userRecentlyPlayed.data);
        console.log(userRecentlyPlayed.data);

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

      {recentlyPlayed && (
        <main>
          <RecentlyPlayed episodes={recentlyPlayed.items} />
        </main>
      )}      
    </>
  )
};

export default Home;