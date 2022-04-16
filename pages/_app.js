import { Center, ChakraProvider, Spinner } from "@chakra-ui/react";
import Header from "../components/Header";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseconfig";
import LoginPage from "../pages/LoginPage"
import HomePage from "../pages/HomePage"
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <>
        <Header />
        <ChakraProvider>
          <Center h="100vh">
            <Spinner size="xl" />
          </Center>
        </ChakraProvider>
      </>
    );
  }

  if (!user) {
    return (
      <>
        <ChakraProvider>
          <LoginPage />
        </ChakraProvider>
      </>
    );
  }

  return (
    <>
      <ChakraProvider>
        <HomePage />
      </ChakraProvider>
    </>
  ) 
}

export default MyApp;
