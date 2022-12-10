import { Flex, Heading, Text } from "@chakra-ui/react";

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
      <Heading as="h2" color="blackAlpha.900" size="xl">
        YNot
      </Heading>
      <Text color="blackAlpha.900" fontWeight="bold">
        テスト太郎さん
      </Text>
    </Flex>
  );
};

export default Header;
