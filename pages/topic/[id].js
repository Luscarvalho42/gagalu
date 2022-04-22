import { Flex, Heading, Text, Spacer } from "@chakra-ui/layout"
import Head from "next/head"
import { useRouter } from "next/router"
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, doc, orderBy, query } from "firebase/firestore"
import { db, auth } from "../../firebaseconfig"
import { useRef, useEffect } from "react";
import Header from "../../components/Header";
import Bottombar from "../../components/Bottombar";

export default function Topic() {
  const router = useRouter();
  const { id } = router.query;
  const [user] = useAuthState(auth);
  const [topic] = useDocumentData(doc(db, "topic", id));
  const q = query(collection(db, `topic/${id}/messages`), orderBy("timestamp"));
  const [messages] = useCollectionData(q);
  const bottomOfChat = useRef();

  const getMessages = () =>
    messages?.map(msg => {
      const sender = msg.sender === user.email;
      return (
        <Flex key={Math.random()} alignSelf={sender ? "flex-start" : "flex-end"} bg={sender ? "purple.100" : "purple.50"} w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
          <Text>{msg.text}</Text>
        </Flex>
      )
    })

  return (
    <Flex
      h="100vh"
      direction="column"
    >
      <Head><title>GAGALU | {topic?.name}</title></Head>
      <Header/>

      <Heading p={73}>{topic?.name}</Heading>
      <Spacer />

      <Flex direction="column">
        <Flex direction="column" pt={4} mx={5} overflowX="scroll" sx={{scrollbarWidth: "none"}} overflow="hidden">
          {getMessages()}
          <div ref={bottomOfChat}></div>
        </Flex>

        <Bottombar id={id} user={user} />
      </Flex>

    </Flex>

  )
}