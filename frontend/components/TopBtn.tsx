import { Button, Flex, Heading, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { signInWithRedirect, onAuthStateChanged } from "firebase/auth";
import { auth, provider, db } from "../lib/firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ChevronDownIcon } from '@chakra-ui/icons';

const TopBtn = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // ログイン時
      return (
        <Button>aaa</Button>
      );
    } else {
      // ログアウト時
      return (
        <Button colorScheme="red" size="sm"
          onClick={() => {
            signInWithRedirect(auth, provider);
            const user = auth.currentUser
            const displayName = user?.displayName
            const email = user?.email
            addDoc(collection(db, "users"), {
              name: displayName,
              email: email
            });
          }}
        >ログイン</Button>
      );
    }
  });
}

export default TopBtn;