import { Box, Button, Center, Image, Stack } from "@chakra-ui/react";
import Head from "next/head";

export default function Login() {
    return (
        <Center h='100vh'>
            <Stack align='center' bgColor='purple.300' w='fit-content' p={5} rounded='3xl' spacing={5}>
                <Box bgColor='white' w='fit-content' p={2} borderRadius='full'>
                    <Image src='https://www.palladinobmw.com/wp-content/uploads/2019/07/google-minimal-logo.png' boxSize='50px'/>
                </Box>
                <Button bgColor='white' rounded='xl' boxShadow='md'>
                    Entrar com o Google
                </Button>
            </Stack>
        </Center>
    )
}