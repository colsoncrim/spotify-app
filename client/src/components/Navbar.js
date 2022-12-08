import React from 'react';
import { Flex, Button, Link, IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { logout } from '../spotify.js';

function Navbar() {

    const [display, setDisplay] = useState("none");

    return (
        <Flex>
            {/* Desktop Nav */}
            <Flex position="fixed" top="1rem" left="1rem" align="center">
            <Link>
                <Button justify="flex-start" variant="nav">PodTrack</Button>
            </Link>
            </Flex>
            <Flex position="fixed" top="1rem" right="1rem" align="center">
            <Flex display={["none", "none", "flex", "flex"]} >
                <Link>
                    <Button variant="ghost" aria-label="Shows">Shows</Button>
                </Link>
                <Link>
                    <Button variant="ghost" aria-label="Episodes">Episodes</Button>
                </Link>
                <Link>
                    <Button variant="ghost" aria-label="Notes">Notes</Button>
                </Link>
                <Button onClick={logout} colorScheme="gray" variant="solid">Log Out</Button>
            </Flex>
            {/* Mobile Nav */}
            <IconButton
                aria-label="Open Menu"
                size="lg"
                bgColor="gray.50"
                icon={
                <HamburgerIcon />
                }
                display={["flex", "flex", "none", "none"]}
                onClick={() => setDisplay("flex")}
            />
            </Flex>

            {/* Mobile Nav Content */}
            <Flex 
            flexDir="column" 
            display={display}
            zIndex={20}
            bgColor="gray.50"
            overflowY="auto"
            h="100vh"
            w="100vw"
            pos="fixed"
            top="0"
            left="0"
            >
            <Flex justify="flex-end">
                <IconButton
                icon={
                    <CloseIcon />
                }
                mt={2}
                mr={2}
                aria-label="Close Menu"
                size="lg"
                onClick={() => setDisplay("none")}
                />
            </Flex>
            <Flex flexDir="column" alignItems="center">
                <Link>
                    <Button variant="ghost" aria-label="Shows">Shows</Button>
                </Link>
                <Link>
                    <Button variant="ghost" aria-label="Episodes">Episodes</Button>
                </Link>
                <Link>
                    <Button variant="ghost" aria-label="Notes">Notes</Button>
                </Link>
                <Button onClick={logout} colorScheme="gray" variant="solid">Log Out</Button>
            </Flex>
            </Flex>
        </Flex>
    )
}

export default Navbar;