import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { selectPost } from "../../feature/post/postSlice";
import { useAppSelector } from "../../lib/redux/hooks";

const NewsDetail = () => {
  const router = useRouter();
  const id: number = Number(router.query.id);
  const posts = useAppSelector(selectPost);
  const post = posts.data[id];
  return (
    <Box>
      <Heading
        as="h1"
        dangerouslySetInnerHTML={{ __html: post.title }}
      ></Heading>
      <Text dangerouslySetInnerHTML={{ __html: post.content }}></Text>
      <Text dangerouslySetInnerHTML={{ __html: post.uploadedAt }}></Text>
    </Box>
  );
};

export default NewsDetail;
