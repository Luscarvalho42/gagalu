import { 
  Avatar,
  Stack,
  Text,
  Center,
  Spacer,
  Button,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  useToast,
  InputLeftElement,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";

import React from "react";
import { auth, db } from "../firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, addDoc } from "firebase/firestore";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import TopicCard from "../components/TopicCard";
import { async } from "@firebase/util";

export default function LoginPage() {
  const [newTopic, setNewTopic] = React.useState("")
  const [filter, setFilter] = React.useState("")
  
  const [user] = useAuthState(auth);
  
  const toast = useToast();
  
  const changeNewTopic = (event) => setNewTopic(event.target.value);
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const addTopic = async () => {
    console.log(newTopic.length)
    if (topics?.filter(({name}) => name === newTopic).length > 0) {
      toast({
        title: 'Este assunto já existe',
        status: 'warning',
        duration: 4000,
        isClosable: true
      })
    } else {
      await addDoc(collection(db, "topic"), { name: newTopic })
      toast({
        title: 'Novo assunto criado',
        status: 'success',
        duration: 4000,
        isClosable: true
      })
      onClose();
    }
  }
  
  const changeFilter = (event) => setFilter(event.target.value);

  const [snapshot, loading, error] = useCollection(collection(db, "topic"));
  let topics = snapshot?.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data()
    }
  }).filter(({name}) => name.toUpperCase().includes(filter.toUpperCase()));


  return (
    <>
      <Header />

      <Stack px="20vw">
        <Center mt={100} w="100%">
          <Avatar mr={5} src={user.photoURL}/>
          <Text>{user.displayName}</Text>
          <Spacer />
          <InputGroup  w="300px">
            <InputRightElement pointerEvents='none'>
              <SearchIcon color='gray.300' />
            </InputRightElement>
            <Input type='text' maxLength={100} placeholder='Pesquisar assunto' onChange={changeFilter}/>
          </InputGroup>
        </Center>
        
        <Center pt={20}>
          <Button
            boxShadow="md"
            colorScheme="purple"
            rounded="md"
            variant="solid"
            size="sm"
            width="200px"
            rightIcon={<AddIcon />}
            onClick={onOpen}>
            Iniciar assunto
          </Button>
        </Center>

        <Center>
          <Box
            padding={4}
            w="fit-content"
            maxW={"780"}
            m={"auto"}
            p={2}
            sx={{ columnCount: [1, 2, 3], columnGap:"10px"}}
          >
            {topics?.map(function ({ name }) {
              return <TopicCard key={Math.random}>{name}</TopicCard>
            })}
          </Box>
        </Center>
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Iniciar novo assunto</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Text>Sobre o que você quer falar?</Text>
            <Input placeholder="Máximo 100 caracteres" maxLength={100} focusBorderColor="purple.500" onChange={changeNewTopic}></Input>
          </ModalBody>

          <ModalFooter>
            <Button size="sm" variant='ghost' onClick={onClose} mr={3}>Cancelar</Button>
            <Button size="sm" colorScheme='purple' onClick={addTopic}>
              Iniciar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}