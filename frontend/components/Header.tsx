import {
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { onAuthStateChanged, signInWithRedirect } from "firebase/auth";
import { auth, provider, db } from "../lib/firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ChevronDownIcon } from "@chakra-ui/icons";
import TopBtn from "./HeaderButton";
import Link from "next/link";
import HeaderButton from "./HeaderButton";
import { useEffect } from "react";
import { setUser } from "../feature/user/userSlice";
import { useAppDispatch } from "../lib/redux/hooks";

const Header = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            name: user.displayName,
          })
        );
      }
    });
  }, []);
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
      <HeaderButton />
    </Flex>
  );
};

export default Header;
