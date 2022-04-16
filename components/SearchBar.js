import {
  InputGroup,
  InputRightElement,
  Input,
  IconButton
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

export default function SearchBar() {

  return (
    <InputGroup size='md' w="200px">
      <Input
        type='text'
        placeholder='Pesquisar tema'
      />
      <InputRightElement>
        <IconButton bgColor="purple.50" borderWidth="1px" icon={<SearchIcon />} />
      </InputRightElement>
    </InputGroup>
  )
}