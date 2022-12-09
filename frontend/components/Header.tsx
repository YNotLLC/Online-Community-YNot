import { Flex, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex bg="teal.400" justify="space-between" alignItems="center" p={4}>
      <Heading as="h2" color="gray.50" size="xl">
        YNot
      </Heading>
      <Text color="gray.50" fontWeight="bold">
        テスト太郎さん
      </Text>
    </Flex>
  );
};

export default Header;
