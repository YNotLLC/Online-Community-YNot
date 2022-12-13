import { Button, Flex, Heading, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { ChevronDownIcon } from '@chakra-ui/icons';
import Link from "next/link";
import FirebaseApp from "../lib/firebase/firebase";

const Header = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(FirebaseApp);
  return (
    <Flex
      justify="space-between"
      alignItems="center"
      p={4}
      position="sticky"
      top="0"
      left="0"
    >
      <Link href="/">
        <Heading as="h2" size="xl">
          YNot
        </Heading>
      </Link>
      <Button colorScheme="red" size="sm"
        onClick={() => {
          signInWithRedirect(auth, provider);
        }}
      >ログイン</Button>
    </Flex>
  );
};

export default Header;
