import { Button, Flex, Heading, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { signInWithRedirect } from "firebase/auth";
import { auth, provider, db } from "../lib/firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ChevronDownIcon } from '@chakra-ui/icons';
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
        onClick={
          async () => {
            signInWithRedirect(auth, provider);
            const user = auth.currentUser
            const displayName = user?.displayName
            const email = user?.email
            await addDoc(collection(db, "users"), {
              name: displayName,
              email: email
            });
          }}
      >ログイン</Button>
    </Flex>
  );
};

export default Header;
