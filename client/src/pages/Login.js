import {
    Button,
    Link,
    Center
} from '@chakra-ui/react';

const Login = () => (
    <Center>
        <Link href="http://localhost:8888/login">
        <Button
            size="lg"
            height="48px"
            width="200px"
            colorScheme="green"
            variant="solid"
        >Log in to Spotify</Button>
        </Link>
    </Center>
);

export default Login;