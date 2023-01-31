import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";

const OAuthButtons: React.FC = () => {
  // variant theme from chakra button.ts
  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button variant="oauth" mb={2}>
        <Image src="/images/googlelogo.png" height="20px" mr={4} />
        Continue With Google
      </Button>
      <Button variant="oauth">
        <Image src="/images/github-mark.png" height="20px" mr={4} />
        Continue With GitHub
      </Button>
    </Flex>
  );
};
export default OAuthButtons;
