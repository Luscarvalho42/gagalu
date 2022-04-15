import { Center, ChakraProvider, Spinner } from "@chakra-ui/react";
import Login from "../components/Login";
import Logout from "../components/Logout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseconfig";

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <ChakraProvider>
        <Center h="100vh">
          <Spinner size="xl" />
        </Center>
      </ChakraProvider>
    );
  }

  if (!user) {
    return (
      <ChakraProvider>
        <Login/>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider>
      <Logout />
    </ChakraProvider>
  ) 
}

export default MyApp;
