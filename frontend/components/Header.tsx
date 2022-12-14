import { Button, Flex, Heading, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { signInWithRedirect } from "firebase/auth";
import { auth, provider } from "../lib/firebase/firebase";
import Link from "next/link";

const Header = () => {
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
