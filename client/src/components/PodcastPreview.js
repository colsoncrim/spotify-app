import React from 'react';
import { Heading, Box, SimpleGrid, Divider, Link, Flex, Image } from '@chakra-ui/react';
import { accessToken, getShows, getCurrentUserProfile } from '../spotify';
import { useEffect, useState } from 'react';

function PodcastPreview() {
    const [token, setToken] = useState(null);
    const [shows, setShows] = useState(null);

    useEffect(() => {
        setToken(accessToken);
    
        const fetchData = async () => {
          try {
            // the json data returned from spotify is a prop called data on the response object. Destructure that here:
            const { data } = await getShows();
            await setShows(data);
            console.log(data);
          } catch(e) {
            console.error(e);
          }
        }
    
        fetchData();
    
      }, [])

    return (
        <>
        <Box align="center" mt={150}>
            <Heading as="h3">My Podcasts</Heading>
            <Divider w="50%" color="gray.500" />
            <SimpleGrid m={10} columns={3} spacing={10}>
                <Box boxSize="sm">
                    <Image src={shows.images[0].url} borderRadius="full" alt="Podcast cover art" />
                </Box>
            </SimpleGrid>
            <Flex justify="flex-end">
                <Link>Show more</Link>
            </Flex>
        </Box>
        </>
    )
}

export default PodcastPreview;