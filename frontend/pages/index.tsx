import { Box, Button, Flex, Grid, Heading, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Article from "../components/Article";
import Header from "../components/Header";
import { getPosts, selectPost } from "../feature/post/postSlice";
import { Post } from "../feature/post/postType";
import useCategoryFilter from "../hooks/useCategoryFilter";
import { useAppDispatch, useAppSelector } from "../lib/redux/hooks";

export default function Home() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPost);
  const { news, memberOnlyContent } = useCategoryFilter(posts);
  useEffect(() => {
    (async () => {
      await dispatch(getPosts());
    })();
  }, []);
  return (
    <Box>
      <Header />
      <Stack p={4} spacing={4}>
        <Heading as="h1" fontSize="3xl" color="teal.400">
          トップページ
        </Heading>
        <Stack spacing={4}>
          <Heading as="h3" fontSize="xl">
            ニュース
          </Heading>
          <Grid
            templateColumns={{ base: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
          >
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
          </Grid>
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
          <Grid
            templateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            gap={4}
          >
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
          </Grid>
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
