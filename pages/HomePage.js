import Header from "../components/Header";
import { auth } from "../firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { 
  Avatar,
  Stack,
  Text,
  Center,
  Spacer
} from "@chakra-ui/react";
import SearchBar from "../components/SearchBar";

export default function LoginPage() {
  const [user] = useAuthState(auth);

  return (
    <>
      <Header />

      <Stack px="20vw">
        <Center mt={100} w="100%">
          <Avatar mr={5} src={user.photoURL}/>
          <Text>{user.displayName}</Text>
          <Spacer />
          <SearchBar />
        </Center>
      </Stack>
    </>
  )
}