import { Heading, Box, SimpleGrid, Divider, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const PodcastPreview = ({ shows }) => (
  <>
    {shows && shows.length ? (
      <Box align="center" mt={150}>
        <Heading as="h2" size="3xl" color="gray.600">My Podcasts</Heading>
        <Divider w="50%" color="gray.500" />
        <SimpleGrid minChildWidth="300px" m={10} columns={3} spacing={10}>
        {/* shows is an array of objects so you must use {} inside of the map */}
        {shows.map(({show, i}) => (
          <li key={i} style={{listStyleType: "none"}}>
            <Link to={`/shows/${show.id}`}>
              <Box>
                {show.images[0] && (
                  <Box>
                    <Image src={show.images[0].url} alt={show.name} boxShadow="2xl" borderRadius="10%" />
                  </Box>
                )}
                <Text fontSize="3xl" color="gray.600" mt={4}>{show.name}</Text>
              </Box>
            </Link>
          </li>
        ))}
      </SimpleGrid>
      </Box>
    ) : (
      <p>No shows available</p>
    )}
  </>
);

export default PodcastPreview;