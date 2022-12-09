import { Box, Heading, Stack, Text } from "@chakra-ui/react";
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
      <Stack p={4} spacing={8}>
        <Box>
          <Heading
            as="h1"
            color="teal.400"
            dangerouslySetInnerHTML={{ __html: post && post.title }}
          ></Heading>
          <Text
            dangerouslySetInnerHTML={{ __html: post && post.uploadedAt }}
          ></Text>
        </Box>
        <Box bg="gray.50" minH="50vh" p={2}>
          <Text
            dangerouslySetInnerHTML={{ __html: post && post.content }}
          ></Text>
        </Box>
        <Link href="/">トップページへ</Link>
      </Stack>
    </Box>
  );
};

export default NewsDetail;
