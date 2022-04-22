import { Center, ChakraProvider, Spinner } from "@chakra-ui/react";
import Header from "../components/Header";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseconfig";
import LoginPage from "../pages/LoginPage"

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
        <LoginPage />
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  ) 
}

export default MyApp;
