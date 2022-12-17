import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { auth } from "../lib/firebase/firebase";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useAppDispatch, useAppSelector } from "../lib/redux/hooks";
import { signOut } from "firebase/auth";
import { login, removeUser, selectUser } from "../feature/user/userSlice";

const HeaderButton = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  if (user.status == "succeeded" && user.isLoggedIn == true) {
    return (
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          colorScheme="red"
          size="sm"
        >
          {user.data?.name}さん
        </MenuButton>
        <MenuList>
          <MenuItem
            onClick={async () => {
              await signOut(auth);
              dispatch(removeUser());
            }}
          >
            ログアウト
          </MenuItem>
        </MenuList>
      </Menu>
    );
  } else {
    return (
      <Button
        colorScheme="red"
        size="sm"
        onClick={async () => {
          dispatch(login(auth));
        }}
      >
        ログイン
      </Button>
    );
  }
};

export default HeaderButton;
