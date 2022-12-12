import { Button, Flex, Heading, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
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
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme="red" size="sm">
          テスト太郎さん
        </MenuButton>
        <MenuList>
          <Link href="/">
            <MenuItem>ログアウト</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Header;
