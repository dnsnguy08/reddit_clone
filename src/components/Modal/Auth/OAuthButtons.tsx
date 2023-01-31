import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";

import { auth } from "@/src/firebase/clientApp";

const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  // variant theme from chakra button.ts
  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button
        variant="oauth"
        mb={2}
        isLoading={googleLoading}
        onClick={() => signInWithGoogle()}
      >
        <Image src="/images/googlelogo.png" height="20px" mr={4} />
        Continue With Google
      </Button>
      <Button
        variant="oauth"
        isLoading={githubLoading}
        onClick={() => signInWithGithub()}
      >
        <Image src="/images/github-mark.png" height="20px" mr={4} />
        Continue With GitHub
      </Button>
      {googleError && <Text>{googleError.message}</Text>}
      {githubError && <Text>{githubError.message}</Text>}
    </Flex>
  );
};
export default OAuthButtons;
