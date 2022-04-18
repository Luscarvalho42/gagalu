import { Box, Button, Center, Image, Stack } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebaseconfig";

export default function Login() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <Center h="100vh">
      <Stack
        align="center"
        w="fit-content"
        p={5}
        borderRadius="3xl"
        spacing={5}>

        <Box
          bgColor="white"
          w="fit-content"
          p={2}
          borderWidth="1px"
          borderRadius="full">
          <Image src="https://www.palladinobmw.com/wp-content/uploads/2019/07/google-minimal-logo.png" boxSize="50px" alt="logo do google"/>
        </Box>

        <Button
          colorScheme="purple"
          rounded="md"
          boxShadow="xl"
          onClick={() => signInWithGoogle("", {prompt: "select_account"})}>
          Entrar com o Google
        </Button>

      </Stack>
    </Center>
  )
}