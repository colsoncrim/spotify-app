// this will be a list of episodes
// might need to make multiple api calls to get tha last episode listened to from each saved show?

import { Heading, Box, SimpleGrid, Divider, Link, Image, Text } from '@chakra-ui/react';

const RecentlyPlayed = ({ episodes }) => (
  <>
    {episodes && episodes.length ? (
      <Box align="center" mt={150}>
        <Heading as="h2" size="3xl" color="gray.600">Recently Played</Heading>
        <Divider w="50%" color="gray.500" />
        <SimpleGrid minChildWidth="250px" m={10} columns={3} spacing={10}>
        {/* shows is an array of objects so you must use {} inside of the map */}
        {episodes.map((episode, i) => (
          <li key={i} style={{listStyleType: "none"}}>
            <Box>
              {episode.images[0] && (
                <Box>
                  <Image src={episode.images[0].url} alt={episode.name} boxShadow="2xl" borderRadius="10%" />
                </Box>
              )}
              <Text fontSize="xl" color="gray.600" mt={4}>{episode.name}</Text>
            </Box>
          </li>
        ))}
      </SimpleGrid>
      </Box>
    ) : (
      <p>No shows available</p>
    )}
  </>
);

export default RecentlyPlayed;