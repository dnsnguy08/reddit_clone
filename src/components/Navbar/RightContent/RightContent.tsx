import { auth } from "@/src/firebase/clientApp";
import { Button, Flex } from "@chakra-ui/react";
import { signOut, User } from "firebase/auth";
import React from "react";
import AuthModal from "../../Modal/Auth/AuthModal";
import AuthButtons from "./AuthButtons";
import Icons from "./Icons";
import UserMenu from "./UserMenu";

// right side buttons of Navbar

type RightContentProps = {
  user?: User | null; // user optional and value can be null
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? (
          <Icons />
        ) : (
          // <Button onClick={() => signOut(auth)}>Logout</Button>
          <AuthButtons />
        )}
        <UserMenu user={user} />
      </Flex>
    </>
  );
};
export default RightContent;
