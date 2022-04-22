import { Center, Flex, Heading, Spacer } from "@chakra-ui/react";
import Logout from "./Logout";

export default function Header({ inLoginPage }) {
  return inLoginPage ? loginPage() : comomPage();
}

function comomPage() {
  return (
    <Flex w="100%" pos="fixed" top bgColor="purple.50" p={3} px="20vw" color="purple.500" zIndex="9999">
      <Center w="100%">
        <Heading>GAGALU</Heading>
        <Spacer />
        <Logout />
      </Center>
    </Flex>
  );
}

function loginPage() {
  return (
    <Flex w="100%" pos="fixed" top bgColor="purple.500" p={3} px="20vw" color="purple.50">
      <Center w="100%">
        <Heading>GAGALU</Heading>
      </Center>
    </Flex>
  );
}