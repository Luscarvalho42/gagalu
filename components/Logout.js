import { Button, Avatar, Flex, Center, IconButton } from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseconfig";

export default function Login() {

  return (
    <Button
      colorScheme="purple"
      rounded="md"
      variant="solid"
      size="sm"
      rightIcon={<SmallCloseIcon />}
      onClick={() => signOut(auth)}>
      Sair
    </Button>
  )
}