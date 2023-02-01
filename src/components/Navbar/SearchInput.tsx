import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

type SearchInputProps = {
  // user:
};

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    // styling for search bar, flexGrow={1} take up remaining width of parent container
    <Flex flexGrow={1} mr={2} ml={1} align="center">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.400" mb={1} />}
        />
        <Input
          placeholder="Search Posts"
          fontSize="10pt"
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          height="34px"
          bg="gray.50"
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
