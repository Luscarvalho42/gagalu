import { Button } from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseconfig";

export default function Login() {

  return (
    <Button
      colorScheme="purple"
      rounded="md"
      boxShadow="md"
      variant="outline"
      rightIcon={<SmallCloseIcon />}
      onClick={() => signOut(auth)}>
      Sair
    </Button>
  )
}