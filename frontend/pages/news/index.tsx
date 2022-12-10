import { Box, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import Article from "../../components/Article";
import Header from "../../components/Header";
import { selectPost } from "../../feature/post/postSlice";
import useCategoryFilter from "../../hooks/useCategoryFilter";
import { useAppSelector } from "../../lib/redux/hooks";

const News = () => {
  const posts = useAppSelector(selectPost);
  const { news } = useCategoryFilter(posts);
  return (
    <Box>
      <Header />
      <Stack p={4} spacing={8}>
        <Heading as="h1" color="blackAlpha.900">
          ニュース
        </Heading>
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={4}
        >
          {news.map((post, index) => {
            if (index > 4) return;
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

        <Link href="/">
          <Text color="blackAlpha.900">トップページへ</Text>
        </Link>
      </Stack>
    </Box>
  );
};

export default News;
