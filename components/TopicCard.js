import { Button } from "@chakra-ui/react";
export default function TopicCard({ children }) {
  return (
    <Button
      bgColor="purple.50"
      boxShadow="sm"
      w="250px"
      h="fit-content"
      p={2}
      borderWidth="1px"
      borderRadius="xl"
      mb={2}
      sx={{ whiteSpace: "wrap" }}>
      {children}
    </Button>
  )
}