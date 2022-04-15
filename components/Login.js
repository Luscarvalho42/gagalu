import { Box, Button, Center, Image, Stack } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebaseconfig";

export default function Login() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <Center h="100vh">
      <Stack
        align="center"
        bgColor="purple.300"
        w="fit-content"
        p={5}
        borderRadius="3xl"
        spacing={5}
        boxShadow="md">

        <Box
          bgColor="white"
          w="fit-content"
          p={2}
          borderRadius="full">
          <Image src="https://www.palladinobmw.com/wp-content/uploads/2019/07/google-minimal-logo.png" boxSize="50px"/>
        </Box>

        <Button
          bgColor="white"
          rounded="xl"
          boxShadow="md"
          onClick={() => signInWithGoogle("", {prompt: "select_account"})}>
          Entrar com o Google
        </Button>

      </Stack>
    </Center>
  )
}