import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import { selectPost } from "../../feature/post/postSlice";
import { useAppSelector } from "../../lib/redux/hooks";

const NewsDetail = () => {
  const router = useRouter();
  const id: number = Number(router.query.id);
  const posts = useAppSelector(selectPost);
  const post = posts.data.filter((postData) => {
    return postData.id == id;
  })[0];
  return (
    <Box>
      <Header />
      <Stack p={4} spacing={8} maxW={800} mx="auto">
        <Box>
          <Heading
            as="h1"
            color="blackAlpha.900"
            dangerouslySetInnerHTML={{ __html: post && post.title }}
          ></Heading>
          <Text
            dangerouslySetInnerHTML={{ __html: post && post.uploadedAt }}
            color="blackAlpha.900"
          ></Text>
        </Box>
        <Box bg="gray.50" minH="50vh" p={2}>
          <Text
            dangerouslySetInnerHTML={{ __html: post && post.content }}
            color="blackAlpha.900"
          ></Text>
        </Box>
        <Link href="/">
          <Text color="blackAlpha.900">トップページへ</Text>
        </Link>
      </Stack>
    </Box>
  );
};

export default NewsDetail;
