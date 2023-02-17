import { Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaTruckMonster } from "react-icons/fa";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../atoms/authModalAtom";
import { auth, firestore, storage } from "../../firebase/clientApp";
import useDirectory from "../../hooks/useDirectory";
import CreateCommunityModal from "../Modal/CreateCommunity/CreateCommunityModal";

const PersonalHome: React.FC = () => {
  const [user] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalState);
  const { toggleMenuOpen } = useDirectory();
  const [open, setOpen] = useState(false);

  return (
    <Flex
      direction="column"
      bg="white"
      borderRadius={4}
      cursor="pointer"
      border="1px solid"
      borderColor="gray.300"
      position="sticky"
    >
      <Flex
        align="flex-end"
        color="white"
        p="6px 10px"
        bg="blue.500"
        height="34px"
        borderRadius="4px 4px 0px 0px"
        fontWeight={600}
        bgImage="url(/images/redditPersonalHome.png)"
        backgroundSize="cover"
      ></Flex>
      <Flex direction="column" p="12px">
        <Flex align="center" mb={2}>
          <Icon as={FaTruckMonster} fontSize={45} color="brand.100" mr={2} />
          <Text fontWeight={600}>Home</Text>
        </Flex>
        <Stack spacing={3}>
          <Text fontSize="9pt">
            Your personal Forum frontpage, built for you.
          </Text>

          {user ? (
            <Flex direction="column" padding={4}>
              <Button height="30px" mb={2} onClick={() => toggleMenuOpen()}>
                Create Post
              </Button>
              <Button
                variant="outline"
                height="30px"
                onClick={() => toggleMenuOpen()}
              >
                Create Community
              </Button>
            </Flex>
          ) : (
            <Flex direction="column" padding={4}>
              <Button
                height="30px"
                mb={2}
                onClick={() => setAuthModalState({ open: true, view: "login" })}
              >
                Create Post
              </Button>
              <Button
                variant="outline"
                height="30px"
                onClick={() => setAuthModalState({ open: true, view: "login" })}
              >
                Create Community
              </Button>
            </Flex>
          )}
        </Stack>
      </Flex>
    </Flex>
  );
};
export default PersonalHome;
