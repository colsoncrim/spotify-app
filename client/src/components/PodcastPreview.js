// import React from 'react';
import { Heading, Box, SimpleGrid, Divider, Link, Flex, Image } from '@chakra-ui/react';
// import { getShows, getSavedShows } from '../spotify';
// import { useEffect, useState } from 'react';

const PodcastPreview = ({ shows }) => (
  <>
    {shows && shows.length ? (
      <Box align="center" mt={150}>
        <Heading as="h3" color="gray.600">My Podcasts</Heading>
        <Divider w="50%" color="gray.500" />
        <SimpleGrid minChildWidth="300px" m={10} columns={3} spacing={10}>
        {/* shows is an array of objects so you must use {} inside of the map */}
        {shows.map(({show, i}) => (
          <li key={i} style={{listStyleType: "none"}}>
            <div>
              {show.images[0] && (
                <div>
                  <Image src={show.images[0].url} alt={show.name} />
                </div>
              )}
              <Heading as="h4" color="gray.600">{show.name}</Heading>
            </div>
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