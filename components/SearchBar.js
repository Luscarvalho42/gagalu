import {
  InputGroup,
  InputRightElement,
  Input,
  IconButton,
  ButtonGroup,
  Button
} from "@chakra-ui/react";

import { SearchIcon, AddIcon } from "@chakra-ui/icons";

export default function SearchBar() {

  return (
    <InputGroup size='md' w="300px">
      <Input
        type='text'
        placeholder='Pesquisar assunto'
      />
      <InputRightElement>
        <IconButton bgColor="purple.50" borderWidth="1px" icon={<SearchIcon />} />
      </InputRightElement>
    </InputGroup>
  )
}