import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Article from "../components/Article";
import Header from "../components/Header";
import { getPosts, selectPost } from "../feature/post/postSlice";
import { Post } from "../feature/post/postType";
import { useAppDispatch, useAppSelector } from "../lib/redux/hooks";

export default function Home() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPost);
  const [news, setNews] = useState<Post[]>([]);
  const [memberOnlyContent, setMemberOnlyContent] = useState<Post[]>([]);
  useEffect(() => {
    (async () => {
      await dispatch(getPosts());
    })();
  }, []);

  useEffect(() => {
    if (posts.data) {
      let newsData = posts.data.filter((post) => {
        return post.category == "news";
      });
      setNews(newsData);

      let memberOnlyContentData = posts.data.filter((post) => {
        return post.category == "member-only-contents";
      });
      setMemberOnlyContent(memberOnlyContentData);
    }
  }, [posts]);
  return (
    <Box>
      <Header />
      <Stack p={4} spacing={4}>
        <Heading as="h2" fontSize="3xl" color="teal.400">
          トップページ
        </Heading>
        <Stack spacing={4}>
          <Heading as="h3" fontSize="xl">
            ニュース
          </Heading>
          {news.map((post, index) => {
            if (index > 2) return;
            return (
              <Article
                key={post.id}
                id={post.id}
                category={post.category}
                title={post.title}
                content={post.content}
                uploadedAt={post.uploadedAt}
              />
            );
          })}
          <Flex justify="center">
            <Link href="/news">
              <Button>もっとみる</Button>
            </Link>
          </Flex>
        </Stack>
        <Stack spacing={4}>
          <Heading as="h3" fontSize="xl">
            コミュニティ限定コンテンツ
          </Heading>
          {memberOnlyContent.map((post, index) => {
            if (index > 2) return;
            return (
              <Article
                key={post.id}
                id={post.id}
                category={post.category}
                title={post.title}
                content={post.content}
                uploadedAt={post.uploadedAt}
              />
            );
          })}
          <Flex justify="center">
            <Link href="/member-only-contents">
              <Button>もっとみる</Button>
            </Link>
          </Flex>
        </Stack>
      </Stack>
    </Box>
  );
}
