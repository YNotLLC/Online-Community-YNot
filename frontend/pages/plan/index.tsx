import { Box, Heading, Stack, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import Header from "../../components/Header";

const Planding = () => {
  return (
    <Box>
      <Header />
      <Stack p={4} spacing={8}>
        <Heading as="h1">プラン</Heading>
        <Box border='1px' borderColor='#d3d3d3'>
          <Box bg='white' textAlign='center'>
            <Text p={5} fontSize="3xl" textColor='black' fontWeight='bold'>フリー</Text>
          </Box>
          <Box bg='#F2F2F2' textAlign='center'>
            <Text p={10} fontSize='3xl' textColor='black' fontWeight='bold'>無料</Text>
            <Text p={10} textColor='black' fontWeight='bold'>コミュニティ限定コンテンツの閲覧</Text>
            <Button m={10}>申し込む</Button>
          </Box>
        </Box>
        <Box border='1px' borderColor='#d3d3d3'>
          <Box bg='white' textAlign='center'>
            <Text p={5} fontSize="3xl" textColor='black' fontWeight='bold'>メンバー</Text>
          </Box>
          <Box bg='#F2F2F2' textAlign='center'>
            <Text p={10} fontSize='3xl' textColor='black' fontWeight='bold'>1000円/月</Text>
            <Text p={10} textColor='black' fontWeight='bold'>
              コミュニティ限定コンテンツの閲覧<br />
              有料コンテンツの閲覧<br />
              コミュニティ限定Slackの参加<br />
              Notion、Slack、Google Workspaceの導入のカウンセリング
            </Text>
            <Button m={10}>申し込む</Button>
          </Box>
        </Box>
        <Link href="/">
          <Text>トップページへ</Text>
        </Link>
      </Stack>
    </Box>
  );
};

export default Planding;
