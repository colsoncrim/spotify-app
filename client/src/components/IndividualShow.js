import React from 'react';
import { Heading, Box, Divider } from '@chakra-ui/react';
// import { useState, useEffect } from 'react';
// import { getSavedShows } from '../spotify';

function IndividualShow() {

    return (
        <>
            <main>
                <Box align="center" mt={150}>
                    <Heading as="h2" size="3xl" color="gray.600">Show Title</Heading>
                    <Divider w="50%" color="gray.500" />
                </Box>
                {/* <PodcastPreview shows={savedShows.items} /> */}
            </main>
        </>
    )
}

export default IndividualShow;

        // Hero section with image and description of the show
        // table or grid of all episodes
        // how can you tell which ones you have played?
        // Maybe notes component will be the easiest way to navigate everything


// https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-episode
// might be able to use resume point to tell if you have played it 

// "release_date": "1981-12-15",
// "release_date_precision": "day",
// "resume_point": {
//   "fully_played": true,
//   "resume_position_ms": 0
// },