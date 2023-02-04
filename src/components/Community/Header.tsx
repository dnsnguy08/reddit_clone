/* eslint-disable jsx-a11y/alt-text */
import { Community } from "@/src/atoms/communitiesAtom";
import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaReddit } from "react-icons/fa";

type HeaderProps = {
  communityData: Community;
};

const Header: React.FC<HeaderProps> = ({ communityData }) => {
  const isJoined = false; // read from our communitySnippets
  return (
    <Flex direction="column" width="100%" height="147px">
      <Box height="50%" bg="blue.400" />
      <Flex justify="center" bg="white" flexGrow={1}>
        <Flex width="95%" maxWidth="860px" border="1px solid red">
          {/* {communityData.imageURL ? (
            <Image />
          ) : ( */}
          <Icon
            as={FaReddit}
            fontSize={64}
            position="relative"
            top={-3}
            color="blue.500"
            border="4px solid red"
            borderRadius="50%"
          />
          {/* //   )} */}
          <Flex>
            <Flex direction="column" mr={6}>
              <Text fontWeight={800} fontSize="16pt">
                {/* {communityData.id} */}
              </Text>
              <Text fontWeight={600} fontSize="10pt" color="gray.400">
                {/* r/{communityData.id} */}
              </Text>
            </Flex>
            <Button
              variant={isJoined ? "outline" : "solid"}
              height="30px"
              pr={6}
              pl={6}
              onClick={() => {}}
            >
              Join
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
